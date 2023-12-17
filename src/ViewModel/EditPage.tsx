import { Component, ReactNode } from "react";
import cl from "./EditPage.module.scss";
import { SideEditPin } from "./Pins/SideEditPin";
import { Pin } from "../Simulating/Pin";
import { Pos } from "../common/Pos";
import { Chip } from "../Simulating/Chip";
import { Wire } from "../Simulating/Wire";
import { RWire } from "./Wires/RWire";
import { removeElement } from "../common/RemoveElement";
import { RWireIncomplete } from "./Wires/RWireIncomplete";
import { SidePinField } from "./SidePinField";

interface RequiredProps {}

interface States {
    Inputs: Pin[];
    Outputs: Pin[];
    SubChips: Chip[];
    Wires: Wire[];
    CurrentChip: Chip;
}

export class EditPage extends Component<RequiredProps, States> {
    state: Readonly<States> = {
        Inputs: [],
        Outputs: [],
        SubChips: [],
        Wires: [],
        CurrentChip: new Chip(undefined, 0),
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
                />
                <div className={cl.ChipField}></div>
                <SidePinField
                    Pins={this.state.Outputs}
                    interactPin={this.interactPin}
                    currentChip={this.state.CurrentChip}
                    disabled
                    addNewPin={this.addPin}
                    deletePin={this.removePin}
                />
            </div>
        );
    }
}
