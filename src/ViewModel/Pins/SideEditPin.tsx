import cl from "./SideEditPin.module.scss";
import { getColorWithState } from "../../common/Colors";
import { Pin } from "../../Simulating/Pin";
import { State } from "../../common/State";
import { ViewPin } from "./RPin";
import OutsideClickHandler from "react-outside-click-handler";
import { ViewModel, view } from "@yoskutik/react-vvm";
import { action, makeObservable, observable } from "mobx";
import { SidePinFieldViewModel } from "../SidePinField";

interface RequiredProps {
    Pin: Pin;
    style?: React.CSSProperties;
    isPreview?: boolean;
}

export class SidePinViewModel extends ViewModel<
    SidePinFieldViewModel,
    RequiredProps
> {
    @observable pin: Pin = this.viewProps.Pin;
    @observable deletingOpen = false;
    private grabbing = false;
    private delta = 0;
    constructor() {
        super();
        makeObservable(this);
    }
    @action changeState = () => {
        this.pin.states[0].value =
            this.pin.states[0].value == State.States.LOW
                ? State.States.HIGH
                : State.States.LOW;
    };
    @action openDeleting = (value: boolean) => (this.deletingOpen = value);
    startGrabbing = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        this.grabbing = true;
        this.delta = this.pin.position.y - e.pageY;
        window.addEventListener("mouseup", this.stopGrabbing);
        window.addEventListener("mousemove", this.processGrabbing);
    };
    @action processGrabbing = (e: MouseEvent) => {
        if (this.grabbing) this.pin.deltaPos.y = e.pageY + this.delta;
    };
    stopGrabbing = () => {
        this.grabbing = false;
        window.removeEventListener("mouseup", this.stopGrabbing);
        window.removeEventListener("mousemove", this.processGrabbing);
    };
}

export const SideEditPin = view(SidePinViewModel)<RequiredProps>(
    ({ viewModel }) => {
        return (
            <div
                className={cl.SideEditPin}
                style={{
                    ...{
                        left: viewModel.pin.isInput ? "0.75em" : "",
                        right: viewModel.pin.isInput ? "" : "0.75em",
                        top: viewModel.pin.position.y,
                        flexDirection: viewModel.pin.isInput
                            ? "row"
                            : "row-reverse",
                    },
                    ...viewModel.viewProps.style,
                }}
            >
                <div
                    className={cl.MoveBar}
                    onMouseDown={
                        viewModel.viewProps.isPreview
                            ? undefined
                            : viewModel.startGrabbing
                    }
                    onContextMenu={(e) => {
                        e.preventDefault();
                        viewModel.openDeleting(true);
                    }}
                >
                    <OutsideClickHandler
                        onOutsideClick={() => {
                            if (viewModel.deletingOpen)
                                viewModel.openDeleting(true);
                        }}
                    >
                        <div
                            className={cl.DeletingConfirm}
                            style={{
                                display: viewModel.deletingOpen
                                    ? "block"
                                    : "none",
                                marginLeft: viewModel.pin.isInput
                                    ? "3em"
                                    : "unset",
                                marginRight: viewModel.pin.isInput
                                    ? "unset"
                                    : "3em",
                                transform: viewModel.pin.isInput
                                    ? "unset"
                                    : "translateX(-125%)",
                            }}
                            onMouseDown={(e) => e.stopPropagation()}
                        >
                            Пин: {viewModel.pin.name}
                            <br />
                            <button
                                onClick={() => {
                                    viewModel.parent.parent.removePin(
                                        viewModel.pin
                                    );
                                }}
                            >
                                Удалить
                            </button>
                        </div>
                    </OutsideClickHandler>
                </div>
                <circle
                    className={cl.SwitchButton}
                    style={{
                        backgroundColor: getColorWithState(
                            viewModel.pin.totalState.value,
                            viewModel.pin.color
                        ),
                        marginLeft: viewModel.pin.isInput ? "0.6em" : "",
                        marginRight: viewModel.pin.isInput ? "" : "0.6em",
                        cursor: viewModel.viewProps.isPreview
                            ? "default"
                            : "pointer",
                        pointerEvents: viewModel.viewProps.isPreview
                            ? "none"
                            : "auto",
                    }}
                    onClick={viewModel.changeState}
                />
                <div className={cl.DecorativeWire} />
                <ViewPin
                    Pin={viewModel.pin}
                    interactPin={
                        viewModel.parent.parent.wireIncompleteViewModel
                            ?.clickToPin
                    }
                />
                {viewModel.viewProps.isPreview ? undefined : (
                    <input
                        className={cl.sidePinTitle}
                        onChange={(e) => {
                            viewModel.pin.name = e.target.value;
                        }}
                        value={viewModel.pin.name}
                        style={{
                            display: viewModel.parent.parent.showAllPinTitles
                                ? "block"
                                : "none",
                        }}
                    />
                )}
            </div>
        );
    }
);
