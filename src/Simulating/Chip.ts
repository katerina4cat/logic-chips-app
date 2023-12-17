import { Pin } from "./Pin";
import { State } from "../common/State";
import { Pos } from "../common/Pos";
import { Wire } from "./Wire";

export class Chip {
    id: number;
    name: string;
    subChips: Chip[];
    wires: Wire[];
    input: Pin[];
    output: Pin[];
    color: string;
    isBase = false;
    position: Pos;
    constructor(
        subChips: Chip[] = [],
        id = Date.now(),
        name = "Untitled",
        color: string = "#fff",
        position = new Pos()
    ) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.subChips = subChips;
        this.wires = [];
        this.input = [];
        this.output = [];
        this.position = position;
    }
    updateLogic() {}
}

export class AND extends Chip {
    isBase = true;
    constructor(id = Date.now()) {
        super(undefined, id, "AND", "#267ab2");
        this.input = [new Pin(this, 0, "A"), new Pin(this, 1, "B")];
        this.output.push(new Pin(this, 2, "R"));
        this.output[0].addState(new State());
    }

    override updateLogic(): void {
        const A = this.input[0].getResultState();
        const B = this.input[1].getResultState();
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
        this.output[0].states[0].value = res;
    }
}

export class NOT extends Chip {
    isBase = true;
    constructor(id = Date.now()) {
        super(undefined, id, "NOT", "#8c1f1a");
        this.input.push(new Pin(this, 0, "A"));
        this.output.push(new Pin(this, 1, "R"));
        this.output[0].addState(new State());
    }

    override updateLogic(): void {
        const A = this.input[0].getResultState();
        let res = State.States.UNDEFINED;
        if (A == State.States.FLOATING) res = State.States.FLOATING;
        else if (A == State.States.UNDEFINED) res = State.States.HIGH;
        else res = A == State.States.LOW ? State.States.HIGH : State.States.LOW;
        this.output[0].states[0].value = res;
    }
}

export class TRI_STATE_BUFFER extends Chip {
    isBase = true;
    constructor(id = Date.now()) {
        super(undefined, id, "TRI-STATE BUFFER", "#262626");
        this.input = [new Pin(this, 0, "Data"), new Pin(this, 1, "Enable")];
        this.output.push(new Pin(this, 1, "Output"));
        this.output[0].addState(new State());
    }

    override updateLogic(): void {
        const A = this.input[0].getResultState();
        const B = this.input[1].getResultState();
        let res = State.States.UNDEFINED;
        if (B == State.States.FLOATING) res = State.States.FLOATING;
        else if (B == State.States.HIGH) res = A;
        else res = State.States.UNDEFINED;
        this.output[0].states[0].value = res;
    }
}
