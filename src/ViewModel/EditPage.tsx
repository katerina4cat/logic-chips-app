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

    interactPin = { current: (pin: Pin) => {} }; // Переопределяется в VM->Wires->RWireIncomplete.tsx
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
                <div className={cl.InputFiled}>
                    {this.state.Inputs.map((pin) => (
                        <SideEditPin Pin={pin} interactPin={this.interactPin} />
                    ))}
                </div>
                <div className={cl.ChipField}></div>
                <div className={cl.OutputField}>
                    {this.state.Outputs.map((pin) => (
                        <SideEditPin
                            Pin={pin}
                            interactPin={this.interactPin}
                            disabled
                        />
                    ))}
                </div>
            </div>
        );
    }
}
