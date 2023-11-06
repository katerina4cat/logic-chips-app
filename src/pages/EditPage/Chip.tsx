import { useEffect, useRef } from "react";
import { ChipModel } from "../../common/Simulating/ChipModel";
import cl from "./Chip.module.scss";
import PinInteraction from "./PinInteraction";
import { debug } from "../../App";
import { Wire, WireIncomplete } from "../../common/Simulating/Wire";
import { sideWidth } from "./EditChip";

interface ChipReq {
    chip: ChipModel;
    VisiblePinTitles: boolean;
    MainChip: ChipModel;
    newWire: { current: WireIncomplete };
    updateAll: () => void;
    Wires: Wire[];
    ChipSelecting: ChipModel[];
    setChipSelecting: (e: ChipModel[]) => void;
}

const Chip: React.FC<ChipReq> = (props) => {
    const DragListeners = useRef<{ [key: number]: () => void }>({});
    useEffect(() => {
        Object.values(DragListeners.current).forEach((listener) => listener());
        console.log("UpdateChipsWires!");
    }, []);

    const first = useRef<HTMLDivElement | null>(null);

    const handleMouseDown = (e: any) => {
        if (e.button == 0) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
        }
    };
    const handleMouseMove = (e: any) => {
        if (first.current) {
            props.chip.Position[0].X = e.pageX - sideWidth;
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

    return (
        <div
            key={props.chip.ID}
            ref={first}
            className={`${cl.Chip} ${
                props.ChipSelecting.includes(props.chip) ? cl.Selected : ""
            }`}
            style={{
                left: props.chip.Position[0].X,
                top: props.chip.Position[0].Y,
                backgroundColor: props.chip.Colour,
                position: "absolute",
            }}
            onMouseDown={(e) => {
                handleMouseDown(e);
                props.setChipSelecting([props.chip]);
            }}
            onClick={(e) => e.stopPropagation()}
            onContextMenu={(e) => {
                if (debug) console.log(props.chip);
                alert("Заглушка при пкм по чипу");
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
                        key={pin.ID}
                        pin={pin}
                        DragListeners={DragListeners}
                        VisiblePinTitles={props.VisiblePinTitles}
                        updateAll={props.updateAll}
                        newWire={props.newWire}
                        Wires={props.Wires}
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
                        newWire={props.newWire}
                        Wires={props.Wires}
                    />
                ))}
            </div>
        </div>
    );
};

export default Chip;
