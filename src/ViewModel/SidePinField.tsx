import cl from "./SidePinField.module.scss";
import { Pin } from "../Simulating/Pin";
import { SideEditPin } from "./Pins/SideEditPin";
import { ViewModel, view } from "@yoskutik/react-vvm";
import { EditPageViewModel } from "./EditPage";
import { action, makeObservable, observable } from "mobx";

interface RequiredProps {
    Pins: Pin[];
    isInput?: boolean;
}

export class SidePinFieldViewModel extends ViewModel<
    EditPageViewModel,
    RequiredProps
> {
    @observable hiden = true;
    @observable previewPin = new Pin(
        this.parent.currentChip,
        !!this.viewProps.isInput,
        -1,
        "",
        0
    );
    constructor() {
        super();
        makeObservable(this);
    }

    protected onViewUnmounted(): void {
        document.removeEventListener("mousemove", this.handleMouseMove);
    }

    @action setHiden = (value: boolean) => (this.hiden = value);
    @action handleMouseMove = (e: MouseEvent) => {
        this.previewPin.position.y = e.pageY;
    };

    @action handleClickAddPin = () => {
        this.parent.addPin(
            new Pin(
                this.parent.currentChip,
                !!this.viewProps.isInput,
                Date.now(),
                "Pin",
                this.previewPin.position.y,
                this.viewProps.isInput
            )
        );
    };
}

export const SidePinField = view(SidePinFieldViewModel)<RequiredProps>(
    ({ viewModel }) => {
        return (
            <div className={cl.SidePinField}>
                <div
                    className={cl.SideAddingField}
                    style={{
                        marginLeft: viewModel.viewProps.isInput ? "0" : "auto",
                    }}
                    onMouseOver={() => {
                        document.addEventListener(
                            "mousemove",
                            viewModel.handleMouseMove
                        );
                        viewModel.setHiden(false);
                    }}
                    onMouseOut={() => {
                        document.removeEventListener(
                            "mousemove",
                            viewModel.handleMouseMove
                        );
                        viewModel.setHiden(true);
                    }}
                    onClick={viewModel.handleClickAddPin}
                />
                {viewModel.viewProps.Pins.map((pin) => (
                    <SideEditPin key={pin.id} Pin={pin} />
                ))}
                <SideEditPin
                    style={{
                        display: viewModel.hiden ? "none" : "flex",
                    }}
                    Pin={viewModel.previewPin}
                    isPreview
                />
            </div>
        );
    }
);
