import { Pin, PinState } from "./Pin";

let wireID = 0;
export class Wire {
    WireGraphObject: SVGPathElement;
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
        fixing = true,
        Canvas: React.RefObject<SVGSVGElement>
    ) {
        this.Source = Source;
        this.State = Source.State;

        this.WireGraphObject = new SVGPathElement();
        Canvas.current?.appendChild(this.WireGraphObject);

        // Если назначение провода это шина, то создаётся новый пин и добавляется в входные пины шины
        if (Target.Chip.Name == "BUS") {
            const newPin = new Pin(true, Target.Chip, "");
            this.Target = newPin;
            this.Target.Chip.InputPins.push(newPin);
        } else this.Target = Target;

        // Целевому пину устанавливается значения исходящего, после происходит перепривязка всех отходящих от него значений
        // Возможно опасное место
        this.Target.State = this.Source.State;
        this.Target.ReLinkPins();
        // Возможно опасное место
        if (fixing)
            this.WirePoints = WirePoints.map((WirePoint) => WirePoint.fixPos());
        else this.WirePoints = WirePoints;
        //Если чип не шина, то привязывается позиция пина
        if (Source.Chip.Name != "BUS") this.WirePoints[0] = Source.Position;
        if (Target.Chip.Name != "BUS")
            this.WirePoints[this.WirePoints.length - 1] = Target.Position;
        this.Source.Wires.push(this);
        this.Target.Wires.push(this);

        this.ID = wireID;
        wireID++;
        this.Color = Color;
        this.Target.Color = this.Color;
        this.Source.Color = this.Color;
    }

    /**
     * Удаляет связь между элементами
     */
    DeleteLink() {
        this.Target.setState(new PinState(-1));

        this.Target.ReLinkPins(this.Source);
        this.Source.State.refreshListeners();
        this.Target.State.refreshListeners();
    }

    /**
     *  Версия с обычными углами
        this.WirePontsString = this.WirePoints.map(
            (wire) => `${wire.X} ${wire.Y}`
        ).join(" L");
     */

    private radiusWire = 20;

    regenerate() {
        if (this.WirePoints.length < 2) {
            return "";
        }

        let path = `M${this.WirePoints[0].x},${this.WirePoints[0].y}`;

        for (let i = 1; i < this.WirePoints.length - 1; i++) {
            const previousPoint = this.WirePoints[i - 1];
            const currentPoint = this.WirePoints[i];
            const nextPoint = this.WirePoints[i + 1];

            const lcpx = currentPoint.x - previousPoint.x;
            const lcpy = currentPoint.y - previousPoint.y;
            let dCoefcp =
                this.radiusWire / Math.sqrt(lcpx * lcpx + lcpy * lcpy);
            let qx, qy;
            if (dCoefcp >= 0.5) {
                qx = currentPoint.x - lcpx / 2;
                qy = currentPoint.y - lcpy / 2;
            } else {
                qx = currentPoint.x - lcpx * dCoefcp;
                qy = currentPoint.y - lcpy * dCoefcp;
            }

            const lpnx = nextPoint.x - currentPoint.x;
            const lpny = nextPoint.y - currentPoint.y;
            const dCoefpn =
                this.radiusWire / Math.sqrt(lpnx * lpnx + lpny * lpny);
            let ex, ey;
            if (dCoefpn >= 0.5) {
                ex = currentPoint.x + lpnx / 2;
                ey = currentPoint.y + lpny / 2;
            } else {
                ex = currentPoint.x + lpnx * dCoefpn;
                ey = currentPoint.y + lpny * dCoefpn;
            }
            path += ` L${qx},${qy}Q${currentPoint.x},${currentPoint.y},${ex},${ey}`;
        }
        path += `L${this.WirePoints[this.WirePoints.length - 1].x},${
            this.WirePoints[this.WirePoints.length - 1].y
        }`;
        this.WireGraphObject.setAttribute("d", path);
    }

    getColorWithState() {
        return `color-mix(in srgb, ${this.Color.color} ${
            this.State.value == 1 ? 100 : this.State.value == -1 ? 0 : 25
        }%, ${Colors.floating.color})`;
    }
}

export class Pos {
    x: number;
    y: number;
    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }
    fixPosX() {
        this.x = ((this.x + 8.349655) / 16.69931) * window.innerWidth;
        return this;
    }
    fixPosY() {
        this.y = ((this.y - 4.611875) / -9.22375) * window.innerHeight;
        return this;
    }
    fixPos() {
        this.fixPosY();
        this.fixPosX();
        return this;
    }
}
export type Color = { color: string; title: string };
export const Colors: { [key: string]: Color } = {
    floating: { color: "#000", title: "" },
    red: { color: "#e93145", title: "Красный" },
    green: { color: "#1fb03a", title: "Зелёный" },
    indigo: { color: "#8c49ff", title: "Индиго" },
    blue: { color: "#147fff", title: "Синий" },
    yellow: { color: "#ff9b00", title: "Жёлтый" },
};

export const DeleteWire = (
    AllWires: Wire[],
    wire: Wire,
    updateAll?: () => void
) => {
    wire.DeleteLink();
    let index = AllWires.indexOf(wire);
    if (index != -1) AllWires.splice(index, 1);

    index = wire.Target.Wires.indexOf(wire);
    if (index != -1) wire.Target.Wires.splice(index, 1);

    index = wire.Source.Wires.indexOf(wire);
    if (index != -1) wire.Source.Wires.splice(index, 1);

    if (updateAll) updateAll();
};
