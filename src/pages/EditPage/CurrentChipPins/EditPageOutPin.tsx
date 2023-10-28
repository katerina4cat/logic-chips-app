import { Pin } from "../../../common/Pin";
import cl from "./EditPageOutPin.module.scss";
import Draggable from "react-draggable";
import { Colors } from "../../../common/Wire";
import PinInteraction from "../PinInteraction";
import { useEffect, useRef } from "react";

interface ReqOutPin {
    Pin: Pin;
    VisiblePinTitles?: boolean;
}

const EditPageOutPin: React.FC<ReqOutPin> = (props) => {
    const DragListeners = useRef<{ [key: number]: () => void }>({});
    useEffect(() => {
        Object.values(DragListeners.current).forEach((listener) => listener());
        console.log("UpdateInputsWires!");
    }, [props.Pin]);
    return (
        <Draggable
            defaultPosition={{
                x: 0,
                y: props.Pin.Position.Y,
            }}
            onDrag={(e, data) => {
                props.Pin.Position.Y = data.y;
                Object.values(DragListeners.current).forEach((listener) =>
                    listener()
                );
            }}
            axis="y"
        >
            <div className={cl.CurrChipPin}>
                <div className={cl.EditPagePin}>
                    <div className={cl.PinChange} />
                    <div
                        className={cl.PinButtonChange}
                        style={{
                            border: "0.15em solid " + Colors.floating.color,
                            backgroundColor: props.Pin.getColorWithState(),
                        }}
                    />
                    <line
                        style={{
                            width: "1.4em",
                            height: "12.5%",
                            backgroundColor: Colors.floating.color,
                        }}
                    />
                    <PinInteraction
                        pin={props.Pin}
                        NameLeft={true}
                        style={{
                            transform: "translateX(75%)",
                            fontSize: "1.2em",
                        }}
                        DragListeners={DragListeners}
                        VisiblePinTitles={props.VisiblePinTitles}
                    />
                </div>
            </div>
        </Draggable>
    );
};

export default EditPageOutPin;
