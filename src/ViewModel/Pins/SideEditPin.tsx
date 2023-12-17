import { Component, ReactNode, createRef, useRef } from "react";
import cl from "./SideEditPin.module.scss";
import { Colors, getColorWithState } from "../../common/Colors";
import { Pin } from "../../Simulating/Pin";
import { State } from "../../common/State";
import { RPin } from "./RPin";

interface RequiredProps {
    Pin: Pin;
    disabled?: boolean;
    interactPin: { current: (pin: Pin) => void };
}

interface States {
    State: State.States;
    PositionY: number;
    ColorType: string;
    Name: string;
}

export class SideEditPin extends Component<RequiredProps, States> {
    constructor(props: RequiredProps) {
        super(props);
        this.state = {
            State: props.Pin.totalState,
            PositionY: props.Pin.position.y,
            ColorType:
                Object.keys(Colors).find(
                    (key) => Colors[key] === props.Pin.color
                ) || "green",
            Name: props.Pin.name,
        };
        props.Pin.updateObject = () => {
            this.setState({ State: this.props.Pin.totalState });
        };
    }

    componentDidMount(): void {
        if (this.props.Pin.isInput)
            this.props.Pin.states[0].value = State.States.LOW;
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
        if (this.props.Pin.updatePos) this.props.Pin.updatePos();
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
                    left: this.props.Pin.isInput ? "0.75em" : "",
                    right: this.props.Pin.isInput ? "" : "0.75em",
                    top: this.state.PositionY,
                    flexDirection: this.props.Pin.isInput
                        ? "row"
                        : "row-reverse",
                }}
            >
                <div className={cl.MoveBar} onMouseDown={this.startGrabbing} />
                <circle
                    className={cl.SwitchButton}
                    style={{
                        backgroundColor: getColorWithState(
                            this.props.Pin.totalState,
                            Colors[this.state.ColorType]
                        ),
                        marginLeft: this.props.Pin.isInput ? "0.6em" : "",
                        marginRight: this.props.Pin.isInput ? "" : "0.6em",
                        cursor: this.props.disabled ? "default" : "pointer",
                        pointerEvents: this.props.disabled ? "none" : "auto",
                    }}
                    onClick={this.changeState}
                />
                <div className={cl.DecorativeWire} />
                <RPin
                    Pin={this.props.Pin}
                    State={this.state.State}
                    interactPin={this.props.interactPin}
                />
                <input
                    className={cl.sidePinTitle}
                    onChange={(e) => {
                        this.props.Pin.name = e.target.value;
                        this.setState({ Name: e.target.value });
                    }}
                    value={this.state.Name}
                />
            </div>
        );
    }
}
