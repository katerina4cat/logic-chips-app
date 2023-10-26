import { Pin } from "../../common/Pin";
import { Colors } from "../../common/Wire";
import cl from "./PinInteraction.module.scss";

interface PinReq extends React.HTMLAttributes<HTMLDivElement> {
    pin: Pin;
    NameLeft?: boolean;
}

const PinInteraction: React.FC<PinReq> = (props) => {
    return (
        <div
            {...props}
            className={cl.PinInteraction}
            style={{
                ...props.style,
                position: "relative",
                aspectRatio: 1,
                backgroundColor:
                    props.pin.getPinStatus() == -1
                        ? Colors.floating.color
                        : props.pin.getPinStatus() == -2
                        ? Colors.error.color
                        : props.pin.getColorWithState(),
            }}
            onMouseDown={(e) => {
                e.stopPropagation();
            }}
            onDrag={(e) => {
                e.stopPropagation();
            }}
            onDragStart={(e) => {
                e.stopPropagation();
            }}
            onDragEnd={(e) => {
                e.stopPropagation();
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: "-50%",
                    fontSize: "1.75vh",
                    right: (
                        props.NameLeft !== undefined
                            ? props.NameLeft
                            : props.pin.IsInput
                    )
                        ? "150%"
                        : "",
                    left: (
                        props.NameLeft !== undefined
                            ? props.NameLeft
                            : props.pin.IsInput
                    )
                        ? ""
                        : "150%",
                }}
            >
                {props.pin.Name}
            </div>
        </div>
    );
};

export default PinInteraction;
