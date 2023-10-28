import { RefObject, useEffect, useRef } from "react";
import { Pin } from "../../common/Pin";
import { Colors } from "../../common/Wire";
import cl from "./PinInteraction.module.scss";
import Input from "./Input";

interface PinReq extends React.HTMLAttributes<HTMLDivElement> {
    pin: Pin;
    NameLeft?: boolean;
    DragListeners: RefObject<{ [key: number]: () => void }>;
    VisiblePinTitles?: boolean;
}

const PinInteraction: React.FC<PinReq> = (props) => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (props.DragListeners.current)
            props.DragListeners.current[props.pin.ID] = () => {
                if (ref.current) {
                    const rect = ref.current.getBoundingClientRect();
                    props.pin.Position.X = rect.left + rect.width / 2;
                    props.pin.Position.Y = rect.top + rect.height / 2;
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
            {props.VisiblePinTitles === undefined || props.VisiblePinTitles ? (
                <div
                    style={{
                        position: "absolute",
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
                    {props.pin.Chip.ID != 0 ? (
                        <div className={cl.PinTitle}>{props.pin.Name}</div>
                    ) : (
                        <Input
                            pin={props.pin}
                            className={cl.PinWithChangeTitle}
                        />
                    )}
                </div>
            ) : undefined}
        </div>
    );
};

export default PinInteraction;
