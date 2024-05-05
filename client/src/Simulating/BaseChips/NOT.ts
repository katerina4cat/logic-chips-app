import { Pin } from "../Pin";
import { PinState, States } from "../../common/State";
import { Pos } from "../../common/Pos";
import { Chip } from "../Chip";

export class NOT extends Chip {
    readonly isBase = true;
    constructor(id = Date.now(), position?: Pos) {
        super(undefined, id, "NOT", "#8c1f1a", position, undefined);
        this.input.push(new Pin(this, true, 0, "A"));
        this.output.push(new Pin(this, false, 1, "R"));
        this.output[0].addState(new PinState(this.output[0].id, States.HIGH));
    }

    override updatedOutputs() {
        const A = this.input[0].totalState;
        let res = States.UNDEFINED;
        if (A == States.FLOATING) res = States.FLOATING;
        else if (A == States.UNDEFINED) res = States.HIGH;
        else res = A == States.LOW ? States.HIGH : States.LOW;
        this.output[0].refreshState(new PinState(this.output[0].id, res));
    }
}
