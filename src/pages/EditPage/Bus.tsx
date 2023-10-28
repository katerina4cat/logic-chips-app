import React, { RefObject, useRef } from "react";
import cl from "./Bus.module.scss";
import { ChipModel } from "../../common/ChipModel";
import { Colors, Pos, Wire } from "../../common/Wire";
import { BUS } from "../../common/BUS";

interface ChipReq {
    chip: ChipModel;
}
interface LineDrawReq {
    wires: Wire[];
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
                height: "inherit",
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
                height: "inherit",
                left: 0,
                top: 0,
            }}
        >
            {props.wires.map((wire) => {
                wire.WireGraphObject = useRef(null);
                return (
                    <path
                        ref={wire.WireGraphObject}
                        strokeWidth={6}
                        stroke={wire.getColorWithState()}
                        fill="none"
                    />
                );
            })}
        </svg>
    );
};
