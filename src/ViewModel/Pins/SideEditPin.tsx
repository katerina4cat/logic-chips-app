import { Component, ReactNode } from "react";
import cl from "./SideEditPin.module.scss";
import { Colors, getColorWithState } from "../../common/Colors";
import { Pin } from "../../Simulating/Pin";
import { State } from "../../common/State";
import { RPin } from "./RPin";
import OutsideClickHandler from "react-outside-click-handler";

interface RequiredProps {
    Pin: Pin;
    showPinTitle?: boolean;
    disabled?: boolean;
    interactPin?: { current: (pin: Pin, ctrlKey: boolean) => void };
    style?: React.CSSProperties;
    position?: number;
    isPreview?: boolean;
    deletePin?: (pin: Pin) => void;
}

interface States {
    State: State.States;
    PositionY: number;
    ColorType: string;
    Name: string;
    deletingOpen: boolean;
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
            deletingOpen: false,
        };
        props.Pin.updateObject = () => {
            this.setState({ State: this.props.Pin.totalState });
        };
    }

    componentDidMount(): void {
        if (this.props.Pin.isInput && this.props.Pin.states[0])
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
                    ...{
                        left: this.props.Pin.isInput ? "0.75em" : "",
                        right: this.props.Pin.isInput ? "" : "0.75em",
                        top: this.props.position || this.state.PositionY,
                        flexDirection: this.props.Pin.isInput
                            ? "row"
                            : "row-reverse",
                    },
                    ...this.props.style,
                }}
            >
                <div
                    className={cl.MoveBar}
                    onMouseDown={
                        this.props.isPreview ? undefined : this.startGrabbing
                    }
                    onContextMenu={(e) => {
                        e.preventDefault();
                        this.setState({ deletingOpen: true });
                    }}
                >
                    <OutsideClickHandler
                        onOutsideClick={() => {
                            if (this.state.deletingOpen)
                                this.setState({ deletingOpen: false });
                        }}
                    >
                        <div
                            className={cl.DeletingConfirm}
                            style={{
                                display: this.state.deletingOpen
                                    ? "block"
                                    : "none",
                                marginLeft: this.props.Pin.isInput
                                    ? "3em"
                                    : "unset",
                                marginRight: this.props.Pin.isInput
                                    ? "unset"
                                    : "3em",
                                transform: this.props.Pin.isInput
                                    ? "unset"
                                    : "translateX(-125%)",
                            }}
                            onMouseDown={(e) => e.stopPropagation()}
                        >
                            Пин: {this.props.Pin.name}
                            <br />
                            <button
                                onClick={() => {
                                    if (this.props.deletePin)
                                        this.props.deletePin(this.props.Pin);
                                }}
                            >
                                Удалить
                            </button>
                        </div>
                    </OutsideClickHandler>
                </div>
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
                    interactPin={this.props.interactPin}
                />
                {this.props.isPreview ? undefined : (
                    <input
                        className={cl.sidePinTitle}
                        onChange={(e) => {
                            this.props.Pin.name = e.target.value;
                            this.setState({ Name: e.target.value });
                        }}
                        value={this.state.Name}
                        style={{
                            display: this.props.showPinTitle ? "block" : "none",
                        }}
                    />
                )}
            </div>
        );
    }
}
