import { Component, ReactNode } from "react";
import cl from "./RBus.module.scss";
import { Bus } from "../../Simulating/BaseChips/Bus";
import { State } from "../../common/State";
import { getColorWithState } from "../../common/Colors";
import { Pin } from "../../Simulating/Pin";
import { Pos } from "../../common/Pos";
import { BusEndPosWidth, busID } from "../../common/Settings";

interface RequiredProps {
    Bus: Bus;
    interactPin: { current: (pin: Pin, ctrlKey: boolean, point?: Pos) => void };
    removeBus: (bus: Bus) => void;
}

interface States {}

export class RBus extends Component<RequiredProps, States> {
    state: Readonly<States> = {};
    constructor(props: RequiredProps) {
        super(props);
    }

    componentWillUnmount(): void {
        document.removeEventListener("keydown", this.handleKeydown);
    }

    handleKeydown = (e: KeyboardEvent) => {
        if (e.key == "Backspace") this.props.removeBus(this.props.Bus);
    };

    render(): ReactNode {
        return (
            <g>
                <rect
                    x={this.props.Bus.from.x - BusEndPosWidth / 2}
                    y={this.props.Bus.from.y - BusEndPosWidth / 2}
                    width={BusEndPosWidth}
                    height={BusEndPosWidth}
                    className={cl.BusEndPos}
                />
                <rect
                    x={this.props.Bus.to.x - BusEndPosWidth / 2}
                    y={this.props.Bus.to.y - BusEndPosWidth / 2}
                    width={BusEndPosWidth}
                    height={BusEndPosWidth}
                    className={cl.BusEndPos}
                />
                <path
                    className={cl.RBus}
                    id={`bus_${this.props.Bus.id}`}
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
                    onMouseOver={() =>
                        document.addEventListener("keydown", this.handleKeydown)
                    }
                    onMouseOut={() =>
                        document.removeEventListener(
                            "keydown",
                            this.handleKeydown
                        )
                    }
                    ref={this.props.Bus.ref}
                    d={`M${this.props.Bus.from.x},${this.props.Bus.from.y}L${this.props.Bus.to.x},${this.props.Bus.to.y}`}
                />
                {busID ? (
                    <text>
                        <textPath
                            href={`#bus_${this.props.Bus.id}`}
                            startOffset={"50%"}
                            stroke="white"
                        >
                            {this.props.Bus.id}
                        </textPath>
                    </text>
                ) : undefined}
            </g>
        );
    }
}
