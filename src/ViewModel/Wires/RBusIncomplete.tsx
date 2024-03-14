import { Component, ReactNode } from "react";
import cl from "./RBus.module.scss";
import { Pos } from "../../common/Pos";
import { Colors, getColorWithState } from "../../common/Colors";
import { State } from "../../common/State";
import { BusEndPosWidth, manyBusSpace } from "../../common/Settings";
import React from "react";

interface RequiredProps {
    enabled: boolean;
    addNewBus: (from: Pos, to: Pos) => void;
    addingCount: number;
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
                ? {
                      from: new Pos(e.pageX, e.pageY),
                      to: undefined,
                  }
                : {
                      from: prev.from,
                      to: new Pos(e.pageX, e.pageY),
                  };
        });
    };
    handleMouseDown = () => {
        if (this.props.enabled) {
            if (this.state.to) {
                for (let i = 0; i < this.props.addingCount; i++)
                    this.props.addNewBus(
                        new Pos(
                            this.state.from.x + manyBusSpace * i,
                            this.state.from.y
                        ),
                        new Pos(
                            this.state.to.x + manyBusSpace * i,
                            this.state.to.y
                        )
                    );
                this.setState({ to: undefined });
            } else
                this.setState((prev) => ({
                    to: prev.from,
                }));
        }
    };

    componentDidUpdate(prevProps: Readonly<RequiredProps>): void {
        if (prevProps.enabled != this.props.enabled)
            this.setState({ to: undefined });
    }

    render(): ReactNode {
        return (
            <g style={{ display: this.props.enabled ? "block" : "none" }}>
                {new Array(this.props.addingCount).fill(1).map((_, i) => (
                    <g>
                        <rect
                            x={
                                this.state.from.x +
                                i * manyBusSpace -
                                BusEndPosWidth / 2
                            }
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
                                x={
                                    this.state.to.x +
                                    i * manyBusSpace -
                                    BusEndPosWidth / 2
                                }
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
                            d={
                                this.state.to
                                    ? `M${
                                          this.state.from.x + i * manyBusSpace
                                      },${this.state.from.y}L${
                                          this.state.to.x + i * manyBusSpace
                                      },${this.state.to.y}`
                                    : ""
                            }
                        />
                    </g>
                ))}
            </g>
        );
    }
}
