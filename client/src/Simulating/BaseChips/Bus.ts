import { Chip } from "../Chip";
import { ChipTypes } from "@shared/models/saves/ChipInfo";
import { Pos } from "../../common/Pos";
import { removeElement } from "../../common/RemoveElement";
import { Color, Colors } from "@shared/models/common/Colors";
import { action, computed, makeObservable, observable } from "mobx";
import { States } from "../../common/State";
import { BusInfo } from "@shared/models/saves/BusInfo";
import { BusPin } from "../Pin";

export class Bus extends Chip {
    @observable positions: Pos[];
    @observable depentBus: Bus[] = [];
    @observable BusColor: Color;

    radius = 20;
    chipType = ChipTypes.BUS;
    isBase = true;

    @computed get totalState() {
        const dependedBuses = this.findAllDependentBuses();
        let res = States.UNDEFINED;
        for (const bus of dependedBuses) {
            if (res === States.FLOATING) break;
            for (const pin of bus.input) {
                const state = pin.totalState;
                if (state === States.FLOATING) {
                    res = States.FLOATING;
                    break;
                } else if (state !== States.UNDEFINED) {
                    if (res === States.UNDEFINED) {
                        res = state; // Устанавливаем состояние, если оно еще не было определено
                    } else {
                        res = States.FLOATING; // Возвращаем FLOATING, если состояния конфликтуют
                        break;
                    }
                }
            }
        }
        this.setToAll(dependedBuses, res);
        return res; // Возвращаем итоговое состояние после проверки всех пинов
    }

    override updatedOutputs() {
        this.totalState;
    }

    /**
     * Устанавливает всем
     * **dependedBuses** значение состояния
     * **state**
     */
    @action setToAll = (dependedBuses: Bus[], state: States) => {
        dependedBuses.forEach((bus) =>
            bus.output.forEach((pin) => (pin.states[0].value = state))
        );
    };

    constructor(positions: Pos[], id?: number, BusColor?: Color) {
        super(undefined, id, "BUS", undefined, undefined);
        makeObservable(this);
        this.positions = positions;
        this.BusColor = BusColor || Colors.red;
    }

    /**
     * Находит все зависимые шины и их связи.
     * @param visited - Set для отслеживания посещенных шин.
     * @param results - массив для сбора всех уникальных шин.
     */
    findAllDependentBuses(
        visited = new Set<Bus>(),
        results: Bus[] = []
    ): Bus[] {
        // Добавляем текущую шину в посещенные и результаты, если еще не была посещена
        if (!visited.has(this)) {
            visited.add(this);
            results.push(this);
            // Рекурсивно посещаем все зависимые шины
            this.depentBus.forEach((bus) => {
                bus.findAllDependentBuses(visited, results);
            });
        }
        return results;
    }

    /**
     * Таргет буса устанавливается у первой выбранной шины.
     * В таргет бусе добавляется ссылка на зависимую текущую бусу.
     */
    @action addBusConnection = (connectedBus: Bus) => {
        if (!connectedBus.depentBus.some((bus) => bus.id == this.id))
            connectedBus.depentBus.push(this);
        if (!this.depentBus.some((bus) => bus.id == connectedBus.id))
            this.depentBus.push(connectedBus);
    };

    /**
     * Удаляет соеденения с шиной
     */
    @action remBusConnection(connectedBus: Bus) {
        removeElement(connectedBus.depentBus, this);
        removeElement(this.depentBus, connectedBus);
        // connectedBus.updateLogic();
        // this.updateLogic();
    }

    /**
     * Устанавливает точки провода с расчётом закругления
     * TODO:
     * Нужно оптимизировать периросовка должна реализовываться по первой и последней точки провода
     * @returns
     */
    @computed get drawWire() {
        let path = `M${this.positions[0].x},${this.positions[0].y}`;
        for (let i = 1; i < this.positions.length - 1; i++) {
            const previousPoint = this.positions[i - 1];
            const currentPoint = this.positions[i];
            const nextPoint = this.positions[i + 1];

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
        path += `L${this.positions[this.positions.length - 1].x},${
            this.positions[this.positions.length - 1].y
        }`;
        return path;
    }

    /**
     * Конвертирует текущий объект в JSON объект для сохранения
     * @returns
     */
    toBusInfo = () =>
        new BusInfo(
            this.id,
            this.name,
            this.BusColor.id,
            this.positions,
            this.input.map((pin) => pin.toPinInfo()),
            this.output.map((pin) => pin.toPinInfo())
        );

    static fromBusInfo = (source: BusInfo) => {
        const buff = new Bus(
            source.positions.map((pos) => new Pos(pos)),
            source.id,
            Colors[source.color]
        );
        buff.input = source.inputs.map(
            (pin) =>
                new BusPin(
                    buff,
                    pin.distanceFromZero as number,
                    true,
                    pin.id,
                    pin.name,
                    undefined,
                    undefined,
                    undefined,
                    Object.values(Colors).find((clr) => clr.id === pin.colorID)
                )
        );
        buff.output = source.outputs.map(
            (pin) =>
                new BusPin(
                    buff,
                    pin.distanceFromZero as number,
                    false,
                    pin.id,
                    pin.name,
                    undefined,
                    true,
                    undefined,
                    Object.values(Colors).find((clr) => clr.id === pin.chipID)
                )
        );
        return buff;
    };
}
