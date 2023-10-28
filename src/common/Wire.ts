import React from "react";
import { Pin, PinState } from "./Pin";

export class Wire {
    WireGraphObject?: React.RefObject<SVGPathElement>;
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
        this.State = Source.State;
        if (Target.Chip.Name == "BUS") {
            const newPin = new Pin(
                true,
                Target.Chip,
                "",
                Target.Chip.InputPins.length + 1
            );
            this.Target = newPin;
            this.Target.Chip.InputPins.push(newPin);
        } else this.Target = Target;
        this.Target.State = this.State;
        this.Target.Color = this.Color;
        this.WirePoints = WirePoints.map((WirePoint) => fixPos(WirePoint));
        this.WirePoints[0] = this.Source.Position;
        this.WirePoints[this.WirePoints.length - 1] = this.Target.Position;
        this.Source.Wires.push(this);
        this.Target.Wires.push(this);
    }

    /**
     *  Версия с обычными углами
        this.WirePontsString = this.WirePoints.map(
            (wire) => `${wire.X} ${wire.Y}`
        ).join(" L");
     */

    generateStringPoints() {
        let commands = [];

        if (this.WirePoints.length < 2) {
            return "";
        }
        commands.push(`M ${this.WirePoints[0].X} ${this.WirePoints[0].Y}`);

        for (let i = 1; i < this.WirePoints.length; i++) {
            const prevPoint = this.WirePoints[i - 1];
            const currentPoint = this.WirePoints[i];

            const radius = -10;
            const arcFlag = 0;

            commands.push(
                `A ${radius} ${radius} 0 0 1 ${currentPoint.X} ${currentPoint.Y}`
            );
        }
        return commands.join(" ");
    }

    getColorWithState() {
        return `color-mix(in srgb, ${this.Color.color} ${
            this.State.value == 1 ? 100 : this.State.value == -1 ? 0 : 25
        }%, ${Colors.floating.color})`;
    }
}
export type Pos = { X: number; Y: number };
export const fixPosX = (X: number) =>
    ((X + 8.349655) / 16.69931) * window.innerWidth;
export const fixPosY = (Y: number) =>
    ((Y - 4.611875) / -9.22375) * window.innerHeight;
export const fixPos: (pos: Pos) => Pos = (pos) => ({
    X: fixPosX(pos.X),
    Y: fixPosY(pos.Y),
});
export type Color = { color: string };
export const Colors: { [key: string]: Color } = {
    floating: { color: "#000" },
    red: { color: "#e93145" },
    green: { color: "#1fb03a" },
    indigo: { color: "#8c49ff" },
    blue: { color: "#147fff" },
    yellow: { color: "#ff9b00" },
};
