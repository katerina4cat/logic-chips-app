import { useEffect, useRef, useState } from "react";
import { ChipModel } from "../../common/Simulating/ChipModel";
import cl from "./Chip.module.scss";
import PinInteraction from "./PinInteraction";

interface ChipReq {
    chip: ChipModel;
    updateWires: () => void;
    VisiblePinTitles: boolean;
    EditPage: React.RefObject<HTMLDivElement>;
    updateAll?: () => void;
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
            props.EditPage.current?.addEventListener(
                "mousemove",
                handleMouseMove
            );
            props.EditPage.current?.addEventListener("mouseup", handleMouseUp);
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
        props.EditPage.current?.removeEventListener(
            "mousemove",
            handleMouseMove
        );
        props.EditPage.current?.removeEventListener("mouseup", handleMouseUp);
    };

    return (
        <div
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
                console.log(props.chip);
                e.stopPropagation();
                e.preventDefault();
            }}
        >
            <div
                className={cl.PinList}
                style={{
                    transform: "translateX(-60%)",
                }}
            >
                {props.chip.InputPins.map((pin) => (
                    <PinInteraction
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
