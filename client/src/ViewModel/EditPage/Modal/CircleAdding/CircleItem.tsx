import { createRef } from "react";
import cl from "./CircleItem.module.scss";
import { Pos } from "../../../../common/Pos";
import { SaveLoader } from "../../../../Managers/SaveLoader";
import { ViewModel, view } from "@yoskutik/react-vvm";
import { makeObservable, action } from "mobx";

interface RequiredProps {
    centerAngle: number;
    halfAngle: number;
    element: string;
    elementInd: number;
    circleID: number;
    addNewChip?: (chipName: string) => void;
    saveLoader: SaveLoader;
    contextMenu: (chipName: string, positionCursor: Pos) => void;
    edit?: boolean;
}

export class CircleItemViewModel extends ViewModel<undefined, RequiredProps> {
    elementBackgroundRef = createRef<SVGPathElement>();
    elementTitleRef = createRef<SVGPathElement>();

    constructor() {
        super();
        makeObservable(this);
    }
    @action startGrabbing = () => {
        window.addEventListener("mouseup", this.stopGrabbing);
        window.addEventListener("mousemove", this.grabbingProcess);
        if (!this.elementBackgroundRef.current) return;
        this.elementBackgroundRef.current.style.stroke =
            "rgba(255,255,255,0.75)";
        this.elementBackgroundRef.current.style.strokeWidth = "42";
    };

    @action grabbingProcess = (e: MouseEvent) => {
        const delta = new Pos(
            e.pageX - window.innerWidth * 0.72433704,
            e.pageY - window.innerHeight / 2
        );
        const angle = delta.angleFromZero();

        const x1 = Math.cos(angle - this.viewProps.halfAngle) * 26 + 50;
        const y1 = Math.sin(angle - this.viewProps.halfAngle) * 26 + 50;
        const x2 = Math.cos(angle + this.viewProps.halfAngle) * 26 + 50;
        const y2 = Math.sin(angle + this.viewProps.halfAngle) * 26 + 50;
        const rawTextx = Math.cos(angle);
        const rawTexty = Math.sin(angle);
        this.elementBackgroundRef.current?.setAttribute(
            "d",
            this.viewProps.saveLoader.saveInfo.Wheels[this.viewProps.circleID]
                .length == 1
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
            angle / (this.viewProps.halfAngle * 2) - this.viewProps.elementInd;
        if (deltaInd > 1.5)
            deltaInd -=
                this.viewProps.saveLoader.saveInfo.Wheels[
                    this.viewProps.circleID
                ].length;
        if (deltaInd > 0.875 && deltaInd < 1.5) {
            this.viewProps.saveLoader.swapCircleElement(
                this.viewProps.circleID,
                this.viewProps.element,
                false
            );
        } else if (deltaInd < -0.875 && deltaInd > -1.5) {
            this.viewProps.saveLoader.swapCircleElement(
                this.viewProps.circleID,
                this.viewProps.element,
                true
            );
        }
    };

    stopGrabbing = () => {
        window.removeEventListener("mouseup", this.stopGrabbing);
        window.removeEventListener("mousemove", this.grabbingProcess);

        const x1 =
            Math.cos(this.viewProps.centerAngle - this.viewProps.halfAngle) *
                26 +
            50;
        const y1 =
            Math.sin(this.viewProps.centerAngle - this.viewProps.halfAngle) *
                26 +
            50;
        const x2 =
            Math.cos(this.viewProps.centerAngle + this.viewProps.halfAngle) *
                26 +
            50;
        const y2 =
            Math.sin(this.viewProps.centerAngle + this.viewProps.halfAngle) *
                26 +
            50;
        const rawTextx = Math.cos(this.viewProps.centerAngle);
        const rawTexty = Math.sin(this.viewProps.centerAngle);

        this.elementBackgroundRef.current?.setAttribute(
            "d",
            this.viewProps.saveLoader.saveInfo.Wheels[this.viewProps.circleID]
                .length == 1
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
}
export const CircleItem = view(CircleItemViewModel)<RequiredProps>(
    ({ viewModel }) => {
        const x1 =
            Math.cos(
                viewModel.viewProps.centerAngle - viewModel.viewProps.halfAngle
            ) *
                26 +
            50;
        const y1 =
            Math.sin(
                viewModel.viewProps.centerAngle - viewModel.viewProps.halfAngle
            ) *
                26 +
            50;
        const x2 =
            Math.cos(
                viewModel.viewProps.centerAngle + viewModel.viewProps.halfAngle
            ) *
                26 +
            50;
        const y2 =
            Math.sin(
                viewModel.viewProps.centerAngle + viewModel.viewProps.halfAngle
            ) *
                26 +
            50;
        const rawTextx = Math.cos(viewModel.viewProps.centerAngle);
        const rawTexty = Math.sin(viewModel.viewProps.centerAngle);
        return (
            <g>
                <path
                    className={`${cl.CircleItem} ${
                        viewModel.viewProps.edit ? cl.CircleItemEdit : undefined
                    }`}
                    d={
                        viewModel.viewProps.saveLoader.saveInfo.Wheels[
                            viewModel.viewProps.circleID
                        ].length == 1
                            ? `M${x1},${y1}A26,26,0,0,${1},${
                                  rawTextx * 26 + 50
                              },${
                                  rawTexty * 26 + 50
                              }A26,26,0,0,${1},${x2},${y2}`
                            : `M${x1},${y1}A26,26,0,0,${1},${x2},${y2}`
                    }
                    onClick={
                        viewModel.viewProps.edit
                            ? undefined
                            : (e) => {
                                  if (!viewModel.viewProps.addNewChip) return;
                                  e.stopPropagation();
                                  viewModel.viewProps.addNewChip(
                                      viewModel.viewProps.element
                                  );
                              }
                    }
                    onContextMenu={(e) => {
                        e.preventDefault();
                        viewModel.viewProps.contextMenu(
                            viewModel.viewProps.element,
                            new Pos(e.pageX, e.pageY)
                        );
                    }}
                    onMouseDown={
                        viewModel.viewProps.edit
                            ? viewModel.startGrabbing
                            : undefined
                    }
                    ref={viewModel.elementBackgroundRef}
                />
                <path
                    id={`selector_${viewModel.viewProps.circleID}${
                        viewModel.viewProps.edit ? "e" : ""
                    }${viewModel.viewProps.element}`}
                    ref={viewModel.elementTitleRef}
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
                <text textAnchor="middle">
                    <textPath
                        href={`#selector_${viewModel.viewProps.circleID}${
                            viewModel.viewProps.edit ? "e" : ""
                        }${viewModel.viewProps.element}`}
                        className={cl.TitleItem}
                        startOffset="50%"
                    >
                        {viewModel.viewProps.element}
                    </textPath>
                </text>
            </g>
        );
    }
);
