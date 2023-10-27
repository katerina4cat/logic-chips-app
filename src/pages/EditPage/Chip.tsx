import { useRef } from "react";
import { ChipModel } from "../../common/ChipModel";
import cl from "./Chip.module.scss";
import Draggable from "react-draggable";
import PinInteraction from "./PinInteraction";

interface ChipReq {
    chip: ChipModel;
    updateWires: () => void;
}

const Chip: React.FC<ChipReq> = (props) => {
    const first = useRef<HTMLDivElement | null>(null);
    return (
        <Draggable
            defaultPosition={{
                x: props.chip.Position[0].X,
                y: props.chip.Position[0].Y,
            }}
            onDrag={(e, data) => {
                props.chip.Position[0].X = data.x;
                props.chip.Position[0].Y = data.y;
                props.chip.InputPins.forEach((pin) =>
                    pin.Wires.map((wire) => {
                        wire.WireGraphicObject;
                    })
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
                        style={{ transform: "translateX(-60%)" }}
                    >
                        {props.chip.InputPins.map((pin) => (
                            <PinInteraction pin={pin} />
                        ))}
                    </div>
                    {props.chip.Name.replace(/\s+/, "\n")}
                    <div
                        className={cl.PinList}
                        style={{
                            transform: "translateX(60%)",
                            height: first.current?.offsetHeight
                                ? first.current?.offsetHeight - 10
                                : "auto",
                        }}
                    >
                        {props.chip.OutputPins.map((pin) => (
                            <PinInteraction pin={pin} />
                        ))}
                    </div>
                </div>
            </div>
        </Draggable>
    );
};

export default Chip;
