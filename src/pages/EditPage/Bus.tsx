import React, { RefObject, useRef } from "react";
import cl from "./Bus.module.scss";
import { ChipModel } from "../../common/Simulating/ChipModel";
import { Colors, DeleteWire, Pos, Wire } from "../../common/Simulating/Wire";
import { WireIncomplete } from "../../common/Simulating/WireIncomplete";
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
        <g>
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
        </g>
    );
};
