import { Pin, PinState } from "./Pin";

export class Wire {
    State: PinState;
    ID: number = Date.now();
    Source: Pin;
    Target: Pin;
    WirePoints: Pos[];
    Color: string;
    constructor(
        Source: Pin,
        Target: Pin,
        WirePoints: Pos[] = [],
        Color = "#fdd"
    ) {
        this.Source = Source;
        this.Target = Target;
        this.State = Source.State;
        this.Target.State = this.State;
        this.WirePoints = WirePoints;
        this.Color = Color;
    }
}
export type Pos = Array<{ X: number; Y: number }>;
