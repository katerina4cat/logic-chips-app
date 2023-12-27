import { getColorWithState } from "../common/Colors";
import { removeElement } from "../common/RemoveElement";
import { Pin } from "./Pin";
import { Pos } from "../common/Pos";
import { createRef } from "react";

const radiusWire = 20;
let wireIDs = 0;

export class Wire {
    source: Pin;
    target: Pin;
    points: Pos[];
    graphicObject: React.RefObject<SVGPathElement>;
    id: number;
    constructor(source: Pin, target: Pin, points: Pos[]) {
        this.id = wireIDs;
        wireIDs++;
        this.source = source;
        this.target = target;
        this.points = [...points];
        if (this.source.chip.name != "BUS")
            this.points[0] = this.source.position;
        if (this.target.chip.name != "BUS")
            this.points[points.length - 1] = this.target.position;
        this.target.addState(source.states);
        this.source.outWires.push(this);
        this.target.inWires.push(this);
        this.source.refreshState();
        this.graphicObject = createRef();
    }

    /**
     * Обновляет цвет провода, исходя из состояния исходящего пина.
     */
    updateColor() {
        if (this.graphicObject && this.graphicObject.current)
            this.graphicObject.current.style.stroke = getColorWithState(
                this.source.totalState,
                this.source.color
            );
    }

    /**
     * Удаляет у связь у связанного пина и удаляет из внутренних списков проводов текущий провод.
     */
    deletingWire() {
        this.target.removeState(this.source.states);
        removeElement(this.target.inWires, this);
        removeElement(this.source.outWires, this);
    }

    /**
     * Устанавливает точки провода с расчётом закругления
     * TODO:
     * Нужно оптимизировать периросовка должна реализовываться по первой и последней точки провода
     * @returns
     */
    drawWire() {
        let path = `M${this.points[0].x},${this.points[0].y}`;

        for (let i = 1; i < this.points.length - 1; i++) {
            const previousPoint = this.points[i - 1];
            const currentPoint = this.points[i];
            const nextPoint = this.points[i + 1];

            const lcpx = currentPoint.x - previousPoint.x;
            const lcpy = currentPoint.y - previousPoint.y;
            let dCoefcp = radiusWire / Math.sqrt(lcpx * lcpx + lcpy * lcpy);
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
            const dCoefpn = radiusWire / Math.sqrt(lpnx * lpnx + lpny * lpny);
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
        this.graphicObject?.current?.setAttribute("d", path);
        return path;
    }
}
