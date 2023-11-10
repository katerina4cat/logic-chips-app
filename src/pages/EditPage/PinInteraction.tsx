import { useCallback, useEffect, useRef } from "react";
import { Pin } from "../../common/Simulating/Pin";
import { Colors, Wire } from "../../common/Simulating/Wire";
import { WireIncomplete } from "../../common/Simulating/WireIncomplete";
import cl from "./PinInteraction.module.scss";
import Input from "./Input";
import useOutside from "../../hooks/useOutside";
import { debug } from "../../App";
import { sideWidth } from "./CurrentChip";

interface PinReq extends React.HTMLAttributes<HTMLDivElement> {
    pin: Pin;
    NameLeft?: boolean;
    DragListeners: { [key: number]: () => void };
    VisiblePinTitles?: boolean;
    newWire: WireIncomplete;
    Wires: Wire[];
    updateAll?: () => void;
}

const PinInteraction: React.FC<PinReq> = (props) => {
    const ref = useRef<HTMLDivElement>(null);
    const handleStartWire = useCallback((e: any) => {
        if (e.button != 0) return;
        const handleMove = (e: MouseEvent) => {
            props.newWire.LastPos = {
                X: e.pageX - sideWidth,
                Y: e.pageY,
            };
        };
        const handleClick = (e: MouseEvent) => {
            props.newWire.WirePoints = [
                ...props.newWire.WirePoints,
                {
                    X: e.pageX - sideWidth,
                    Y: e.pageY,
                },
            ];

            if (props.updateAll) props.updateAll();
        };
        const handleKeydown = (e: globalThis.KeyboardEvent) => {
            if (e.key == "Escape") {
                window.removeEventListener("keydown", handleKeydown);
                window.removeEventListener("click", handleClick);
                window.removeEventListener("mousemove", handleMove);
                props.newWire.WireGraphObject.current?.setAttribute("d", "");
                props.newWire.Source = undefined;
            }
        };
        if (props.newWire.Source != undefined) {
            let pinFrom: Pin | undefined = undefined;
            let pinTarget: Pin | undefined = undefined;

            const settible = (pinInCurrentEdit: boolean, pin: Pin) => {
                if (pinInCurrentEdit)
                    if (pin.IsInput) {
                        pinFrom = pin;
                    } else {
                        pinTarget = pin;
                    }
                else if (pin.IsInput) {
                    pinTarget = pin;
                } else {
                    pinFrom = pin;
                }
            };

            const newWirePinEditable = props.newWire.Source.Chip.ID == 0;
            const currPinEditable = props.pin.Chip.ID == 0;
            settible(newWirePinEditable, props.newWire.Source);
            settible(currPinEditable, props.pin);

            if (pinFrom != undefined && pinTarget != undefined) {
                const newWire = new Wire(
                    pinFrom,
                    pinTarget,
                    props.newWire.WirePoints,
                    undefined,
                    false
                );
                props.Wires.push(newWire);
                props.newWire.Source.Wires.push(newWire);
                props.pin.Wires.push(newWire);
            }

            window.removeEventListener("keydown", handleKeydown);
            window.removeEventListener("click", handleClick);
            window.removeEventListener("mousemove", handleMove);
            props.newWire.WireGraphObject.current?.setAttribute("d", "");
            props.newWire.Source = undefined;
        } else {
            props.newWire.Source = props.pin;
            window.addEventListener("keydown", handleKeydown);
            window.addEventListener("click", handleClick);
            window.addEventListener("mousemove", handleMove);
        }
    }, []);
    const [refColor, visible, setvisible] = useOutside(false);

    useEffect(() => {
        props.DragListeners[props.pin.ID] = () => {
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
            onClick={handleStartWire}
            onMouseDown={(e) => {
                e.stopPropagation();
                if (debug)
                    if (e.button == 2) {
                        props.pin.State.drawListeners();
                        e.preventDefault();
                    }
            }}
            onContextMenu={(e) => {
                setvisible(true);
                e.preventDefault();
                e.stopPropagation();
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
                            onClick={(e) => {
                                e.stopPropagation();
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
