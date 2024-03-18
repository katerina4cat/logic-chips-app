import { Pin } from "../Pin";
import { PinState } from "../../common/State";
import { State } from "../../common/State";
import { Pos } from "../../common/Pos";
import { Chip } from "../Chip";
import { reaction } from "mobx";

export class TRI_STATE_BUFFER extends Chip {
    isBase = true;
    constructor(id = Date.now(), position?: Pos) {
        super(undefined, id, "TRI-STATE BUFFER", "#262626", position);
        this.input = [
            new Pin(this, true, 0, "Data"),
            new Pin(this, true, 1, "Enable"),
        ];
        this.output.push(new Pin(this, false, 1, "Output"));
        this.output[0].addState(
            new PinState(this.output[0].id, State.States.UNDEFINED)
        );
        this.input.forEach((pin) =>
            reaction(
                () => pin.totalState,
                () => {
                    this.updatedOutputs();
                }
            )
        );
    }

    override updatedOutputs() {
        const A = this.input[0].totalState;
        const B = this.input[1].totalState;
        let res = State.States.UNDEFINED;
        if (B == State.States.FLOATING) res = State.States.FLOATING;
        else if (B == State.States.HIGH) res = A;
        else res = State.States.UNDEFINED;
        this.output[0].refreshState(new PinState(this.output[0].id, res));
    }
}
