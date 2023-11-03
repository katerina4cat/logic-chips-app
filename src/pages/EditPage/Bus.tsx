import React, { useRef } from "react";
import cl from "./Bus.module.scss";
import { ChipModel } from "../../common/Simulating/ChipModel";
import {
    Colors,
    DeleteWire,
    Wire,
    WireIncomplete,
} from "../../common/Simulating/Wire";
import { BUS } from "../../common/Simulating/BUS";
import { debug } from "../../App";

interface ChipReq {
    chip: ChipModel;
}
interface LineDrawReq {
    wires: Wire[];
    draggingWire: { current: WireIncomplete };
    updateAll: () => void;
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
    return (
        <svg
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                left: 0,
                top: 0,
            }}
            id="WireSvg"
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
        </svg>
    );
};
