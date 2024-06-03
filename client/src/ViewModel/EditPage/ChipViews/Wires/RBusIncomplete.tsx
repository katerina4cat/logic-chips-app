import cl from "./RBus.module.scss";
import { Pos } from "../../../../common/Pos";
import { Colors } from "@shared/models/common/Colors";
import { getColorWithState } from "../../../../common/Colors";
import { BusEndPosWidth } from "../../../../common/DefaultSettings";
import { action, computed, makeObservable, observable } from "mobx";
import { ViewModel, view } from "@yoskutik/react-vvm";
import { States } from "../../../../common/State";
import { EditPageViewModel } from "../../EditPage";

export class BusIncompleteViewModel extends ViewModel<EditPageViewModel> {
    @observable points: Pos[] = [new Pos()];
    radius = 20;
    constructor() {
        super();
        makeObservable(this);
    }
    protected onViewUnmounted(): void {
        window.removeEventListener("mousedown", this.mouseDown);
        window.removeEventListener("mousemove", this.mouseMove);
    }

    @action mouseDown = (e: MouseEvent) => {
        this.points.push(new Pos(e.pageX, e.pageY));
        if (e.shiftKey) return;
        if (this.points.length < 3) return;
        const pastedPoints = [...this.points];
        this.points = [new Pos()];
        pastedPoints.pop();
        this.parent.editorObjectsManager.addBus(pastedPoints);
        this.parent.editorObjectsManager.addingBus = false;
    };

    @action mouseMove = (e: MouseEvent) => {
        this.points[this.points.length - 1].x = e.pageX;
        this.points[this.points.length - 1].y = e.pageY;
    };

    /**
     * Устанавливает точки провода с расчётом закругления
     * TODO:
     * Нужно оптимизировать периросовка должна реализовываться по первой и последней точки провода
     * @returns
     */
    @computed get drawWires() {
        if (this.points.length < 2) return "";
        let path = `M${this.points[0].x},${this.points[0].y}`;
        for (let i = 1; i < this.points.length - 1; i++) {
            const previousPoint = this.points[i - 1];
            const currentPoint = this.points[i];
            const nextPoint = this.points[i + 1];

            const lcpx = currentPoint.x - previousPoint.x;
            const lcpy = currentPoint.y - previousPoint.y;
            let dCoefcp = this.radius / Math.sqrt(lcpx * lcpx + lcpy * lcpy);
            let qx, qy;
            if (dCoefcp >= 0.5) {
                qx = currentPoint.x - lcpx / 2;
                qy = currentPoint.y - lcpy / 2;
            } else {
                qx = currentPoint.x - lcpx * dCoefcp;
                qy = currentPoint.y - lcpy * dCoefcp;
            }

            const lpnx = nextPoint.x - currentPoint.x;
            const lpny = nextPoint.y - currentPoint.y;
            const dCoefpn = this.radius / Math.sqrt(lpnx * lpnx + lpny * lpny);
            let ex, ey;
            if (dCoefpn >= 0.5) {
                ex = currentPoint.x + lpnx / 2;
                ey = currentPoint.y + lpny / 2;
            } else {
                ex = currentPoint.x + lpnx * dCoefpn;
                ey = currentPoint.y + lpny * dCoefpn;
            }
            path += ` L${qx},${qy}Q${currentPoint.x},${currentPoint.y},${ex},${ey}`;
        }
        path += `L${this.points[this.points.length - 1].x},${
            this.points[this.points.length - 1].y
        }`;
        return path;
    }
}

export const BusIncomplete = view(BusIncompleteViewModel)(({ viewModel }) => {
    if (viewModel.parent.editorObjectsManager.addingBus) {
        window.addEventListener("mousedown", viewModel.mouseDown);
        window.addEventListener("mousemove", viewModel.mouseMove);
    } else {
        window.removeEventListener("mousedown", viewModel.mouseDown);
        window.removeEventListener("mousemove", viewModel.mouseMove);
        return;
    }
    return (
        <g>
            <rect
                x={viewModel.points[0].x - BusEndPosWidth / 2}
                y={viewModel.points[0].y - BusEndPosWidth / 2}
                width={BusEndPosWidth}
                height={BusEndPosWidth}
                fill={getColorWithState(States.UNDEFINED, Colors["red"])}
                className={cl.BusEndPos}
            />
            {viewModel.points.length > 1 && (
                <rect
                    x={
                        viewModel.points[viewModel.points.length - 1].x -
                        BusEndPosWidth / 2
                    }
                    y={
                        viewModel.points[viewModel.points.length - 1].y -
                        BusEndPosWidth / 2
                    }
                    width={BusEndPosWidth}
                    height={BusEndPosWidth}
                    fill={getColorWithState(States.UNDEFINED, Colors["red"])}
                    className={cl.BusEndPos}
                />
            )}
            <path
                stroke={getColorWithState(States.UNDEFINED, Colors["red"])}
                style={{ cursor: "default", strokeWidth: 4 }}
                fill="none"
                d={viewModel.drawWires}
            />
        </g>
    );
});
