import { Pin } from "../Pin";
import { State } from "../../common/State";
import { Pos } from "../../common/Pos";
import { Chip } from "../Chip";

export class NOT extends Chip {
    readonly isBase = true;
    constructor(id = Date.now(), position?: Pos) {
        super(undefined, id, "NOT", "#8c1f1a", position, undefined);
        this.input.push(new Pin(this, true, 0, "A"));
        this.output.push(new Pin(this, false, 1, "R"));
        this.output[0].addState(new State(State.States.HIGH));
    }

    override get updatedOutputs() {
        const A = this.input[0].totalState;
        let res = new State(State.States.UNDEFINED);
        if (A.value == State.States.FLOATING) res.value = State.States.FLOATING;
        else if (A.value == State.States.UNDEFINED)
            res.value = State.States.HIGH;
        else
            res.value =
                A.value == State.States.LOW
                    ? State.States.HIGH
                    : State.States.LOW;
        this.output[0].states[0] = res;
        return this.output;
    }
}
