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
        this.output[0].addState({
            id: this.output[0].id,
            value: State.States.LOW,
        });
    }

    override updatedOutputs() {
        const A = this.input[0].totalState;
        const B = this.input[1].totalState;
        let res = State.States.UNDEFINED;
        if (A == State.States.FLOATING || B == State.States.FLOATING)
            res = State.States.FLOATING;
        else if (A == State.States.UNDEFINED || B == State.States.UNDEFINED)
            res = State.States.LOW;
        else
            res =
                A == State.States.HIGH && A == B
                    ? State.States.HIGH
                    : State.States.LOW;
        this.output[0].refreshState({
            id: this.output[0].id,
            value: res,
        });
    }
}
