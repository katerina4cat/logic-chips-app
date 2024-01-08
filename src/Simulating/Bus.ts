import { createRef } from "react";
import { State } from "../common/State";
import { Chip } from "./Chip";
import { Color, Colors, getColorWithState } from "../common/Colors";
import { ChipTypes } from "../Structs/ChipMinimalInfo";
import { Pos } from "../common/Pos";
import { Pin } from "./Pin";
import { removeElement } from "../common/RemoveElement";

export class Bus extends Chip {
    ref = createRef<SVGPathElement>();
    chipType = ChipTypes.BUS;
    isBase = true;
    Wcolor: Color = Colors.red;
    phantomPin: Pin;
    from: Pos;
    to: Pos;
    targetBus: Bus[] = [];
    depentBus: Bus[] = [];

    constructor(from: Pos, to: Pos, id = Date.now()) {
        super(undefined, id, "BUS", undefined, undefined);
        this.from = from;
        this.to = to;
        this.phantomPin = new Pin(this, true);
    }

    /**
     * Тут ошибка с поиском всех зависимых
     */
    getAllDepentBuses(addedBus: Bus[]): Bus[] {
        // const res: Bus[] = [
        //     ...this.depentBus.filter(
        //         (bus) => !addedBus.find((buss) => buss.id == bus.id)
        //     ),
        //     ...this.targetBus.filter(
        //         (bus) => !addedBus.find((buss) => buss.id == bus.id)
        //     ),
        // ];
        // res.forEach((dep) => addedBus.push(...dep.getAllDepentBuses(addedBus)));
        return addedBus;
    }

    override updateLogic(): void {
        const depentBuses = this.getAllDepentBuses([this]);
        let res: State.States = State.States.UNDEFINED;
        depentBuses.forEach((bus) =>
            bus.input.forEach((inPin) => {
                if (!inPin.canUpdatePropagate) return;
                if (
                    inPin.totalState == State.States.FLOATING ||
                    res == State.States.FLOATING
                ) {
                    res = State.States.FLOATING;
                    return;
                }
                if (inPin.totalState != State.States.UNDEFINED) {
                    if (res == State.States.UNDEFINED) res = inPin.totalState;
                    else res = State.States.FLOATING;
                }
            })
        );
        depentBuses.forEach((bus) => {
            if (bus.ref.current)
                bus.ref.current.style.stroke = getColorWithState(
                    res,
                    bus.Wcolor
                );
            bus.output.forEach((pin) => (pin.states[0].value = res));
        });
        if (this.ref.current)
            this.ref.current.style.stroke = getColorWithState(res, this.Wcolor);

        this.output.forEach((pin) => (pin.states[0].value = res));
    }

    /**
     * Таргет буса устанавливается у первой выбранной шины.
     * В таргет бусе добавляется ссылка на зависимую текущую бусу.
     */
    addBusConnection = (connectedBus: Bus) => {
        this.targetBus.push(connectedBus);
        connectedBus.depentBus.push(this);
    };

    /**
     * Удаляет соеденения с шиной
     */
    remBusConnection(connectedBus: Bus) {
        removeElement(this.targetBus, connectedBus);
        removeElement(connectedBus.depentBus, this);
    }
}
