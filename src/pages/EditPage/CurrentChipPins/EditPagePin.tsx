import { Component, createRef } from "react";
import { Pin } from "../../../common/Simulating/Pin";
import cl from "./EditPagePin.module.scss";
import { Colors, Wire } from "../../../common/Simulating/Wire";
import { WireIncomplete } from "../../../common/Simulating/WireIncomplete";
import PinInteraction from "../PinInteraction";

interface RequiredProps {
    Pin: Pin;
    handleChangeInputPin: () => void;
    IncrementLoadedInput: () => void;
    VisiblePinTitles?: boolean;
    newWire: WireIncomplete;
    Wires: Wire[];
}
interface EditPinState {
    PinState: number;
}

class EditPagePin extends Component<RequiredProps, EditPinState> {
    state: Readonly<EditPinState> = {
        PinState: 0,
    };
    first = createRef<HTMLDivElement>();
    DragListeners: { [key: string]: () => void } = {};
    componentDidMount() {
        Object.values(this.DragListeners).forEach((listener) => listener());
    }

    constructor(props: RequiredProps) {
        super(props);
        this.props.Pin.State.value = this.state.PinState;
        this.props.IncrementLoadedInput();
    }
    ChangePinState = () => {
        this.setState((prev) => {
            const res = prev.PinState ? 0 : 1;
            this.props.Pin.State.value = res;
            return { PinState: res };
        });
        this.props.handleChangeInputPin();
    };

    UpdateWires = () => {
        Object.values(this.DragListeners).forEach((listener) => listener());
        console.log("UpdateInputsWires!");
    };

    handleMouseDown = () => {
        window.addEventListener("mousemove", this.handleMouseMove);
        window.addEventListener("mouseup", this.handleMouseUp);
    };

    handleMouseMove = (e: any) => {
        if (this.first.current) {
            this.props.Pin.Position.Y = e.pageY;
            this.first.current.style.top = this.props.Pin.Position.Y + "px";
            Object.values(this.DragListeners).forEach((listener) => listener());
        }
    };

    handleMouseUp = () => {
        window.addEventListener("mouseup", this.handleMouseUp);
        window.removeEventListener("mousemove", this.handleMouseMove);
    };

    render() {
        return (
            <div
                key={this.props.Pin.ID}
                className={cl.CurrChipPin}
                ref={this.first}
                style={{ top: this.props.Pin.Position.Y }}
            >
                <div className={cl.EditPagePin}>
                    <div
                        className={cl.PinChange}
                        onMouseDown={this.handleMouseDown}
                    />
                    <div
                        className={cl.PinButtonChange}
                        style={{
                            border: "0.15em solid " + Colors.floating.color,
                            backgroundColor: this.props.Pin.getColorWithState(),
                        }}
                        onClick={this.ChangePinState}
                    />
                    <line
                        style={{
                            width: "1.4em",
                            height: "12.5%",
                            backgroundColor: Colors.floating.color,
                        }}
                    />
                    <PinInteraction
                        pin={this.props.Pin}
                        NameLeft={false}
                        style={{
                            transform: "translateX(-75%)",
                            fontSize: "1.2em",
                        }}
                        DragListeners={this.DragListeners}
                        VisiblePinTitles={this.props.VisiblePinTitles}
                        updateAll={this.props.handleChangeInputPin}
                        newWire={this.props.newWire}
                        Wires={this.props.Wires}
                    />
                </div>
            </div>
        );
    }
}

export default EditPagePin;
