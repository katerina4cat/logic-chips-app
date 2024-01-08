import { getColorWithState } from "../common/Colors";
import { removeElement } from "../common/RemoveElement";
import { Pin } from "./Pin";
import { Pos } from "../common/Pos";
import { createRef } from "react";
import { ChipTypes } from "../Structs/ChipMinimalInfo";
import { Bus } from "./Bus";

const radiusWire = 20;
let wireIDs = 0;

export class Wire {
    source: Pin;
    target: Pin;
    points: Pos[];
    graphicObject: React.RefObject<SVGPathElement>;
    id: number;
    error = false;
    constructor(source: Pin, target: Pin, points: Pos[]) {
        this.source = source;
        this.target = target;
        this.id = wireIDs;
        wireIDs++;
        this.points = [...points];
        this.graphicObject = createRef();
        if (this.testRecurse(source.chip.id)) {
            alert("Ошибка! Возможная бесконечная рекурсия при симуляции!");
            this.error = true;
            return;
        }

        if (this.source.chip.chipType != ChipTypes.BUS)
            this.points.unshift(this.source.position);
        if (this.target.chip.chipType != ChipTypes.BUS)
            this.points.push(this.target.position);
        this.target.addState(source.states);
        this.source.outWires.push(this);
        this.target.inWires.push(this);
        this.source.refreshState();
    }

    /**
     * Проверяет есть ли бесконечная рекурсия при подключении провода.
     * Т.е. не обновляет ли провод чип, от которого зависит исходный.
     */
    testRecurse(sourceChipID: number) {
        if (this.target.chip.id == 0) return false;
        if (this.target.chip.id == sourceChipID) return true;
        for (const pin of this.target.chip.output)
            for (const wire of pin.outWires)
                if (wire.testRecurse(sourceChipID)) return true;
        return false;
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
        if (
            this.source.chip.chipType == ChipTypes.BUS &&
            this.target.chip.chipType == ChipTypes.BUS
        ) {
            removeElement((this.source.chip as Bus).output, this.source);
            removeElement((this.target.chip as Bus).output, this.target);
            (this.source.chip as Bus).remBusConnection(this.target.chip as Bus);
            return;
        }

        if (this.source.chip.chipType == ChipTypes.BUS) {
            removeElement((this.source.chip as Bus).output, this.source);
        } else removeElement(this.source.outWires, this);

        if (this.target.chip.chipType == ChipTypes.BUS) {
            removeElement((this.target.chip as Bus).input, this.target);
            (this.target.chip as Bus).updateLogic();
        } else {
            removeElement(this.target.inWires, this);
            this.target.removeState(this.source.states);
        }
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
