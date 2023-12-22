import { Component, ReactNode, createRef } from "react";
import cl from "./RWireIncomplete.module.scss";
import { Wire } from "../../Simulating/Wire";
import { Pin } from "../../Simulating/Pin";
import { Pos } from "../../common/Pos";
import { getColorWithState } from "../../common/Colors";

interface RequiredProps {
    addWire: (wire: Wire) => void;
    interactPin: { current: (pin: Pin, ctrlKey: boolean) => void };
    WirePointClick: {
        current: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
    };
}

interface States {}

export class RWireIncomplete extends Component<RequiredProps, States> {
    radiusWire: number = 20;
    points: Pos[] = [];
    firstPin?: Pin;
    graphicObject = createRef<SVGPathElement>();
    constructor(props: RequiredProps) {
        super(props);
        this.state = {};
        props.WirePointClick.current = (
            e: React.MouseEvent<SVGSVGElement, MouseEvent>
        ) => {
            if (this.firstPin) this.points.push(new Pos(e.pageX, e.pageY));
        };
        props.interactPin.current = (pin: Pin, ctrlKey: boolean) => {
            if (!this.firstPin) {
                this.firstPin = pin;
                this.points = [pin.position, new Pos()];
                if (this.graphicObject.current)
                    this.graphicObject.current.style.stroke = getColorWithState(
                        pin.totalState,
                        pin.color
                    );
                window.addEventListener("mousemove", this.handleMouseMove);
                window.addEventListener("keydown", this.handleKeyDown);
                return;
            }
            const firstIsSource =
                (this.firstPin.isInput && this.firstPin.chip.id === 0) ||
                (!this.firstPin.isInput && this.firstPin.chip.id !== 0);
            const pinIsSource =
                (pin.isInput && pin.chip.id === 0) ||
                (!pin.isInput && pin.chip.id !== 0);
            if (firstIsSource && !pinIsSource) {
                this.points.pop();
                this.points.shift();
                props.addWire(new Wire(this.firstPin, pin, [...this.points]));
                if (!ctrlKey) this.clear();
                return;
            }
            if (pinIsSource && !firstIsSource) {
                this.points.reverse();
                this.points.pop();
                this.points.shift();
                props.addWire(new Wire(pin, this.firstPin, [...this.points]));
                this.clear();
                return;
            }
            console.log("2 ПИНА ЛИБО ОБА СУРСЫ, ЛИБО ОБА ТАРГЕТЫ");
            /**
             * TODO:
             * ЕСЛИ ДОШЛО ДО СЮДА ТО ОШИБКА ПРОТЯГИВАНИЯ ПИНА, НАДО СДЕЛАТЬ ВСПЛЫВАЮЩЕЕ ОКНО
             * 2 ПИНА ЛИБО ОБА СУРСЫ, ЛИБО ОБА ТАРГЕТЫ
             */
        };
    }

    clear = () => {
        this.firstPin = undefined;
        this.points = [];
        this.graphicObject.current?.setAttribute("d", "");
        window.removeEventListener("mousemove", this.handleMouseMove);
        window.removeEventListener("keydown", this.handleKeyDown);
    };

    handleKeyDown = (e: KeyboardEvent) => {
        if (e.key == "Escape") this.clear();
    };

    handleMouseMove = (e: MouseEvent) => {
        this.points[this.points.length - 1] = new Pos(e.pageX, e.pageY);
        this.drawWire();
    };

    drawWire() {
        let path = `M${this.points[0].x},${this.points[0].y}`;
        for (let i = 1; i < this.points.length - 1; i++) {
            const previousPoint = this.points[i - 1];
            const currentPoint = this.points[i];
            const nextPoint = this.points[i + 1];

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
        path += `L${this.points[this.points.length - 1].x},${
            this.points[this.points.length - 1].y
        }`;
        this.graphicObject.current?.setAttribute("d", path);
    }

    render(): ReactNode {
        return (
            <path
                className={cl.RWireIncomplete}
                ref={this.graphicObject}
            ></path>
        );
    }
}
