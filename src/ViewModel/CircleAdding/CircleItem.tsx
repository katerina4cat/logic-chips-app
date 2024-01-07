import { Component, ReactNode, createRef } from "react";
import cl from "./CircleItem.module.scss";
import { SaveInfo } from "../../Structs/SaveInfo";
import { Pos } from "../../common/Pos";

interface RequiredProps {
    centerAngle: number;
    halfAngle: number;
    element: string;
    elementInd: number;
    circleID: number;
    addNewChip: (chipName: string) => void;
    updateCircle: () => void;
    saveManager: SaveInfo;
    contextMenu: (chipName: string, positionCursor: Pos) => void;
    edit?: boolean;
}

interface States {}

export class CircleItem extends Component<RequiredProps, States> {
    constructor(props: RequiredProps) {
        super(props);
    }
    startGrabbing = () => {
        window.addEventListener("mouseup", this.stopGrabbing);
        window.addEventListener("mousemove", this.grabbingProcess);
        if (!this.elementBackgroundRef.current) return;
        this.elementBackgroundRef.current.style.stroke =
            "rgba(255,255,255,0.75)";
        this.elementBackgroundRef.current.style.strokeWidth = "42";
    };

    grabbingProcess = (e: MouseEvent) => {
        const delta = new Pos(
            e.pageX - window.innerWidth * 0.72433704,
            e.pageY - window.innerHeight / 2
        );
        const angle = delta.angleFromZero();

        const x1 = Math.cos(angle - this.props.halfAngle) * 26 + 50;
        const y1 = Math.sin(angle - this.props.halfAngle) * 26 + 50;
        const x2 = Math.cos(angle + this.props.halfAngle) * 26 + 50;
        const y2 = Math.sin(angle + this.props.halfAngle) * 26 + 50;
        const rawTextx = Math.cos(angle);
        const rawTexty = Math.sin(angle);
        this.elementBackgroundRef.current?.setAttribute(
            "d",
            this.props.saveManager.Wheels[this.props.circleID].length == 1
                ? `M${x1},${y1}A26,26,0,0,${1},${rawTextx * 26 + 50},${
                      rawTexty * 26 + 50
                  }A26,26,0,0,${1},${x2},${y2}`
                : `M${x1},${y1}A26,26,0,0,${1},${x2},${y2}`
        );

        this.elementTitleRef.current?.setAttribute(
            "d",
            rawTextx < 0
                ? `M${rawTextx * 50 + 50},${rawTexty * 50 + 50}L50,50`
                : `M50,50L${rawTextx * 50 + 50},${rawTexty * 50 + 50}`
        );
        let deltaInd =
            angle / (this.props.halfAngle * 2) - this.props.elementInd;
        if (deltaInd > 1.5)
            deltaInd -=
                this.props.saveManager.Wheels[this.props.circleID].length;
        if (deltaInd > 0.875 && deltaInd < 1.5) {
            this.props.saveManager.swapCircleElement(
                this.props.circleID,
                this.props.element,
                false
            );
            this.props.updateCircle();
        } else if (deltaInd < -0.875 && deltaInd > -1.5) {
            this.props.saveManager.swapCircleElement(
                this.props.circleID,
                this.props.element,
                true
            );
            this.props.updateCircle();
        }
    };

    stopGrabbing = () => {
        window.removeEventListener("mouseup", this.stopGrabbing);
        window.removeEventListener("mousemove", this.grabbingProcess);

        const x1 =
            Math.cos(this.props.centerAngle - this.props.halfAngle) * 26 + 50;
        const y1 =
            Math.sin(this.props.centerAngle - this.props.halfAngle) * 26 + 50;
        const x2 =
            Math.cos(this.props.centerAngle + this.props.halfAngle) * 26 + 50;
        const y2 =
            Math.sin(this.props.centerAngle + this.props.halfAngle) * 26 + 50;
        const rawTextx = Math.cos(this.props.centerAngle);
        const rawTexty = Math.sin(this.props.centerAngle);

        this.elementBackgroundRef.current?.setAttribute(
            "d",
            this.props.saveManager.Wheels[this.props.circleID].length == 1
                ? `M${x1},${y1}A26,26,0,0,${1},${rawTextx * 26 + 50},${
                      rawTexty * 26 + 50
                  }A26,26,0,0,${1},${x2},${y2}`
                : `M${x1},${y1}A26,26,0,0,${1},${x2},${y2}`
        );
        this.elementTitleRef.current?.setAttribute(
            "d",
            rawTextx < 0
                ? `M${rawTextx * 50 + 50},${rawTexty * 50 + 50}L50,50`
                : `M50,50L${rawTextx * 50 + 50},${rawTexty * 50 + 50}`
        );

        if (!this.elementBackgroundRef.current) return;
        this.elementBackgroundRef.current.style.stroke =
            "rgba(255,255,255,0.3)";
        this.elementBackgroundRef.current.style.strokeWidth = "40";
    };

    elementBackgroundRef = createRef<SVGPathElement>();
    elementTitleRef = createRef<SVGPathElement>();

    render(): ReactNode {
        const x1 =
            Math.cos(this.props.centerAngle - this.props.halfAngle) * 26 + 50;
        const y1 =
            Math.sin(this.props.centerAngle - this.props.halfAngle) * 26 + 50;
        const x2 =
            Math.cos(this.props.centerAngle + this.props.halfAngle) * 26 + 50;
        const y2 =
            Math.sin(this.props.centerAngle + this.props.halfAngle) * 26 + 50;
        const rawTextx = Math.cos(this.props.centerAngle);
        const rawTexty = Math.sin(this.props.centerAngle);
        return (
            <g>
                <path
                    className={`${cl.CircleItem} ${
                        this.props.edit ? cl.CircleItemEdit : undefined
                    }`}
                    d={
                        this.props.saveManager.Wheels[this.props.circleID]
                            .length == 1
                            ? `M${x1},${y1}A26,26,0,0,${1},${
                                  rawTextx * 26 + 50
                              },${
                                  rawTexty * 26 + 50
                              }A26,26,0,0,${1},${x2},${y2}`
                            : `M${x1},${y1}A26,26,0,0,${1},${x2},${y2}`
                    }
                    onClick={
                        this.props.edit
                            ? undefined
                            : (e) => {
                                  e.stopPropagation();
                                  this.props.addNewChip(this.props.element);
                              }
                    }
                    onContextMenu={(e) => {
                        e.preventDefault();
                        this.props.contextMenu(
                            this.props.element,
                            new Pos(e.pageX, e.pageY)
                        );
                    }}
                    onMouseDown={
                        this.props.edit ? this.startGrabbing : undefined
                    }
                    ref={this.elementBackgroundRef}
                />
                <path
                    id={`selector_${this.props.circleID}${
                        this.props.edit ? "e" : ""
                    }${this.props.element}`}
                    ref={this.elementTitleRef}
                    d={
                        rawTextx < 0
                            ? `M${rawTextx * 50 + 50},${
                                  rawTexty * 50 + 50
                              }L50,50`
                            : `M50,50L${rawTextx * 50 + 50},${
                                  rawTexty * 50 + 50
                              }`
                    }
                />
                <text text-anchor="middle">
                    <textPath
                        href={`#selector_${this.props.circleID}${
                            this.props.edit ? "e" : ""
                        }${this.props.element}`}
                        className={cl.TitleItem}
                        startOffset="50%"
                    >
                        {this.props.element}
                    </textPath>
                </text>
            </g>
        );
    }
}
