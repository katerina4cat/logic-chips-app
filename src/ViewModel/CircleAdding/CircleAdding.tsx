import { Component, ReactNode } from "react";
import cl from "./CircleAdding.module.scss";
import { Pos } from "../../common/Pos";
import { ChipMinimalInfo } from "../../Structs/ChipMinimalInfo";

interface RequiredProps {
    enabled?: boolean;
    elements: ChipMinimalInfo[];
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
            <svg
                style={{
                    display: this.props.enabled ? "block" : "none",
                }}
                className={cl.CircleAdding}
                viewBox="0 0 100 100"
            >
                {this.props.elements.map((element, i) => {
                    const x1 = Math.cos(this.getAngle(i)) * 26 + 50;
                    const y1 = Math.sin(this.getAngle(i)) * 26 + 50;
                    const x2 = Math.cos(this.getAngle(i + 1)) * 26 + 50;
                    const y2 = Math.sin(this.getAngle(i + 1)) * 26 + 50;
                    const textx = Math.cos(this.getAngle(i + 0.5)) * 50 + 50;
                    const texty = Math.sin(this.getAngle(i + 0.5)) * 50 + 50;
                    return (
                        <>
                            <path
                                className={cl.CircleItem}
                                d={`
                                M${x1},${y1}A26,26,0,0,${1},${x2},${y2}
                                `}
                            ></path>
                            <path
                                id={"selector_" + i + element.name}
                                d={
                                    textx < 50
                                        ? `M${textx},${texty}L50,50`
                                        : `M50,50L${textx},${texty}`
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
        );
    }
}
