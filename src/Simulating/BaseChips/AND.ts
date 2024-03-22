import { Pin } from "../Pin";
import { PinState, States } from "../../common/State";
import { Pos } from "../../common/Pos";
import { Chip } from "../Chip";

export class AND extends Chip {
    readonly isBase = true;
    constructor(id = Date.now(), position?: Pos) {
        super(undefined, id, "AND", "#267ab2", position, undefined);
        this.input = [new Pin(this, true, 0, "A"), new Pin(this, true, 1, "B")];
        this.output.push(new Pin(this, false, 2, "R"));
        this.output[0].addState(new PinState(this.output[0].id, States.LOW));
    }

    override updatedOutputs() {
        const A = this.input[0].totalState;
        const B = this.input[1].totalState;
        let res = States.UNDEFINED;
        if (A == States.FLOATING || B == States.FLOATING) res = States.FLOATING;
        else if (A == States.UNDEFINED || B == States.UNDEFINED)
            res = States.LOW;
        else res = A == States.HIGH && A == B ? States.HIGH : States.LOW;
        this.output[0].refreshState(new PinState(this.output[0].id, res));
    }
}
