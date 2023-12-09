import { Component, ReactNode } from "react";
import cl from "./EditPage.module.scss";
import { InitilizeChipModel } from "../common/LoadSave/InitializeComponent";
import { LoadChipInfo } from "../common/LoadSave/LoadSave";
import React from "react";
import { ChipModel } from "../common/Simulating/ChipModel";

interface RequiredProps {}

interface States {}

export class EditPage extends Component<RequiredProps, States> {
    state: Readonly<States> = {};
    Chip?: ChipModel;
    constructor(props: RequiredProps) {
        super(props);
    }

    componentDidMount() {
        console.log("first");
        const loaded = LoadChipInfo("NAND");
        if (loaded) this.Chip = InitilizeChipModel(loaded, 0, this.canvasRef);
        console.log(this.Chip);
    }
    canvasRef = React.createRef<SVGSVGElement>();

    render(): ReactNode {
        return (
            <div className={cl.EditPage}>
                <svg className={cl.EditCanvas} ref={this.canvasRef}></svg>
            </div>
        );
    }
}
