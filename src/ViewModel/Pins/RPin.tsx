import { Component, ReactNode, createRef } from "react";
import cl from "./RPin.module.scss";
import { Pin, Pos, State } from "../../Simulating/Pin";
import { getColorWithState } from "../Colors";

interface RequiredProps {
    Pin: Pin;
    State: State.States;
}

interface States {}

export class RPin extends Component<RequiredProps, States> {
    constructor(props: RequiredProps) {
        super(props);
        props.Pin.updatePos = () => {
            const box = this.graphicPin?.current?.getBoundingClientRect();
            if (box) {
                this.props.Pin.position.x = box.x;
                this.props.Pin.position.y = box.y;
                this.props.Pin.outWires.forEach((wire) => wire.drawWire());
                this.props.Pin.inWires.forEach((wire) => wire.drawWire());
            }
        };
    }
    graphicPin = createRef<SVGCircleElement>();

    componentDidMount(): void {
        if (this.props.Pin.updatePos) this.props.Pin.updatePos();
    }

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
            ></circle>
        );
    }
}
