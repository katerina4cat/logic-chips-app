import { Pin } from "../Pin";
import { State } from "../../common/State";
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
        this.output.push(new Pin(this, false, 1, "Output"));
        this.output[0].addState(new State(State.States.UNDEFINED));
    }

    override get updatedOutputs() {
        const A = this.input[0].totalState;
        const B = this.input[1].totalState;
        let res = new State(State.States.UNDEFINED);
        if (B.value == State.States.FLOATING) res.value = State.States.FLOATING;
        else if (B.value == State.States.HIGH) res = A;
        else res.value = State.States.UNDEFINED;
        this.output[0].states[0] = res;
        return this.output;
    }
}
