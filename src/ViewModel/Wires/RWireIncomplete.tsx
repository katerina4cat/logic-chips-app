import cl from "./RWireIncomplete.module.scss";
import { Wire } from "../../Simulating/Wire";
import { Pin } from "../../Simulating/Pin";
import { Pos } from "../../common/Pos";
import { ChipTypes } from "../../Structs/ChipMinimalInfo";
import { ViewModel, view } from "@yoskutik/react-vvm";
import { action, computed, makeObservable, observable } from "mobx";
import { EditPageViewModel } from "../EditPage";
import { getColorWithState } from "../../common/Colors";

export class WireIncompleteViewModel extends ViewModel<EditPageViewModel> {
    @observable points: Pos[] = [];
    @observable firstPin?: Pin;
    @observable radiusWire = 20;

    constructor() {
        super();
        makeObservable(this);
        this.parent.wireIncompleteViewModel = this;
    }
    @action clickToPin = (pin: Pin, ctrlKey: boolean) => {
        if (!this.firstPin) {
            this.firstPin = pin;
            this.points = [pin.position, new Pos()];
            window.addEventListener("mousemove", this.handleMouseMove);
            window.addEventListener("keydown", this.handleKeyDown);
            return;
        }
        let firstIsSource =
            (this.firstPin.isInput && this.firstPin.chip.id == 0) ||
            (!this.firstPin.isInput && this.firstPin.chip.id != 0);
        let pinIsSource =
            (pin.isInput && pin.chip.id == 0) ||
            (!pin.isInput && pin.chip.id != 0);
        if (firstIsSource && !pinIsSource) {
            if (this.firstPin.chip.chipType != ChipTypes.BUS) {
                this.points.shift();
            }
            if (pin.chip.chipType != ChipTypes.BUS) this.points.pop();
            this.parent.addWire(new Wire(this.firstPin, pin, [...this.points]));
            if (!ctrlKey) this.clear();
            return;
        }
        if (pinIsSource && !firstIsSource) {
            this.points.reverse();
            if (this.firstPin.chip.chipType != ChipTypes.BUS) this.points.pop();
            if (pin.chip.chipType != ChipTypes.BUS) this.points.shift();
            this.parent.addWire(new Wire(pin, this.firstPin, [...this.points]));
            this.clear();
            return;
        }
        console.log("2 ПИНА ЛИБО ОБА СУРСЫ, ЛИБО ОБА ТАРГЕТЫ");
    };
    @action wirePointClick = (
        e: React.MouseEvent<SVGSVGElement, MouseEvent>
    ) => {
        if (this.firstPin) this.points.push(new Pos(e.pageX, e.pageY));
    };

    @action clear = () => {
        this.firstPin = undefined;
        this.points = [];
        window.removeEventListener("mousemove", this.handleMouseMove);
        window.removeEventListener("keydown", this.handleKeyDown);
    };

    @action handleKeyDown = (e: KeyboardEvent) => {
        if (e.key == "Escape") this.clear();
    };

    @action handleMouseMove = (e: MouseEvent) => {
        this.points[this.points.length - 1].x = e.pageX;
        this.points[this.points.length - 1].y = e.pageY;
    };

    @computed get drawWire() {
        if (!this.firstPin) return "";
        let path = `M${this.firstPin.position.x},${this.firstPin.position.y}`;
        for (let i = 1; i < this.points.length - 1; i++) {
            const previousPoint =
                i - 1 === 0 ? this.firstPin.position : this.points[i - 1];
            const currentPoint = this.points[i];
            const nextPoint = this.points[i + 1];

            const lcpx = currentPoint.x - previousPoint.x;
            const lcpy = currentPoint.y - previousPoint.y;
            let dCoefcp =
                this.radiusWire / Math.sqrt(lcpx * lcpx + lcpy * lcpy);
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
            const dCoefpn =
                this.radiusWire / Math.sqrt(lpnx * lpnx + lpny * lpny);
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

export const RWireIncomplete = view(WireIncompleteViewModel)(
    ({ viewModel }) => {
        return (
            <path
                className={cl.RWireIncomplete}
                d={viewModel.drawWire}
                stroke={
                    viewModel.firstPin
                        ? getColorWithState(
                              viewModel.firstPin.totalState.value,
                              viewModel.firstPin.color
                          )
                        : undefined
                }
            ></path>
        );
    }
);
