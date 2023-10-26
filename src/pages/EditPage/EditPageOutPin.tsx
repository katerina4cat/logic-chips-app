import { Pin } from "../../common/Pin";
import cl from "./EditPageOutPin.module.scss";
import Draggable from "react-draggable";
import { Colors } from "../../common/Wire";
import PinInteraction from "./PinInteraction";

interface ReqOutPin {
    Pin: Pin;
}

const EditPageOutPin: React.FC<ReqOutPin> = (props) => {
    console.log(props.Pin.getColorWithState());
    return (
        <Draggable
            defaultPosition={{
                x: 0,
                y: props.Pin.PositionY * window.innerHeight,
            }}
            axis="y"
        >
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
                    style={{ transform: "translateX(75%)" }}
                />
            </div>
        </Draggable>
    );
};

export default EditPageOutPin;
