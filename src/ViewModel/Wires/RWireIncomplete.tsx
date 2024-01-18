import { Component, ReactNode, createRef } from "react";
import cl from "./RWireIncomplete.module.scss";
import { Wire } from "../../Simulating/Wire";
import { Pin } from "../../Simulating/Pin";
import { Pos } from "../../common/Pos";
import { getColorWithState } from "../../common/Colors";
import { ChipTypes } from "../../Structs/ChipMinimalInfo";
import { Bus } from "../../Simulating/Bus";

interface RequiredProps {
    addWire: (wire: Wire) => void;
    interactPin: { current: (pin: Pin, ctrlKey: boolean, point?: Pos) => void };
    WirePointClick: {
        current: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
    };
}

interface States {}

export class RWireIncomplete extends Component<RequiredProps, States> {
    radiusWire: number = 20;
    points: Pos[] = [];
    firstPoint: Pos = new Pos();
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

        props.interactPin.current = (
            pin: Pin,
            ctrlKey: boolean,
            point?: Pos
        ) => {
            if (!this.firstPin) {
                this.firstPin = pin;
                if (point) this.firstPoint = point;
                this.points = [point || pin.position, new Pos()];
                if (this.graphicObject.current)
                    this.graphicObject.current.style.stroke = getColorWithState(
                        pin.totalState,
                        pin.color
                    );
                window.addEventListener("mousemove", this.handleMouseMove);
                window.addEventListener("keydown", this.handleKeyDown);
                return;
            }
            let firstIsSource =
                (this.firstPin.isInput && this.firstPin.chip.id == 0) ||
                (!this.firstPin.isInput && this.firstPin.chip.id != 0);
            let pinIsSource =
                (pin.isInput && pin.chip.id == 0) ||
                (!pin.isInput && pin.chip.id != 0);
            if (
                this.firstPin.chip.chipType == ChipTypes.BUS &&
                pin.chip.chipType == ChipTypes.BUS
            ) {
                this.points.unshift(this.firstPoint);
                this.points.push(point ? point : new Pos());
                props.addWire(
                    (this.firstPin.chip as Bus).createWireToBus(
                        pin.chip as Bus,
                        this.points
                    )
                );
                this.clear();
                return;
            }
            if (this.firstPin.chip.chipType == ChipTypes.BUS) {
                if (pinIsSource) {
                    const buff = new Pin(
                        this.firstPin.chip,
                        true,
                        undefined,
                        undefined,
                        undefined,
                        false,
                        point
                    );
                    this.firstPin.chip.input.push(buff);
                    this.firstPin = buff;
                } else {
                    const buff = new Pin(
                        this.firstPin.chip,
                        false,
                        undefined,
                        undefined,
                        undefined,
                        true,
                        point
                    );
                    this.firstPin.chip.output.push(buff);
                    this.firstPin = buff;
                }
                this.firstPin.chip.updateLogic();
            }
            if (pin.chip.chipType == ChipTypes.BUS) {
                if (firstIsSource) {
                    const buff = new Pin(
                        pin.chip,
                        true,
                        undefined,
                        undefined,
                        undefined,
                        false,
                        point
                    );
                    pin.chip.input.push(buff);
                    pin = buff;
                } else {
                    const buff = new Pin(
                        pin.chip,
                        false,
                        undefined,
                        undefined,
                        undefined,
                        true,
                        point
                    );
                    pin.chip.output.push(buff);
                    pin = buff;
                }
                pin.chip.updateLogic();
            }

            firstIsSource =
                (this.firstPin.isInput && this.firstPin.chip.id == 0) ||
                (!this.firstPin.isInput && this.firstPin.chip.id != 0);
            pinIsSource =
                (pin.isInput && pin.chip.id == 0) ||
                (!pin.isInput && pin.chip.id != 0);
            if (firstIsSource && !pinIsSource) {
                if (this.firstPin.chip.chipType != ChipTypes.BUS) {
                    this.points.shift();
                }
                if (pin.chip.chipType != ChipTypes.BUS) this.points.pop();
                props.addWire(new Wire(this.firstPin, pin, [...this.points]));
                if (!ctrlKey) this.clear();
                return;
            }
            if (pinIsSource && !firstIsSource) {
                this.points.reverse();
                if (this.firstPin.chip.chipType != ChipTypes.BUS)
                    this.points.pop();
                if (pin.chip.chipType != ChipTypes.BUS) this.points.shift();
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
