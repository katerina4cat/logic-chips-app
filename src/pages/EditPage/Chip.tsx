import { useEffect, useRef } from "react";
import { ChipModel } from "../../common/ChipModel";
import cl from "./Chip.module.scss";
import Draggable from "react-draggable";
import PinInteraction from "./PinInteraction";
import { chips } from "../../common/chips";

interface ChipReq {
    chip: ChipModel;
    updateWires: () => void;
}

const Chip: React.FC<ChipReq> = (props) => {
    const first = useRef<HTMLDivElement | null>(null);
    const DragListeners = useRef<{ [key: number]: () => void }>({});
    useEffect(() => {
        Object.values(DragListeners.current).forEach((listener) => listener());
        console.log("UpdateChipsWires!");
    }, [props.chip]);
    return (
        <Draggable
            defaultPosition={{
                x: props.chip.Position[0].X,
                y: props.chip.Position[0].Y,
            }}
            onDrag={(e, data) => {
                props.chip.Position[0].X = data.x;
                props.chip.Position[0].Y = data.y;
                Object.values(DragListeners.current).forEach((listener) =>
                    listener()
                );
            }}
        >
            <div style={{ position: "absolute" }}>
                <div
                    ref={first}
                    className={cl.Chip}
                    style={{
                        backgroundColor: props.chip.Colour,
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
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Draggable>
    );
};

export default Chip;
