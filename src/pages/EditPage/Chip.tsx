import { Component, createRef, useEffect, useRef } from "react";
import { ChipModel } from "../../common/Simulating/ChipModel";
import cl from "./Chip.module.scss";
import PinInteraction from "./PinInteraction";
import { debug } from "../../App";
import { Wire } from "../../common/Simulating/Wire";
import { WireIncomplete } from "../../common/Simulating/WireIncomplete";
import { sideWidth } from "../../common/Simulating/EditChip";

interface RequiredProps {
    chip: ChipModel;
    VisiblePinTitles: boolean;
    MainChip: ChipModel;
    newWire: WireIncomplete;
    updateAll: () => void;
    Wires: Wire[];
    ChipSelecting: ChipModel[];
    setChipSelecting: (e: ChipModel[]) => void;
}
interface ChipState {}

export class Chip extends Component<RequiredProps, ChipState> {
    DragListeners: { [key: number]: () => void } = {};
    first = createRef<HTMLDivElement>();
    state: Readonly<ChipState> = {};
    constructor(props: RequiredProps) {
        super(props);
    }

    componentDidMount() {
        Object.values(this.DragListeners).forEach((listener) => listener());
    }

    handleMouseDown = (e: any) => {
        if (e.button == 0) {
            window.addEventListener("mousemove", this.handleMouseMove);
            window.addEventListener("mouseup", this.handleMouseUp);
        }
    };
    handleMouseMove = (e: any) => {
        if (this.first.current) {
            this.props.chip.Position[0].X = e.pageX - sideWidth;
            this.props.chip.Position[0].Y = e.pageY;
            this.first.current.style.left =
                this.props.chip.Position[0].X + "px";
            this.first.current.style.top = this.props.chip.Position[0].Y + "px";
            Object.values(this.DragListeners).forEach((listener) => listener());
        }
    };
    handleMouseUp = () => {
        window.removeEventListener("mousemove", this.handleMouseMove);
        window.removeEventListener("mouseup", this.handleMouseUp);
    };
    render() {
        return (
            <div
                key={this.props.chip.ID}
                ref={this.first}
                className={`${cl.Chip} ${
                    this.props.ChipSelecting.includes(this.props.chip)
                        ? cl.Selected
                        : ""
                }`}
                style={{
                    left: this.props.chip.Position[0].X,
                    top: this.props.chip.Position[0].Y,
                    backgroundColor: this.props.chip.Colour,
                    position: "absolute",
                }}
                onMouseDown={(e) => {
                    this.handleMouseDown(e);
                    this.props.setChipSelecting([this.props.chip]);
                }}
                onClick={(e) => e.stopPropagation()}
                onContextMenu={(e) => {
                    if (debug) console.log(this.props.chip);
                    alert("Заглушка при пкм по чипу");
                    e.stopPropagation();
                    e.preventDefault();
                }}
            >
                <div
                    className={cl.PinList}
                    style={{
                        transform: "translateX(-60%)",
                    }}
                >
                    {this.props.chip.InputPins.map((pin) => (
                        <PinInteraction
                            key={pin.ID}
                            pin={pin}
                            DragListeners={this.DragListeners}
                            VisiblePinTitles={this.props.VisiblePinTitles}
                            updateAll={this.props.updateAll}
                            newWire={this.props.newWire}
                            Wires={this.props.Wires}
                        />
                    ))}
                </div>
                {this.props.chip.Name}
                <div
                    className={cl.PinList}
                    style={{
                        transform: "translateX(60%)",
                    }}
                >
                    {this.props.chip.OutputPins.map((pin) => (
                        <PinInteraction
                            key={pin.ID}
                            pin={pin}
                            DragListeners={this.DragListeners}
                            VisiblePinTitles={this.props.VisiblePinTitles}
                            updateAll={this.props.updateAll}
                            newWire={this.props.newWire}
                            Wires={this.props.Wires}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
