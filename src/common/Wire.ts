import { PinInfo, PinState } from "./Pin";

export class Wire {
    public State: PinState = PinState.FLOATING;
    ID: number = Date.now();
    WirePoints: Pos = [];
    Source: PinInfo;
    Target: PinInfo;
    ColourThemeName: string = "Red";
    constructor(Source: PinInfo, Target: PinInfo, WirePoints?: Pos) {
        this.Source = Source;
        this.Target = Target;
        if (WirePoints) this.WirePoints = WirePoints;
    }
}
export type Pos = Array<{ X: number; Y: number }>;
