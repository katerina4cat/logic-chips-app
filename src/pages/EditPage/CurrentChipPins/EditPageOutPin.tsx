import { Pin } from "../../../common/Simulating/Pin";
import cl from "./EditPageOutPin.module.scss";
import { Colors } from "../../../common/Simulating/Wire";
import PinInteraction from "../PinInteraction";
import { useEffect, useRef } from "react";

interface ReqOutPin {
    Pin: Pin;
    VisiblePinTitles?: boolean;
    updateAll?: () => void;
}

const EditPageOutPin: React.FC<ReqOutPin> = (props) => {
    const DragListeners = useRef<{ [key: number]: () => void }>({});
    useEffect(() => {
        Object.values(DragListeners.current).forEach((listener) => listener());
        console.log("UpdateInputsWires!");
    }, [props.Pin]);

    const first = useRef<HTMLDivElement | null>(null);
    const handleMouseDown = () => {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (e: any) => {
        if (first.current) {
            props.Pin.Position.Y = e.pageY;
            first.current.style.top = props.Pin.Position.Y + "px";
            Object.values(DragListeners.current).forEach((listener) =>
                listener()
            );
        }
    };

    const handleMouseUp = () => {
        window.addEventListener("mouseup", handleMouseUp);
        window.removeEventListener("mousemove", handleMouseMove);
    };

    return (
        <div
            className={cl.CurrChipPin}
            ref={first}
            style={{ top: props.Pin.Position.Y }}
        >
            <div className={cl.EditPagePin}>
                <div className={cl.PinChange} onMouseDown={handleMouseDown} />
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
                    updateAll={props.updateAll}
                />
            </div>
        </div>
    );
};

export default EditPageOutPin;
