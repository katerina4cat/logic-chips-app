import { createRef } from "react";
import { State } from "../common/State";
import { Chip } from "./Chip";
import { Color, Colors, getColorWithState } from "../common/Colors";
import { ChipTypes } from "../Structs/ChipMinimalInfo";
import { Pos } from "../common/Pos";
import { Pin } from "./Pin";

export class Bus extends Chip {
    ref = createRef<SVGPathElement>();
    chipType = ChipTypes.BUS;
    isBase = true;
    Wcolor: Color = Colors.red;
    phantomPin: Pin;
    from: Pos;
    to: Pos;
    constructor(from: Pos, to: Pos, id = Date.now()) {
        super(undefined, id, "BUS", undefined, undefined);
        this.from = from;
        this.to = to;
        this.phantomPin = new Pin(this, true);
    }
    override updateLogic(): void {
        let res: State.States = State.States.UNDEFINED;
        this.input.forEach((inPin) => {
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
        });
        if (this.ref.current)
            this.ref.current.style.stroke = getColorWithState(res, this.Wcolor);
        this.output.forEach((pin) => (pin.states[0].value = res));
    }
}
