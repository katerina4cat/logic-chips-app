import { Component, ReactNode } from "react";
import cl from "./RPin.module.scss";
import { Pin } from "../../Simulating/Pin";
import { getColorWithState } from "../../common/Colors";

interface RequiredProps {
    Pin: Pin;
    interactPin?: { current: (pin: Pin) => void };
    drawTitle?: boolean;
}

interface States {}

export class RPin extends Component<RequiredProps, States> {
    constructor(props: RequiredProps) {
        super(props);
        props.Pin.updatePos = () => {
            const box =
                this.props.Pin.graphicalObject.current?.getBoundingClientRect();
            if (box) {
                this.props.Pin.position.x = box.x + 7;
                this.props.Pin.position.y = box.y + 7;
                this.props.Pin.outWires.forEach((wire) => wire.drawWire());
                this.props.Pin.inWires.forEach((wire) => wire.drawWire());
            }
        };
    }

    componentDidMount(): void {
        if (this.props.Pin.updatePos) this.props.Pin.updatePos();
    }

    handleClick = (e: React.MouseEvent<SVGCircleElement, MouseEvent>) => {
        e.stopPropagation();
        if (this.props.interactPin)
            this.props.interactPin.current(this.props.Pin);
    };

    render(): ReactNode {
        return (
            <circle
                className={cl.RPin}
                ref={this.props.Pin.graphicalObject}
                style={{
                    backgroundColor: getColorWithState(
                        this.props.Pin.totalState,
                        this.props.Pin.color
                    ),
                }}
                onMouseDown={(e) => e.stopPropagation()}
                onClick={this.handleClick}
            >
                <div
                    className={cl.PinTitle}
                    style={{
                        display: this.props.drawTitle ? "block" : "none",
                        left: this.props.Pin.isInput ? "unset" : "1.5em",
                        right: this.props.Pin.isInput ? "1.5em" : "unset",
                    }}
                >
                    {this.props.Pin.name}
                </div>
            </circle>
        );
    }
}
