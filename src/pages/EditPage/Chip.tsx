import { useEffect, useRef, useState } from "react";
import { ChipModel } from "../../common/Simulating/ChipModel";
import cl from "./Chip.module.scss";
import PinInteraction from "./PinInteraction";
import { debug } from "../../App";
import { DeleteWire } from "../../common/Simulating/Wire";

interface ChipReq {
    chip: ChipModel;
    VisiblePinTitles: boolean;
    MainChip: ChipModel;
    updateAll: () => void;
}

const Chip: React.FC<ChipReq> = (props) => {
    const DragListeners = useRef<{ [key: number]: () => void }>({});
    useEffect(() => {
        Object.values(DragListeners.current).forEach((listener) => listener());
        console.log("UpdateChipsWires!");
    }, [props.chip]);

    const first = useRef<HTMLDivElement | null>(null);
    const handleMouseDown = (e: any) => {
        if (e.button == 0) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
        }
    };

    const handleMouseMove = (e: any) => {
        if (first.current) {
            props.chip.Position[0].X = e.pageX - 45;
            props.chip.Position[0].Y = e.pageY;
            first.current.style.left = props.chip.Position[0].X + "px";
            first.current.style.top = props.chip.Position[0].Y + "px";
            Object.values(DragListeners.current).forEach((listener) =>
                listener()
            );
        }
    };

    const handleMouseUp = () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.code == "Backspace") {
            window.removeEventListener("keydown", handleKeyDown);

            props.chip.OutputPins.forEach((pin) =>
                pin.Wires.filter(
                    (pinWire) => pinWire.Source.ID == pin.ID
                ).forEach((pinWire) => {
                    DeleteWire(props.MainChip.Connections, pinWire);
                })
            );
            props.chip.InputPins.forEach((pin) =>
                pin.Wires.filter(
                    (pinWire) => pinWire.Target.ID == pin.ID
                ).forEach((pinWire) => {
                    DeleteWire(props.MainChip.Connections, pinWire);
                })
            );
            props.MainChip.SubChips = props.MainChip.SubChips.filter(
                (chip) => chip != props.chip
            );
            if (props.updateAll) props.updateAll();
        }
    };

    return (
        <div
            key={props.chip.ID}
            ref={first}
            className={cl.Chip}
            style={{
                left: props.chip.Position[0].X,
                top: props.chip.Position[0].Y,
                backgroundColor: props.chip.Colour,
                position: "absolute",
            }}
            onMouseDown={handleMouseDown}
            onContextMenu={(e) => {
                if (debug) console.log(props.chip);
                alert("Заглушка при пкм по чипу");
                e.stopPropagation();
                e.preventDefault();
            }}
            onMouseEnter={() =>
                window.addEventListener("keydown", handleKeyDown)
            }
            onMouseLeave={() =>
                window.removeEventListener("keydown", handleKeyDown)
            }
        >
            <div
                className={cl.PinList}
                style={{
                    transform: "translateX(-60%)",
                }}
            >
                {props.chip.InputPins.map((pin) => (
                    <PinInteraction
                        key={pin.ID}
                        pin={pin}
                        DragListeners={DragListeners}
                        VisiblePinTitles={props.VisiblePinTitles}
                        updateAll={props.updateAll}
                    />
                ))}
            </div>
            {props.chip.Name}
            <div
                className={cl.PinList}
                style={{
                    transform: "translateX(60%)",
                }}
            >
                {props.chip.OutputPins.map((pin) => (
                    <PinInteraction
                        key={pin.ID}
                        pin={pin}
                        DragListeners={DragListeners}
                        VisiblePinTitles={props.VisiblePinTitles}
                        updateAll={props.updateAll}
                    />
                ))}
            </div>
        </div>
    );
};

export default Chip;
