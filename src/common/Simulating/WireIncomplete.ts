import { useRef } from "react";
import { Pin } from "./Pin";
import { Pos, Color, Colors } from "./Wire";

export class WireIncomplete {
    radiusWire = 20;
    private _Source: Pin | undefined;
    WirePoints: Pos[] = [];
    WireGraphObject = useRef<SVGPathElement>(null);
    public set LastPos(value: Pos) {
        this.WirePoints[this.WirePoints.length - 1] = value;
        this.WireGraphObject?.current?.setAttribute(
            "d",
            this.generateStringPoints()
        );
    }
    public set Source(value: Pin | undefined) {
        this._Source = value;
        if (value) {
            this.Color = value.Color;
            this.WirePoints = [value.Position, value.Position];
        } else {
            this.Color = undefined;
            this.WirePoints = [];
        }
    }
    public get Source() {
        return this._Source;
    }
    Target?: Pin;
    Color?: Color;
    constructor() {
        this._Source = undefined;
    }
    generateStringPoints() {
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
        if (this._Source && this.Color)
            return `color-mix(in srgb, ${this.Color.color} ${
                this._Source.State.value == 1
                    ? 100
                    : this._Source.State.value == -1
                    ? 0
                    : 25
            }%, ${Colors.floating.color})`;
        return "unset";
    }
}
