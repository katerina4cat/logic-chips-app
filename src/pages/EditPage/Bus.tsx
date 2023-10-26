import React, { RefObject, useRef } from "react";
import cl from "./Bus.module.scss";
import { ChipModel } from "../../common/ChipModel";
import { Colors, Pos, Wire } from "../../common/Wire";
import PinInteraction from "./PinInteraction";
import { Pin } from "../../common/Pin";
import { BUS } from "../../common/BUS";

interface ChipReq {
    chip: ChipModel;
}
interface LineReq {
    wires: Wire[];
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

export const LineDrawer: React.FC<LineReq> = (props) => {
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
            {props.wires.map((wire) => (
                <path
                    d={`M${wire.WirePoints.map(
                        (pos) => `${pos.X} ${pos.Y}`
                    ).join(" L")}`}
                    fill="none"
                    stroke={wire.getColorWithState()}
                    strokeWidth="6px"
                />
            ))}
        </svg>
    );
};
