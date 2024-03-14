import { removeElement } from "../common/RemoveElement";
import { Pin } from "./Pin";
import { Pos } from "../common/Pos";
import { ChipTypes } from "../Structs/ChipMinimalInfo";
import { Bus } from "./BaseChips/Bus";
import { action, computed, makeObservable, observable } from "mobx";

const radiusWire = 20;
let wireIDs = 0;

export class Wire {
    @observable source: Pin;
    @observable target: Pin;
    @observable points: Pos[];
    id: number;
    error = false;
    constructor(source: Pin, target: Pin, points: Pos[]) {
        makeObservable(this);
        this.source = source;
        this.target = target;
        this.id = wireIDs;
        wireIDs++;
        this.points = [...points];
        if (this.testRecurse(source.chip.id)) {
            alert("Ошибка! Возможная бесконечная рекурсия при симуляции!");
            this.error = true;
            return;
        }

        if (this.source.chip.chipType != ChipTypes.BUS)
            this.points.unshift(this.source.position);
        if (this.target.chip.chipType != ChipTypes.BUS)
            this.points.push(this.target.position);
        if (
            this.source.chip.chipType == ChipTypes.BUS &&
            this.target.chip.chipType == ChipTypes.BUS
        )
            (this.source.chip as Bus).addBusConnection(this.target.chip as Bus);
        this.target.addState(source.totalState);
    }

    /**
     * Проверяет есть ли бесконечная рекурсия при подключении провода.
     * Т.е. не обновляет ли провод чип, от которого зависит исходный.
     */
    testRecurse(sourceChipID: number) {
        if (this.target.chip.id == 0) return false;
        if (this.target.chip.id == sourceChipID) return true;
        return false;
    }

    /**
     * Удаляет у связь у связанного пина и удаляет из внутренних списков проводов текущий провод.
     */
    @action deletingWire() {
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
        }

        if (this.target.chip.chipType == ChipTypes.BUS) {
            removeElement((this.target.chip as Bus).input, this.target);
        } else {
            this.target.removeState(this.source.totalState);
        }
    }

    @action addDeltaToPoints = (delta: Pos) => {
        this.points.forEach((point) => point.add(delta));
        return this;
    };
    /**
     * Устанавливает точки провода с расчётом закругления
     * TODO:
     * Нужно оптимизировать периросовка должна реализовываться по первой и последней точки провода
     * @returns
     */
    @computed get drawWire() {
        let path = `M${this.source.position.x},${this.source.position.y}`;
        for (let i = 1; i < this.points.length - 1; i++) {
            const previousPoint =
                i - 1 === 0 ? this.source.position : this.points[i - 1];
            const currentPoint = this.points[i];
            const nextPoint =
                i + 1 === this.points.length - 1
                    ? this.target.position
                    : this.points[i + 1];

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
        path += `L${this.target.position.x},${this.target.position.y}`;
        return path;
    }
}
