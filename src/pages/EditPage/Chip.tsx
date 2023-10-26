import { useState } from "react";
import { ChipModel } from "../../common/ChipModel";
import cl from "./Chip.module.scss";
import Draggable from "react-draggable";
import PinInteraction from "./PinInteraction";

interface ChipReq {
    chip: ChipModel;
}

const Chip: React.FC<ChipReq> = (props) => {
    return (
        <Draggable
            defaultPosition={{
                x: props.chip.Position[0].X * window.innerWidth,
                y: props.chip.Position[0].Y * window.innerHeight,
            }}
            onDrag={(e, data) => {
                props.chip.Position[0].X = data.x;
                props.chip.Position[0].Y = data.y;
            }}
        >
            <div
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
                    style={{ transform: "translateX(60%)" }}
                >
                    {props.chip.OutputPins.map((pin) => (
                        <PinInteraction pin={pin} />
                    ))}
                </div>
            </div>
        </Draggable>
    );
};

export default Chip;
