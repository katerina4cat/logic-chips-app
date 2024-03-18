import cl from "./RPin.module.scss";
import { Pin } from "../../Simulating/Pin";
import { getColorWithState } from "../../common/Colors";
import { ViewModel, view } from "@yoskutik/react-vvm";
import { action, makeObservable, observable } from "mobx";
import { useRef } from "react";
import { Pos } from "../../common/Pos";

interface RequiredProps {
    Pin: Pin;
    interactPin?: (pin: Pin, ctrlKey: boolean) => void;
    drawTitle?: boolean;
    isPreview?: boolean;
}

export class PinViewModel extends ViewModel<undefined, RequiredProps> {
    @observable pin: Pin = this.viewProps.Pin;
    ref?: React.RefObject<SVGCircleElement>;
    constructor() {
        super();
        makeObservable(this);
    }
    @action protected onViewMounted(): void {
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
    }
}

export const ViewPin = view(PinViewModel)<RequiredProps>(({ viewModel }) => {
    viewModel.ref = useRef<SVGCircleElement>(null);
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
                console.log(viewModel.pin);
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
        </circle>
    );
});
