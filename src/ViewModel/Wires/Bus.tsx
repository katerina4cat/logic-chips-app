import { Component, ReactNode } from "react";
import cl from "./Bus.module.scss";
import { BUS } from "../../Simulating/Chip";
import { getColorWithState } from "../../common/Colors";
import { Pin } from "../../Simulating/Pin";
import { Pos } from "../../common/Pos";

interface RequiredProps {
    chip: BUS;
    interactPin?: {
        current: (pin: Pin, ctrlKey: boolean, position?: Pos) => void;
    };
}

interface States {}

export class Bus extends Component<RequiredProps, States> {
    state: Readonly<States> = {};
    constructor(props: RequiredProps) {
        super(props);
    }

    render(): ReactNode {
        return (
            <path
                className={cl.Bus}
                ref={this.props.chip.ref}
                d={`M${this.props.chip.otherPosition[0].x},${this.props.chip.otherPosition[0].y}L${this.props.chip.otherPosition[1].x},${this.props.chip.otherPosition[1].y}`}
                stroke={getColorWithState(
                    this.props.chip.input[0].totalState,
                    this.props.chip.input[0].color
                )}
                onClick={(e) =>
                    this.props.interactPin?.current(
                        this.props.chip.input[0],
                        e.ctrlKey,
                        new Pos(e.pageX, e.pageY)
                    )
                }
            ></path>
        );
    }
}
