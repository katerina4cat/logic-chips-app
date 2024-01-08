import { Component, ReactNode } from "react";
import cl from "./RBus.module.scss";
import { Pos } from "../../common/Pos";
import { Colors, getColorWithState } from "../../common/Colors";
import { State } from "../../common/State";
import { BusEndPosWidth } from "../../common/Settings";

interface RequiredProps {
    enabled: boolean;
    addNewBus: (from: Pos, to: Pos) => void;
}

interface States {
    from: Pos;
    to?: Pos;
}

export class RBusIncomplete extends Component<RequiredProps, States> {
    state: Readonly<States> = {
        from: new Pos(),
    };
    constructor(props: RequiredProps) {
        super(props);
    }

    componentDidMount(): void {
        window.addEventListener("mousemove", this.handleMouseMove);
        window.addEventListener("mousedown", this.handleMouseDown);
    }

    componentWillUnmount(): void {
        window.removeEventListener("mousemove", this.handleMouseMove);
        window.removeEventListener("mousedown", this.handleMouseDown);
    }

    handleMouseMove = (e: MouseEvent) => {
        this.setState((prev) => {
            return prev.to == undefined
                ? { from: new Pos(e.pageX, e.pageY), to: undefined }
                : { from: prev.from, to: new Pos(e.pageX, e.pageY) };
        });
    };
    handleMouseDown = () => {
        if (this.props.enabled)
            this.setState((prev) => {
                if (prev.to) {
                    this.props.addNewBus(prev.from, prev.to);
                    return { to: undefined };
                } else
                    return {
                        to: prev.from,
                    };
            });
    };

    componentDidUpdate(prevProps: Readonly<RequiredProps>): void {
        if (prevProps.enabled != this.props.enabled)
            this.setState({ to: undefined });
    }

    render(): ReactNode {
        return (
            <g style={{ display: this.props.enabled ? "block" : "none" }}>
                <rect
                    x={this.state.from.x - BusEndPosWidth / 2}
                    y={this.state.from.y - BusEndPosWidth / 2}
                    width={BusEndPosWidth}
                    height={BusEndPosWidth}
                    fill={getColorWithState(
                        State.States.UNDEFINED,
                        Colors["red"]
                    )}
                    className={cl.BusEndPos}
                />
                {this.state.to ? (
                    <rect
                        x={this.state.to.x - BusEndPosWidth / 2}
                        y={this.state.to.y - BusEndPosWidth / 2}
                        width={BusEndPosWidth}
                        height={BusEndPosWidth}
                        fill={getColorWithState(
                            State.States.UNDEFINED,
                            Colors["red"]
                        )}
                        className={cl.BusEndPos}
                    />
                ) : undefined}
                <path
                    stroke={getColorWithState(
                        State.States.UNDEFINED,
                        Colors["red"]
                    )}
                    style={{ cursor: "default", strokeWidth: 4 }}
                    d={`M${this.state.from.x},${this.state.from.y}L${this.state.to?.x},${this.state.to?.y}`}
                />
            </g>
        );
    }
}
