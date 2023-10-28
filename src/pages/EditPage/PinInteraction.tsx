import { RefObject, useEffect, useRef } from "react";
import { Pin } from "../../common/Pin";
import { Colors } from "../../common/Wire";
import cl from "./PinInteraction.module.scss";

interface PinReq extends React.HTMLAttributes<HTMLDivElement> {
    pin: Pin;
    NameLeft?: boolean;
    DragListeners: RefObject<{ [key: number]: () => void }>;
}

const PinInteraction: React.FC<PinReq> = (props) => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (props.DragListeners.current)
            props.DragListeners.current[props.pin.ID] = () => {
                if (ref.current) {
                    const rect = ref.current.getBoundingClientRect();
                    props.pin.Position.X = rect.x + rect.width / 2;
                    props.pin.Position.Y = rect.y + rect.height / 2;
                    props.pin.Wires.map((wire) => {
                        wire.WireGraphObject?.current?.setAttribute(
                            "d",
                            wire.generateStringPoints()
                        );
                    });
                }
            };
    }, []);
    return (
        <div
            {...props}
            ref={ref}
            className={cl.PinInteraction}
            style={{
                ...props.style,
                position: "relative",
                aspectRatio: 1,
                backgroundColor:
                    props.pin.State.value == -1
                        ? Colors.floating.color
                        : props.pin.getColorWithState(),
                border: "0.05em solid " + Colors.floating.color,
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
