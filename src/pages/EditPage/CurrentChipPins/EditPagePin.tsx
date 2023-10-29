import { useEffect, useRef, useState } from "react";
import { Pin } from "../../../common/Pin";
import cl from "./EditPagePin.module.scss";
import { Colors } from "../../../common/Wire";
import PinInteraction from "../PinInteraction";

interface ReqPin {
    Pin: Pin;
    handleChangeInputPin: () => void;
    setupsInput: React.Dispatch<React.SetStateAction<number>>;
    VisiblePinTitles?: boolean;
    updateAll?: () => void;
}

const EditPagePin: React.FC<ReqPin> = (props) => {
    const [pinState, setpinState] = useState(0);
    props.Pin.State.value = pinState;
    useEffect(() => {
        props.setupsInput((prev) => prev + 1);
    }, []);
    useEffect(() => {
        props.handleChangeInputPin();
    }, [pinState]);
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
                    onClick={() => {
                        setpinState((prev) => {
                            const res = prev ? 0 : 1;
                            return res;
                        });
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
                    NameLeft={false}
                    style={{
                        transform: "translateX(-75%)",
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

export default EditPagePin;
