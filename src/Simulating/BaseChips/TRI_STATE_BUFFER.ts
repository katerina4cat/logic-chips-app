import { Pin } from "../Pin";
import { PinState } from "../../common/State";
import { States } from "../../common/State";
import { Pos } from "../../common/Pos";
import { Chip } from "../Chip";

export class TRI_STATE_BUFFER extends Chip {
    isBase = true;
    constructor(id = Date.now(), position?: Pos) {
        super(undefined, id, "TRI-STATE BUFFER", "#262626", position);
        this.input = [
            new Pin(this, true, 0, "Data"),
            new Pin(this, true, 1, "Enable"),
        ];
        this.output.push(new Pin(this, false, 2, "R"));
        this.output[0].addState(
            new PinState(this.output[0].id, States.UNDEFINED)
        );
    }

    override updatedOutputs() {
        const A = this.input[0].totalState;
        const B = this.input[1].totalState;
        let res = States.UNDEFINED;
        if (B == States.FLOATING) res = States.FLOATING;
        else if (B == States.HIGH) res = A;
        else res = States.UNDEFINED;
        this.output[0].refreshState(new PinState(this.output[0].id, res));
    }
}
