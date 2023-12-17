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
    constructor(id = Date.now(), position?: Pos) {
        super(undefined, id, "AND", "#267ab2", position);
        this.input = [new Pin(this, true, 0, "A"), new Pin(this, true, 1, "B")];
        this.output.push(new Pin(this, false, 2, "R"));
        this.output[0].addState(new State(this.output[0], State.States.LOW));
    }

    override updateLogic(): void {
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
        this.output[0].states[0].value = res;
    }
}

export class NOT extends Chip {
    isBase = true;
    constructor(id = Date.now(), position?: Pos) {
        super(undefined, id, "NOT", "#8c1f1a", position);
        this.input.push(new Pin(this, true, 0, "A"));
        this.output.push(new Pin(this, false, 1, "R"));
        this.output[0].addState(new State(this.output[0], State.States.HIGH));
    }

    override updateLogic(): void {
        const A = this.input[0].totalState;
        let res = State.States.UNDEFINED;
        if (A == State.States.FLOATING) res = State.States.FLOATING;
        else if (A == State.States.UNDEFINED) res = State.States.HIGH;
        else res = A == State.States.LOW ? State.States.HIGH : State.States.LOW;
        this.output[0].states[0].value = res;
    }
}

export class TRI_STATE_BUFFER extends Chip {
    isBase = true;
    constructor(id = Date.now(), position?: Pos) {
        super(undefined, id, "TRI-STATE BUFFER", "#262626", position);
        this.input = [
            new Pin(this, true, 0, "Data"),
            new Pin(this, true, 1, "Enable"),
        ];
        this.output.push(new Pin(this, false, 1, "Output"));
        this.output[0].addState(new State(this.output[0]));
    }

    override updateLogic(): void {
        const A = this.input[0].totalState;
        const B = this.input[1].totalState;
        let res = State.States.UNDEFINED;
        if (B == State.States.FLOATING) res = State.States.FLOATING;
        else if (B == State.States.HIGH) res = A;
        else res = State.States.UNDEFINED;
        this.output[0].states[0].value = res;
    }
}
