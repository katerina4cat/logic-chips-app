import { Pin, PinState } from "./Pin";

export class Wire {
    State: PinState;
    ID: number = Date.now();
    Source: Pin;
    Target: Pin;
    WirePoints: Pos[];
    Color: Color;
    constructor(
        Source: Pin,
        Target: Pin,
        WirePoints: Pos[] = [],
        Color: Color = Colors.red
    ) {
        this.Color = Color;
        this.Source = Source;
        this.Target = Target;
        this.State = Source.State;
        this.Target.State = this.State;
        this.Target.Color = this.Color;
        this.WirePoints = WirePoints;
    }
}
export type Pos = { X: number; Y: number };
export type Color = { color: string };
export const Colors: { [key: string]: Color } = {
    floating: { color: "#000" },
    red: { color: "#e93145" },
    green: { color: "green" },
};
