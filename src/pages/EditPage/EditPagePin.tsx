import { useEffect, useState } from "react";
import { Pin } from "../../common/Pin";
import cl from "./EditPagePin.module.scss";
import Draggable from "react-draggable";
import { Colors } from "../../common/Wire";
import PinInteraction from "./PinInteraction";

interface ReqPin {
    Pin: Pin;
    handleChangeInputPin: () => void;
    setupsInput: React.Dispatch<React.SetStateAction<number>>;
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
    return (
        <Draggable
            defaultPosition={{
                x: 0,
                y: props.Pin.PositionY,
            }}
            axis="y"
        >
            <div style={{ position: "absolute" }}>
                <div className={cl.EditPagePin}>
                    <div className={cl.PinChange} />
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
                        style={{ transform: "translateX(-75%)" }}
                    />
                </div>
            </div>
        </Draggable>
    );
};

export default EditPagePin;
