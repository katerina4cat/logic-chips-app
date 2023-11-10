import { Pin } from "../../../common/Simulating/Pin";
import cl from "./EditPageOutPin.module.scss";
import { Colors, Wire } from "../../../common/Simulating/Wire";
import { WireIncomplete } from "../../../common/Simulating/WireIncomplete";
import PinInteraction from "../PinInteraction";
import { Component, createRef } from "react";

interface RequiredProps {
    Pin: Pin;
    VisiblePinTitles?: boolean;
    newWire: WireIncomplete;
    updateAll?: () => void;
    Wires: Wire[];
}

interface EditOutputPinState {}

export class EditPageOutPin extends Component<
    RequiredProps,
    EditOutputPinState
> {
    DragListeners: { [key: number]: () => void } = {};

    componentDidMount() {
        Object.values(this.DragListeners).forEach((listener) => listener());
        console.log("UpdateInputsWires!");
    }
    first = createRef<HTMLDivElement>();

    constructor(props: RequiredProps) {
        super(props);
    }

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
                        NameLeft={true}
                        style={{
                            transform: "translateX(75%)",
                            fontSize: "1.2em",
                        }}
                        DragListeners={this.DragListeners}
                        VisiblePinTitles={this.props.VisiblePinTitles}
                        updateAll={this.props.updateAll}
                        newWire={this.props.newWire}
                        Wires={this.props.Wires}
                    />
                </div>
            </div>
        );
    }
}
