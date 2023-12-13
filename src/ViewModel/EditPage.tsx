import { Component, ReactNode } from "react";
import cl from "./EditPage.module.scss";
import { SideEditPin } from "./Pins/SideEditPin";
import { Pin, Pos } from "../Simulating/Pin";
import { Chip } from "../Simulating/Chip";
import { Wire } from "../Simulating/Wire";
import { PWire } from "./Wire/PWire";

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
            new Pin(this.state.CurrentChip, 0, "test", 230, true)
        );
        this.state.Outputs.push(
            new Pin(this.state.CurrentChip, 1, "test2", 230),
            new Pin(this.state.CurrentChip, 2, "test3", 400)
        );
        this.state.Wires.push(
            new Wire(this.state.Inputs[0], this.state.Outputs[0], [
                new Pos(500, 25),
                new Pos(700, 300),
            ]),
            new Wire(this.state.Inputs[0], this.state.Outputs[1], [])
        );
    }

    render(): ReactNode {
        return (
            <div className={cl.EditPage}>
                <div className={cl.InputFiled}>
                    {this.state.Inputs.map((pin) => (
                        <SideEditPin Pin={pin} Input />
                    ))}
                </div>
                <svg className={cl.EditView}>
                    <g transform="translate(-44,7)">
                        {this.state.Wires.map((wire) => (
                            <PWire wire={wire} />
                        ))}
                    </g>
                </svg>
                <div className={cl.OutputField}>
                    {this.state.Outputs.map((pin) => (
                        <SideEditPin Pin={pin} disabled />
                    ))}
                </div>
            </div>
        );
    }
}
