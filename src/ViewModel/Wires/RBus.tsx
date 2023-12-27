import { Component, ReactNode } from "react";
import cl from "./RBus.module.scss";
import { Bus } from "../../Simulating/Bus";
import { State } from "../../common/State";
import { getColorWithState } from "../../common/Colors";
import { Pin } from "../../Simulating/Pin";
import { Pos } from "../../common/Pos";

interface RequiredProps {
    Bus: Bus;
    interactPin: { current: (pin: Pin, ctrlKey: boolean, point?: Pos) => void };
}

interface States {}

export class RBus extends Component<RequiredProps, States> {
    state: Readonly<States> = {};
    constructor(props: RequiredProps) {
        super(props);
    }

    render(): ReactNode {
        return (
            <path
                className={cl.RBus}
                stroke={getColorWithState(
                    this.props.Bus.output[0]?.totalState ||
                        State.States.UNDEFINED,
                    this.props.Bus.Wcolor
                )}
                onClick={(e) => {
                    e.stopPropagation();
                    this.props.interactPin.current(
                        this.props.Bus.phantomPin,
                        e.ctrlKey,
                        new Pos(e.pageX, e.pageY)
                    );
                }}
                ref={this.props.Bus.ref}
                d={`M${this.props.Bus.from.x},${this.props.Bus.from.y}L${this.props.Bus.to.x},${this.props.Bus.to.y}`}
            />
        );
    }
}
