import { Pin, Pos } from "./Pin";

export class Wire {
    source: Pin;
    target: Pin;
    points: Pos[];
    constructor(source: Pin, target: Pin, points: Pos[]) {
        this.source = source;
        this.target = target;
        this.points = points;
        target.addState(source.states);
        source.wires.push(this);
    }
}
