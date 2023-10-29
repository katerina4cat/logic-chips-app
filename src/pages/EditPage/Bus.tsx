import React, { useRef } from "react";
import cl from "./Bus.module.scss";
import { ChipModel } from "../../common/ChipModel";
import { Colors, Wire } from "../../common/Wire";
import { BUS } from "../../common/BUS";
import { PinState } from "../../common/Pin";
import { debug } from "../../App";

interface ChipReq {
    chip: ChipModel;
}
interface LineDrawReq {
    wires: Wire[];
    updateAll?: () => void;
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
        >
            {props.wires.map((wire) => {
                if (!wire.WireGraphObject) wire.WireGraphObject = useRef(null);
                return (
                    <g>
                        <path
                            ref={wire.WireGraphObject}
                            id={wire.ID.toString()}
                            stroke={wire.getColorWithState()}
                            fill="none"
                            className={cl.WirePath}
                            d={wire.generateStringPoints()}
                            tabIndex={0}
                            onMouseEnter={(e) => e.currentTarget.focus()}
                            onMouseLeave={(e) => e.currentTarget.blur()}
                            onKeyDown={(e) => {
                                if (e.code == "Backspace") {
                                    wire.Source.State.removeListeners(
                                        wire.Target.State
                                    );
                                    wire.Target.State = new PinState();
                                    // wire.Target.Chip.ReLink(wire.Target);
                                    //wire.Target.Wires.
                                    const indexWires =
                                        props.wires.indexOf(wire);
                                    if (indexWires != -1)
                                        props.wires.splice(indexWires, 1);
                                    const indexChipWires =
                                        wire.Source.Wires.indexOf(wire);
                                    if (indexChipWires != -1)
                                        wire.Source.Wires.splice(
                                            indexChipWires,
                                            1
                                        );
                                    if (props.updateAll) props.updateAll();
                                }
                            }}
                        />
                        {debug ? (
                            <text>
                                <textPath
                                    href={"#" + wire.ID}
                                    startOffset="50%"
                                    text-anchor="middle"
                                    fontSize={"2em"}
                                >
                                    wire - {wire.ID}
                                </textPath>
                            </text>
                        ) : undefined}
                    </g>
                );
            })}
        </svg>
    );
};
