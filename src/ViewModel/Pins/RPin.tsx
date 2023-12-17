import { Component, ReactNode, createRef } from "react";
import cl from "./RPin.module.scss";
import { Pin } from "../../Simulating/Pin";
import { State } from "../../common/State";
import { getColorWithState } from "../../common/Colors";

interface RequiredProps {
    Pin: Pin;
    State: State.States;
    interactPin: { current: (pin: Pin) => void };
}

interface States {}

export class RPin extends Component<RequiredProps, States> {
    constructor(props: RequiredProps) {
        super(props);
        props.Pin.updatePos = () => {
            const box = this.graphicPin?.current?.getBoundingClientRect();
            if (box) {
                this.props.Pin.position.x = box.x + 7;
                this.props.Pin.position.y = box.y + 7;
                this.props.Pin.outWires.forEach((wire) => wire.drawWire());
                this.props.Pin.inWires.forEach((wire) => wire.drawWire());
            }
        };
    }
    graphicPin = createRef<SVGCircleElement>();

    componentDidMount(): void {
        if (this.props.Pin.updatePos) this.props.Pin.updatePos();
    }

    handleClick = (e: React.MouseEvent<SVGCircleElement, MouseEvent>) => {
        e.stopPropagation();
        this.props.interactPin.current(this.props.Pin);
    };

    render(): ReactNode {
        return (
            <circle
                className={cl.RPin}
                ref={this.graphicPin}
                style={{
                    backgroundColor: getColorWithState(
                        this.props.State,
                        this.props.Pin.color
                    ),
                }}
                onClick={this.handleClick}
            ></circle>
        );
    }
}
