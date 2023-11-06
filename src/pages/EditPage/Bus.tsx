import React, { RefObject, useRef } from "react";
import cl from "./Bus.module.scss";
import { ChipModel } from "../../common/Simulating/ChipModel";
import {
    Colors,
    DeleteWire,
    Pos,
    Wire,
    WireIncomplete,
} from "../../common/Simulating/Wire";
import { BUS } from "../../common/Simulating/BUS";
import { debug } from "../../App";
import { sideWidth } from "./EditChip";

interface ChipReq {
    chip: ChipModel;
}
interface LineDrawReq {
    wires: Wire[];
    draggingWire: { current: WireIncomplete };
    updateAll: () => void;
    selectingFieldRef: RefObject<SVGRectElement>;
}

interface BusDrawReq {
    buses: BUS[];
}
export const Bus: React.FC<ChipReq> = (props) => {
    return (
        <>
            <div
                className={cl.BusEndLine}
                style={{
                    position: "absolute",
                    backgroundColor: Colors.floating.color,
                    left: props.chip.Position[0].X,
                    top: props.chip.Position[0].Y,
                }}
            />
            <div
                className={cl.BusEndLine}
                style={{
                    position: "absolute",
                    backgroundColor: Colors.floating.color,
                    left: props.chip.Position[props.chip.Position.length - 1].X,
                    top: props.chip.Position[props.chip.Position.length - 1].Y,
                }}
            />
        </>
    );
};

export const BusDrawer: React.FC<BusDrawReq> = (props) => {
    return (
        <svg
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                left: 0,
                top: 0,
            }}
        >
            {props.buses.map((bus) => (
                <path
                    d={`M${bus.Position.map((pos) => `${pos.X} ${pos.Y}`).join(
                        " L"
                    )}`}
                    fill="none"
                    stroke={bus.OutputPins[0].getColorWithState()}
                    strokeWidth="6px"
                />
            ))}
        </svg>
    );
};

export const LineDrawer: React.FC<LineDrawReq> = (props) => {
    let firstSelectedPoint: Pos = { X: 0, Y: 0 };
    const moveMouse = (e: MouseEvent) => {
        const deltaX = e.pageX - firstSelectedPoint.X;
        const deltaY = e.pageY - firstSelectedPoint.Y;
        if (props.selectingFieldRef.current) {
            if (deltaX < 0)
                props.selectingFieldRef.current.setAttribute(
                    "x",
                    (e.pageX - sideWidth).toString()
                );
            if (deltaY < 0)
                props.selectingFieldRef.current.setAttribute(
                    "y",
                    e.pageY.toString()
                );
            props.selectingFieldRef.current.setAttribute(
                "width",
                Math.abs(deltaX) + "px"
            );
            props.selectingFieldRef.current.setAttribute(
                "height",
                Math.abs(deltaY) + "px"
            );
        }
    };
    const removeMoveMouse = () => {
        if (props.selectingFieldRef.current) {
            props.selectingFieldRef.current.style.display = "none";

            props.selectingFieldRef.current.setAttribute("width", "0");
            props.selectingFieldRef.current.setAttribute("height", "0");
        }
        window.removeEventListener("mousemove", moveMouse);
    };

    return (
        <svg
            style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
            }}
            id="WireSvg"
            onMouseDown={(e) => {
                firstSelectedPoint = { X: e.pageX, Y: e.pageY };
                if (props.selectingFieldRef.current) {
                    props.selectingFieldRef.current.setAttribute(
                        "x",
                        firstSelectedPoint.X - sideWidth + "px"
                    );
                    props.selectingFieldRef.current.setAttribute(
                        "y",
                        firstSelectedPoint.Y + "px"
                    );
                    props.selectingFieldRef.current.style.display = "block";
                    window.addEventListener("mouseup", removeMoveMouse);
                    window.addEventListener("mousemove", moveMouse);
                }
            }}
        >
            {props.wires.map((wire) => {
                if (!wire.WireGraphObject) wire.WireGraphObject = useRef(null);
                const handleKeyDownEventHover = (e: any) => {
                    if (e.code == "Backspace") {
                        window.removeEventListener(
                            "keydown",
                            handleKeyDownEventHover
                        );
                        DeleteWire(props.wires, wire, props.updateAll);
                    }
                };
                return (
                    <g key={wire.ID}>
                        <path
                            ref={wire.WireGraphObject}
                            stroke={wire.getColorWithState()}
                            fill="none"
                            className={cl.WirePath}
                            id={wire.ID.toString()}
                            d={wire.generateStringPoints()}
                            tabIndex={0}
                            onMouseEnter={() =>
                                window.addEventListener(
                                    "keydown",
                                    handleKeyDownEventHover
                                )
                            }
                            onMouseLeave={() =>
                                window.removeEventListener(
                                    "keydown",
                                    handleKeyDownEventHover
                                )
                            }
                        />
                        {debug ? (
                            <text>
                                <textPath
                                    href={`#${wire.ID}`}
                                    startOffset={"50%"}
                                    fill="white"
                                >
                                    {wire.ID}
                                </textPath>
                            </text>
                        ) : undefined}
                    </g>
                );
            })}
            <path
                ref={props.draggingWire.current.WireGraphObject}
                stroke={props.draggingWire.current.getColorWithState()}
                strokeWidth="6px"
                fill="none"
            />
            <rect ref={props.selectingFieldRef} className={cl.SelectingField} />
        </svg>
    );
};
