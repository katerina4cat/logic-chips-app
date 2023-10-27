import React, { RefObject, useEffect, useRef, useState } from "react";
import cl from "./Bus.module.scss";
import { ChipModel } from "../../common/ChipModel";
import { Colors, Pos, Position, Wire } from "../../common/Wire";
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
                    left: props.chip.Position[0].pos[0].X,
                    top: props.chip.Position[0].pos[0].Y,
                }}
            />
            <div
                className={cl.BusEndLine}
                style={{
                    position: "absolute",
                    backgroundColor: Colors.floating.color,
                    left: props.chip.Position[props.chip.Position.length - 1]
                        .pos[0].X,
                    top: props.chip.Position[props.chip.Position.length - 1]
                        .pos[0].Y,
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
                    d={`M${bus.Position.map(
                        (pos) => `${pos.pos[0].X} ${pos.pos[0].Y}`
                    ).join(" L")}`}
                    fill="none"
                    stroke={bus.OutputPins[0].getColorWithState()}
                    strokeWidth="6px"
                />
            ))}
            {props.wires.map((wire) => {
                const poses: { from: Position; to: Position } = {
                    from: { X: 0, Y: 0 },
                    to: { X: 0, Y: 0 },
                };
                poses.from = {
                    X:
                        (wire.Source.Chip?.Position[0]?.pos[0].X ||
                        wire.Source.IsInput
                            ? 25
                            : window.innerWidth - 25) - wire.Source.deltaChip.X,
                    Y:
                        (wire.Source.Chip.Position[0]?.pos[0].Y ||
                            window.innerHeight) - wire.Source.deltaChip.Y,
                };
                poses.to = {
                    X:
                        (wire.Target.Chip?.Position[0]?.pos[0]?.X ||
                            wire.Target.PositionY) - wire.Target.deltaChip.X,
                    Y:
                        (wire.Target.Chip.Position[0]?.pos[0].Y ||
                            window.innerHeight) - wire.Target.deltaChip.Y,
                };
                return (
                    <line
                        x1={poses.from.X}
                        y1={poses.from.Y}
                        x2={poses.to.X}
                        y2={poses.to.Y}
                        fill="none"
                        stroke={wire.getColorWithState()}
                        strokeWidth="6px"
                    />
                );
            })}
        </svg>
    );
};
