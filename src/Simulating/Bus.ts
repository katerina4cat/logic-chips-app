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
    targetBus?: Bus;
    depentBuses: Bus[] = [];

    constructor(from: Pos, to: Pos, id = Date.now()) {
        super(undefined, id, "BUS", undefined, undefined);
        this.from = from;
        this.to = to;
        this.phantomPin = new Pin(this, true);
    }

    getAllDepentBuses(): Bus[] {
        const res = [...this.depentBuses];
        for (const targ of this.depentBuses)
            res.push(...targ.getAllDepentBuses());
        return res;
    }

    override updateLogic(): void {
        const depentBuses = [this, ...this.getAllDepentBuses()];
        let res: State.States = State.States.UNDEFINED;
        console.log(depentBuses);
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
     * Добавляет ссылку на другую шину текущей шине.
     * Логика будет обрабатываться в подключаемой шине.
     */
    addBusConnection(connectedBus: Bus) {
        connectedBus.targetBus = this;
        this.depentBuses.push(connectedBus);
    }

    /**
     * Удаляет соеденения с шиной
     */
    remBusConnection() {
        if (this.targetBus) removeElement(this.targetBus.depentBuses, this);
        this.targetBus = undefined;
    }
}
