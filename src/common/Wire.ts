import React from "react";
import { Pin, PinState } from "./Pin";

export class Wire {
    WireGraphObject?: React.RefObject<SVGPathElement>;
    State: PinState;
    ID: number;
    Source: Pin;
    Target: Pin;
    WirePoints: Pos[];
    Color: Color;
    constructor(
        Source: Pin,
        Target: Pin,
        WirePoints: Pos[] = [],
        Color: Color = Colors.red,
        ID: number = Date.now()
    ) {
        this.ID = ID;
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
        if (Source.Chip.Name != "BUS") this.WirePoints[0] = Source.Position;
        if (Target.Chip.Name != "BUS")
            this.WirePoints[this.WirePoints.length - 1] = Target.Position;
        this.Source.Wires.push(this);
        this.Target.Wires.push(this);
    }

    /**
     *  Версия с обычными углами
        this.WirePontsString = this.WirePoints.map(
            (wire) => `${wire.X} ${wire.Y}`
        ).join(" L");
     */

    private radiusWire = 20;

    generateStringPoints() {
        if (this.Target.Chip.Name == "BUS") console.log(this.WirePoints.length);
        if (this.WirePoints.length < 2) {
            return "";
        }

        let path = `M${this.WirePoints[0].X},${this.WirePoints[0].Y}`;

        for (let i = 1; i < this.WirePoints.length - 1; i++) {
            const previousPoint = this.WirePoints[i - 1];
            const currentPoint = this.WirePoints[i];
            const nextPoint = this.WirePoints[i + 1];

            const lcpx = currentPoint.X - previousPoint.X;
            const lcpy = currentPoint.Y - previousPoint.Y;
            let dCoefcp =
                this.radiusWire / Math.sqrt(lcpx * lcpx + lcpy * lcpy);
            let qx, qy;
            if (dCoefcp >= 0.5) {
                qx = currentPoint.X - lcpx / 2;
                qy = currentPoint.Y - lcpy / 2;
            } else {
                qx = currentPoint.X - lcpx * dCoefcp;
                qy = currentPoint.Y - lcpy * dCoefcp;
            }

            const lpnx = nextPoint.X - currentPoint.X;
            const lpny = nextPoint.Y - currentPoint.Y;
            const dCoefpn =
                this.radiusWire / Math.sqrt(lpnx * lpnx + lpny * lpny);
            let ex, ey;
            if (dCoefpn >= 0.5) {
                ex = currentPoint.X + lpnx / 2;
                ey = currentPoint.Y + lpny / 2;
            } else {
                ex = currentPoint.X + lpnx * dCoefpn;
                ey = currentPoint.Y + lpny * dCoefpn;
            }
            path += ` L${qx},${qy}Q${currentPoint.X},${currentPoint.Y},${ex},${ey}`;
        }
        path += `L${this.WirePoints[this.WirePoints.length - 1].X},${
            this.WirePoints[this.WirePoints.length - 1].Y
        }`;
        return path;
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
export type Color = { color: string; title: string };
export const Colors: { [key: string]: Color } = {
    floating: { color: "#000", title: "" },
    red: { color: "#e93145", title: "Красный" },
    green: { color: "#1fb03a", title: "Зелёный" },
    indigo: { color: "#8c49ff", title: "Индиго" },
    blue: { color: "#147fff", title: "Синий" },
    yellow: { color: "#ff9b00", title: "Жёлтый" },
};
