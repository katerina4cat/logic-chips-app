import { Component, ReactNode } from "react";
import cl from "./SideEditPin.module.scss";
import { Colors, getColorWithState } from "../Colors";
import { Pin, State } from "../../Simulating/Pin";
import { RPin } from "./RPin";

interface RequiredProps {
    Pin: Pin;
    Input?: boolean;
    disabled?: boolean;
}

interface States {
    State: State.States;
    PositionY: number;
    ColorType: string;
}

export class SideEditPin extends Component<RequiredProps, States> {
    constructor(props: RequiredProps) {
        super(props);
        this.state = {
            State: props.Pin.getResultState(),
            PositionY: props.Pin.position.y,
            ColorType:
                Object.keys(Colors).find(
                    (key) => Colors[key] === props.Pin.color
                ) || "green",
        };
    }

    grabbing = false;
    delta = 0;
    startGrabbing = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        this.grabbing = true;
        this.delta = this.state.PositionY - e.pageY;
        window.addEventListener("mouseup", this.stopGrabbing);
        window.addEventListener("mousemove", this.processGrabbing);
    };
    processGrabbing = (e: MouseEvent) => {
        this.setState({ PositionY: e.pageY + this.delta });
        this.props.Pin.position.y = this.state.PositionY;
    };
    stopGrabbing = () => {
        window.removeEventListener("mouseup", this.stopGrabbing);
        window.removeEventListener("mousemove", this.processGrabbing);
    };

    changeState = () => {
        this.setState((prev) => {
            this.props.Pin.states[0].value =
                prev.State == State.States.LOW
                    ? State.States.HIGH
                    : State.States.LOW;
            return { State: this.props.Pin.states[0].value };
        });
    };

    render(): ReactNode {
        return (
            <div
                className={cl.SideEditPin}
                style={{
                    left: this.props.Input ? "0.75em" : "",
                    right: this.props.Input ? "" : "0.75em",
                    top: this.state.PositionY,
                    flexDirection: this.props.Input ? "row" : "row-reverse",
                }}
            >
                <div className={cl.MoveBar} onMouseDown={this.startGrabbing} />
                <circle
                    className={cl.SwitchButton}
                    style={{
                        backgroundColor: getColorWithState(
                            this.state.State,
                            Colors[this.state.ColorType]
                        ),
                        marginLeft: this.props.Input ? "0.6em" : "",
                        marginRight: this.props.Input ? "" : "0.6em",
                        cursor: this.props.disabled ? "default" : "pointer",
                        pointerEvents: this.props.disabled ? "none" : "auto",
                    }}
                    onClick={this.changeState}
                />
                <div className={cl.DecorativeWire} />
                <RPin Pin={this.props.Pin} />
            </div>
        );
    }
}
