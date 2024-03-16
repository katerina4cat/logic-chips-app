import { Pin } from "../Pin";
import { State } from "../../common/State";
import { Pos } from "../../common/Pos";
import { Chip } from "../Chip";
import { testRS } from "./AND";

export class NOT extends Chip {
    readonly isBase = true;
    constructor(id = Date.now(), position?: Pos) {
        super(undefined, id, "NOT", "#8c1f1a", position, undefined);
        this.input.push(new Pin(this, true, 0, "A"));
        this.output.push(new Pin(this, false, 1, "R"));
        this.output[0].addState({
            id: this.output[0].id,
            value: State.States.HIGH,
        });
    }

    override updatedOutputs() {
        const A = this.input[0].totalState;
        if (testRS.v) console.log(this.input[0].states);
        testRS.v = false;
        let res = State.States.UNDEFINED;
        if (A == State.States.FLOATING) res = State.States.FLOATING;
        else if (A == State.States.UNDEFINED) res = State.States.HIGH;
        else res = A == State.States.LOW ? State.States.HIGH : State.States.LOW;
        this.output[0].refreshState({
            id: this.output[0].id,
            value: res,
        });
    }
}
