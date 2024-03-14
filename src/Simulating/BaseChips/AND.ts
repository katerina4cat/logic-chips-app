import { Pin } from "../Pin";
import { State } from "../../common/State";
import { Pos } from "../../common/Pos";
import { Chip } from "../Chip";

export class AND extends Chip {
    readonly isBase = true;
    constructor(id = Date.now(), position?: Pos) {
        super(undefined, id, "AND", "#267ab2", position, undefined);
        this.input = [new Pin(this, true, 0, "A"), new Pin(this, true, 1, "B")];
        this.output.push(new Pin(this, false, 2, "R"));
        this.output[0].addState(new State(State.States.LOW));
    }

    override get updatedOutputs() {
        const A = this.input[0].totalState;
        console.log(A);
        const B = this.input[1].totalState;
        let res = new State(State.States.UNDEFINED);
        if (
            A.value == State.States.FLOATING ||
            B.value == State.States.FLOATING
        )
            res.value = State.States.FLOATING;
        else if (
            A.value == State.States.UNDEFINED ||
            B.value == State.States.UNDEFINED
        )
            res.value = State.States.LOW;
        else
            res.value =
                A.value == State.States.HIGH && A == B
                    ? State.States.HIGH
                    : State.States.LOW;
        this.output[0].states[0] = res;
        return this.output;
    }
}
