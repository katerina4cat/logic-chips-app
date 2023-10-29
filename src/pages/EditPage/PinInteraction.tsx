import { RefObject, useEffect, useRef } from "react";
import { Pin } from "../../common/Pin";
import { Colors } from "../../common/Wire";
import cl from "./PinInteraction.module.scss";
import Input from "./Input";
import useOutside from "../../hooks/useOutside";

interface PinReq extends React.HTMLAttributes<HTMLDivElement> {
    pin: Pin;
    NameLeft?: boolean;
    DragListeners: RefObject<{ [key: number]: () => void }>;
    VisiblePinTitles?: boolean;
    updateAll?: () => void;
}

const PinInteraction: React.FC<PinReq> = (props) => {
    const ref = useRef<HTMLDivElement>(null);
    const [refColor, visible, setvisible] = useOutside(false);
    useEffect(() => {
        if (props.DragListeners.current)
            props.DragListeners.current[props.pin.ID] = () => {
                if (ref.current) {
                    const rect = ref.current.getBoundingClientRect();
                    props.pin.Position.X = rect.x - 36;
                    props.pin.Position.Y = rect.y + 9 + window.scrollY;
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
            onContextMenu={(e) => {
                setvisible(true);
                e.preventDefault();
            }}
        >
            <div
                className={cl.Colors}
                ref={refColor}
                style={{
                    display: visible ? "flex" : "none",
                    transform: `translateX(${
                        props.NameLeft ? "-100%" : "15%"
                    })`,
                    borderTopRightRadius: props.NameLeft ? 0 : 20,
                    borderTopLeftRadius: props.NameLeft ? 20 : 0,
                }}
            >
                {Object.keys(Colors).map((color) => {
                    if (!Colors[color].title) return undefined;
                    const clr = Colors[color];
                    return (
                        <div
                            className={cl.ColorElement}
                            onClick={() => {
                                setvisible(false);
                                props.pin.Color = clr;
                                props.pin.Wires.forEach((wire) => {
                                    wire.Color = clr;
                                    wire.Target.Color = clr;
                                    wire.Source.Color = clr;
                                });
                                if (props.updateAll) props.updateAll();
                            }}
                        >
                            <div
                                className={cl.ColorPinSample}
                                style={{
                                    background: `linear-gradient(135deg, ${clr.color}FF 0 50%, color-mix(in srgb,${clr.color} 25%, #000) 50% 100%)`,
                                }}
                            />
                            {clr.title}
                        </div>
                    );
                })}
            </div>

            <div
                style={{
                    position: "absolute",
                    display:
                        props.VisiblePinTitles === undefined ||
                        props.VisiblePinTitles
                            ? "block"
                            : "none",
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
                    <Input pin={props.pin} className={cl.PinWithChangeTitle} />
                )}
            </div>
        </div>
    );
};

export default PinInteraction;
