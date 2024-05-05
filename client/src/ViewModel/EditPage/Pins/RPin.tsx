import cl from "./RPin.module.scss";
import { Pin } from "../../../Simulating/Pin";
import { Color, Colors } from "@shared/models/common/Colors";
import { ViewModel, view } from "@yoskutik/react-vvm";
import { action, makeObservable, observable } from "mobx";
import { createRef } from "react";
import { Pos } from "../../../common/Pos";
import OutsideClickHandler from "react-outside-click-handler";
import { States } from "../../../common/State";
import { getColorWithState } from "../../../common/Colors";

interface RequiredProps {
    Pin: Pin;
    interactPin?: (pin: Pin, ctrlKey: boolean) => void;
    drawTitle?: boolean;
    isPreview?: boolean;
    isSide?: boolean;
}

export class PinViewModel extends ViewModel<undefined, RequiredProps> {
    @observable pin: Pin = this.viewProps.Pin;
    @observable contextMenu = false;
    ref = createRef<SVGCircleElement>();
    constructor() {
        super();
        makeObservable(this);
    }
    @action protected onResize = () => {
        if (!this.ref) return;
        const rect = this.ref.current?.getBoundingClientRect();
        if (rect) {
            if (this.pin.chip.id === 0) {
                this.pin.deltaPos.x = rect.left + rect.width / 2;
            } else {
                this.pin.deltaPos = new Pos(
                    rect.left + rect.width / 2,
                    rect.top + rect.height / 2
                ).rem(this.pin.chip.position);
            }
        }
    };

    protected onViewUnmounted(): void {
        window.removeEventListener("resize", this.onResize);
    }

    @action protected onViewMounted(): void {
        window.addEventListener("resize", this.onResize);
        this.onResize();
    }
    @action setContextMenu = (value: boolean) => (this.contextMenu = value);
    @action setPinColor = (value: Color) => (this.pin.color = value);
}

export const ViewPin = view(PinViewModel)<RequiredProps>(({ viewModel }) => {
    return (
        <circle
            className={cl.RPin}
            ref={viewModel.ref}
            style={{
                backgroundColor: getColorWithState(
                    viewModel.pin.totalState,
                    viewModel.pin.color
                ),
            }}
            onContextMenu={(e) => {
                e.preventDefault();
                e.stopPropagation();
                viewModel.setContextMenu(true);
            }}
            onMouseDown={
                viewModel.viewProps.isPreview
                    ? undefined
                    : (e) => e.stopPropagation()
            }
            onClick={
                viewModel.viewProps.isPreview
                    ? undefined
                    : (e) => {
                          if (e.button !== 0) return;
                          if (viewModel.viewProps.interactPin)
                              viewModel.viewProps.interactPin(
                                  viewModel.pin,
                                  e.ctrlKey
                              );
                          else
                              console.log("Не инициализирован WireIncomplete!");
                      }
            }
        >
            <div
                className={cl.PinTitle}
                style={{
                    display: viewModel.viewProps.drawTitle ? "block" : "none",
                    left: viewModel.pin.isInput ? "unset" : "1.5em",
                    right: viewModel.pin.isInput ? "1.5em" : "unset",
                }}
            >
                {viewModel.pin.name}
            </div>
            {viewModel.contextMenu && (
                <OutsideClickHandler
                    onOutsideClick={() => viewModel.setContextMenu(false)}
                >
                    <div className={cl.ContextMenu}>
                        {Object.values(Colors)
                            .filter((_, i) => i !== 0)
                            .map((clr) => (
                                <div
                                    className={cl.SelectColorElement}
                                    onClick={(e) => {
                                        viewModel.setContextMenu(false);
                                        viewModel.setPinColor(clr);
                                        e.stopPropagation();
                                    }}
                                >
                                    <div
                                        style={{
                                            backgroundColor: getColorWithState(
                                                States.HIGH,
                                                clr
                                            ),
                                        }}
                                        className={cl.ColorPreview}
                                    />
                                    {clr.title}
                                </div>
                            ))}
                    </div>
                </OutsideClickHandler>
            )}
        </circle>
    );
});
