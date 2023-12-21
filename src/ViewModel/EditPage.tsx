import { Component, ReactNode } from "react";
import cl from "./EditPage.module.scss";
import { SideEditPin } from "./Pins/SideEditPin";
import { Pin } from "../Simulating/Pin";
import { Pos } from "../common/Pos";
import { AND, Chip, NOT, TRI_STATE_BUFFER } from "../Simulating/Chip";
import { Wire } from "../Simulating/Wire";
import { RWire } from "./Wires/RWire";
import { removeElement } from "../common/RemoveElement";
import { RWireIncomplete } from "./Wires/RWireIncomplete";
import { SidePinField } from "./SidePinField";
import { DefaultChip } from "./Chips/DefaultChip";
import { CircleAdding } from "./CircleAdding/CircleAdding";
import { ChipMinimalInfo } from "../Structs/ChipMinimalInfo";
import { Colors } from "../common/Colors";

interface RequiredProps {}

interface States {
    Inputs: Pin[];
    Outputs: Pin[];
    SubChips: Chip[];
    Wires: Wire[];
    CurrentChip: Chip;
    showChipPinTitles: boolean;
    showAllPinTitles: boolean;
    showCircleAdding: boolean;
}

export class EditPage extends Component<RequiredProps, States> {
    state: Readonly<States> = {
        Inputs: [],
        Outputs: [],
        SubChips: [],
        Wires: [],
        CurrentChip: new Chip(undefined, 0),
        showChipPinTitles:
            (localStorage.getItem("showingPinTitles") || "true") == "true",
        showAllPinTitles:
            (localStorage.getItem("showingAllPinTitles") || "true") == "true",
        showCircleAdding: true,
    };
    constructor(props: RequiredProps) {
        super(props);
        this.state.Inputs.push(
            new Pin(this.state.CurrentChip, true, 0, "test", 230, true)
        );
        this.state.Outputs.push(
            new Pin(this.state.CurrentChip, false, 1, "test2", 230),
            new Pin(this.state.CurrentChip, false, 2, "test3", 400)
        );
        this.state.Wires.push(
            new Wire(this.state.Inputs[0], this.state.Outputs[0], [
                new Pos(500, 25),
                new Pos(700, 300),
            ]),
            new Wire(this.state.Inputs[0], this.state.Outputs[1], [])
        );
        this.state.SubChips.push(
            new AND(Date.now(), new Pos(200, 400)),
            new NOT(Date.now(), new Pos(200, 600)),
            new TRI_STATE_BUFFER(Date.now(), new Pos(200, 800))
        );
    }

    handleKeyDown = (e: KeyboardEvent) => {
        if (e.key == "Tab") {
            e.preventDefault();
            this.setState((prev) => {
                localStorage.setItem(
                    "showingAllPinTitles",
                    prev.showAllPinTitles ? "false" : "true"
                );
                localStorage.setItem(
                    "showingPinTitles",
                    prev.showAllPinTitles ? "false" : "true"
                );
                return {
                    showAllPinTitles: !prev.showAllPinTitles,
                    showChipPinTitles: !prev.showAllPinTitles,
                };
            });
        }
        if (e.key == "Q" || e.key == "q" || e.key == "Й" || e.key == "й") {
            e.preventDefault();
            this.setState((prev) => {
                localStorage.setItem(
                    "showingPinTitles",
                    prev.showChipPinTitles ? "false" : "true"
                );
                return { showChipPinTitles: !prev.showChipPinTitles };
            });
        }
        if (e.key == "a" || e.key == "A" || e.key == "ф" || e.key == "Ф") {
            this.setState((prev) => ({
                showCircleAdding: !prev.showCircleAdding,
            }));
        }
        if (e.key == "Escape") {
            this.setState({ showCircleAdding: false });
        }
    };

    componentDidMount(): void {
        document.addEventListener("keydown", this.handleKeyDown);
    }
    componentWillUnmount(): void {
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    removeWire = (wire: Wire) => {
        wire.deletingWire();

        this.setState((prev) => {
            removeElement(prev.Wires, wire);
            return {
                Wires: prev.Wires,
            };
        });
    };
    addWire = (wire: Wire) => {
        this.setState((prev) => ({ Wires: [...prev.Wires, wire] }));
    };
    addPin = (pin: Pin) => {
        if (pin.isInput)
            this.setState((prev) => ({ Inputs: [...prev.Inputs, pin] }));
        else this.setState((prev) => ({ Outputs: [...prev.Outputs, pin] }));
    };
    removePin = (pin: Pin) => {
        while (pin.inWires.length != 0) this.removeWire(pin.inWires[0]);
        while (pin.outWires.length != 0) this.removeWire(pin.outWires[0]);
        if (pin.isInput)
            this.setState((prev) => ({
                Inputs: removeElement(prev.Inputs, pin),
            }));
        else
            this.setState((prev) => ({
                Outputs: removeElement(prev.Outputs, pin),
            }));
    };

    interactPin = { current: (pin: Pin) => {} }; // Переопределяется в VM->Wires->RWireIncomplete.tsx Необходим для протягивания провода
    wirePointClick = {
        current: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {},
    }; // Переопределяется в VM->Wires->RWireIncomplete.tsx

    render(): ReactNode {
        return (
            <div className={cl.EditPage}>
                <svg
                    className={cl.EditView}
                    onClick={(e) => {
                        this.wirePointClick.current(e);
                    }}
                >
                    <g
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        {this.state.Wires.map((wire) => (
                            <RWire
                                wire={wire}
                                deleteWire={this.removeWire}
                                key={wire.id}
                            />
                        ))}
                    </g>
                    <RWireIncomplete
                        addWire={this.addWire}
                        interactPin={this.interactPin}
                        WirePointClick={this.wirePointClick}
                    />
                </svg>
                <SidePinField
                    Pins={this.state.Inputs}
                    interactPin={this.interactPin}
                    currentChip={this.state.CurrentChip}
                    isInput
                    addNewPin={this.addPin}
                    deletePin={this.removePin}
                    showPinTitle={this.state.showAllPinTitles}
                />
                <div className={cl.ChipField}>
                    {this.state.SubChips.map((chip) => (
                        <DefaultChip
                            chip={chip}
                            interactPin={this.interactPin}
                            showPinTitles={
                                this.state.showAllPinTitles
                                    ? this.state.showChipPinTitles
                                    : false
                            }
                        />
                    ))}
                </div>
                <SidePinField
                    Pins={this.state.Outputs}
                    interactPin={this.interactPin}
                    currentChip={this.state.CurrentChip}
                    disabled
                    addNewPin={this.addPin}
                    deletePin={this.removePin}
                    showPinTitle={this.state.showAllPinTitles}
                />
                <CircleAdding
                    enabled={this.state.showCircleAdding}
                    elements={[
                        new ChipMinimalInfo("NAND", 2, 1, 1),
                        new ChipMinimalInfo("NOT", 1, 1, 1),
                        new ChipMinimalInfo("AND", 2, 1, 1),
                        new ChipMinimalInfo("TRI-STATE-BUFFER", 2, 1, 1),
                        new ChipMinimalInfo("NAND", 2, 1, 1),
                        new ChipMinimalInfo("NOT", 1, 1, 1),
                        new ChipMinimalInfo("AND", 2, 1, 1),
                        new ChipMinimalInfo("TRI-STATE-BUFFER", 2, 1, 1),
                        new ChipMinimalInfo("NAND", 2, 1, 1),
                        new ChipMinimalInfo("NOT", 1, 1, 1),
                    ]}
                />
                {/** maximum 12 элементов */}
            </div>
        );
    }
}
