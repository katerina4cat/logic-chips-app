import { createRef } from "react";
import { State } from "../../common/State";
import { Chip } from "../Chip";
import { Color, Colors, getColorWithState } from "../../common/Colors";
import { ChipTypes } from "../../Structs/ChipMinimalInfo";
import { Pos } from "../../common/Pos";
import { Pin } from "../Pin";
import { removeElement } from "../../common/RemoveElement";
import { Wire } from "../Wire";

export class Bus extends Chip {
    ref = createRef<SVGPathElement>();
    chipType = ChipTypes.BUS;
    isBase = true;
    Wcolor: Color = Colors.red;
    phantomPin: Pin;
    from: Pos;
    to: Pos;
    depentBus: Bus[] = [];

    constructor(from: Pos, to: Pos, id?: number) {
        super(undefined, id, "BUS", undefined, undefined);
        this.from = from;
        this.to = to;
        this.phantomPin = new Pin(this, true);
    }

    // getAllDepentBuses(addedBus: { current: Bus[] }): { current: Bus[] } {
    //     const res: Bus[] = this.depentBus.filter(
    //         (bus) => !addedBus.current.find((buss) => buss.id == bus.id)
    //     );
    //     addedBus.current.push(...res);
    //     res.forEach((dep) => {
    //         dep.getAllDepentBuses(addedBus);
    //     });
    //     return addedBus;
    // }

    // override updateLogic(): void {
    //     const depentBuses = this.getAllDepentBuses({ current: [this] });
    //     let res: State.States = State.States.UNDEFINED;
    //     depentBuses.current.forEach((bus) =>
    //         bus.input.forEach((inPin) => {
    //             if (inPin.canUpdatePropagate == false) return;
    //             if (
    //                 inPin.totalState == State.States.FLOATING ||
    //                 res == State.States.FLOATING
    //             ) {
    //                 res = State.States.FLOATING;
    //                 return;
    //             }
    //             if (inPin.totalState != State.States.UNDEFINED) {
    //                 if (res == State.States.UNDEFINED) res = inPin.totalState;
    //                 else res = State.States.FLOATING;
    //             }
    //         })
    //     );
    //     depentBuses.current.forEach((bus) => {
    //         if (bus.ref.current)
    //             bus.ref.current.style.stroke = getColorWithState(
    //                 res,
    //                 bus.Wcolor
    //             );
    //         console.log(bus.output);
    //         bus.output.forEach((pin) => (pin.states[0].value = res));
    //     });
    //     if (this.ref.current)
    //         this.ref.current.style.stroke = getColorWithState(res, this.Wcolor);
    //     this.output.forEach((pin) => (pin.states[0].value = res));
    // }

    /**
     * Создаёт и возвращает провод между двумя шинами и настраивать их
     */
    createWireToBus(targetBus: Bus, WirePoints: Pos[]): Wire {
        const buffSource = new Pin(
            this,
            false,
            undefined,
            undefined,
            undefined,
            true,
            WirePoints[0],
            false
        );
        this.output.push(buffSource);

        const buff = new Pin(
            targetBus,
            false,
            undefined,
            undefined,
            undefined,
            true,
            WirePoints[WirePoints.length - 1],
            false
        );
        targetBus.output.push(buff);

        (buffSource.chip as Bus).addBusConnection(buff.chip as Bus);
        // buffSource.chip.updateLogic();
        return new Wire(buffSource, buff, WirePoints);
    }

    /**
     * Таргет буса устанавливается у первой выбранной шины.
     * В таргет бусе добавляется ссылка на зависимую текущую бусу.
     */
    addBusConnection = (connectedBus: Bus) => {
        if (!connectedBus.depentBus.some((bus) => bus.id == this.id))
            connectedBus.depentBus.push(this);
        if (!this.depentBus.some((bus) => bus.id == connectedBus.id))
            this.depentBus.push(connectedBus);
    };

    /**
     * Удаляет соеденения с шиной
     */
    remBusConnection(connectedBus: Bus) {
        removeElement(connectedBus.depentBus, this);
        removeElement(this.depentBus, connectedBus);
        // connectedBus.updateLogic();
        // this.updateLogic();
    }
}
