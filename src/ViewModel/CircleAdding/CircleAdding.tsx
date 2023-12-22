import { Component, ReactNode } from "react";
import cl from "./CircleAdding.module.scss";
import { Pos } from "../../common/Pos";
import { ChipMinimalInfo } from "../../Structs/ChipMinimalInfo";
import { Chip } from "../../Simulating/Chip";
import { SaveInfo } from "../../Structs/SaveInfo";

interface RequiredProps {
    enabled?: boolean;
    setEnabled: (e: boolean) => void;
    elements: ChipMinimalInfo[];
    addNewChip: (chip: Chip) => void;
    saveManager: SaveInfo;
}

interface States {}

export class CircleAdding extends Component<RequiredProps, States> {
    state: Readonly<States> = { position: new Pos() };
    constructor(props: RequiredProps) {
        super(props);
    }

    private getAngle = (iter: number) => {
        return iter * 2 * Math.PI * (1 / this.props.elements.length);
    };

    render(): ReactNode {
        return (
            <div
                onClick={(e) => {
                    e.preventDefault();
                    this.props.setEnabled(false);
                }}
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.4)",
                    display: this.props.enabled ? "block" : "none",
                    position: "fixed",
                    left: 0,
                    top: 0,
                }}
            >
                <svg className={cl.CircleAdding} viewBox="0 0 100 100">
                    {this.props.elements.map((element, i) => {
                        const x1 = Math.cos(this.getAngle(i)) * 26 + 50;
                        const y1 = Math.sin(this.getAngle(i)) * 26 + 50;
                        const x2 = Math.cos(this.getAngle(i + 1)) * 26 + 50;
                        const y2 = Math.sin(this.getAngle(i + 1)) * 26 + 50;
                        const rawTextx = Math.cos(this.getAngle(i + 0.5));
                        const rawTexty = Math.sin(this.getAngle(i + 0.5));
                        return (
                            <>
                                <path
                                    className={cl.CircleItem}
                                    d={
                                        this.props.elements.length == 1
                                            ? `M${x1},${y1}A26,26,0,0,${1},${
                                                  rawTextx * 26 + 50
                                              },${
                                                  rawTexty * 26 + 50
                                              }A26,26,0,0,${1},${x2},${y2}`
                                            : `M${x1},${y1}A26,26,0,0,${1},${x2},${y2}`
                                    }
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        this.props.addNewChip(
                                            this.props.saveManager.loadChipByName(
                                                element.name
                                            )
                                        );
                                    }}
                                ></path>
                                <path
                                    id={"selector_" + i + element.name}
                                    d={
                                        rawTextx < 0
                                            ? `M${rawTextx * 50 + 50},${
                                                  rawTexty * 50 + 50
                                              }L50,50`
                                            : `M50,50L${rawTextx * 50 + 50},${
                                                  rawTexty * 50 + 50
                                              }`
                                    }
                                ></path>
                                <text text-anchor="middle">
                                    <textPath
                                        href={"#selector_" + i + element.name}
                                        className={cl.TitleItem}
                                        startOffset="50%"
                                    >
                                        {element.name}
                                    </textPath>
                                </text>
                            </>
                        );
                    })}
                </svg>
            </div>
        );
    }
}
