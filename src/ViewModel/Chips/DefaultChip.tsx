import cl from "./DefaultChip.module.scss";
import { Chip } from "../../Simulating/Chip";
import { ViewPin } from "../Pins/RPin";
import { Pos } from "../../common/Pos";
import { ViewModel, view } from "@yoskutik/react-vvm";
import { action, makeObservable, observable } from "mobx";
import { EditPageViewModel } from "../EditPage";
import { State } from "../../common/State";

interface RequiredProps {
    chip: Chip;
    isPreview?: boolean;
}

class DefaultChipViewModel extends ViewModel<EditPageViewModel, RequiredProps> {
    @observable chip: Chip;

    startPosition: Pos = new Pos();
    mouseDownTime: number = 0;

    constructor() {
        super();
        this.chip = this.viewProps.chip;
        makeObservable(this);
    }

    @action protected onViewMounted(): void {
        this.chip.input.forEach((pin) =>
            pin.addState({ id: -1234, value: State.States.UNDEFINED })
        );
    }
}

export const DefaultChip = view(DefaultChipViewModel)<RequiredProps>(
    ({ viewModel }) => {
        if (viewModel.chip == undefined) return <></>;
        return (
            <div
                style={{
                    backgroundColor: viewModel.chip.color,
                    position: viewModel.viewProps.isPreview
                        ? "relative"
                        : "absolute",
                    cursor: viewModel.viewProps.isPreview
                        ? "default"
                        : "pointer",
                    left: viewModel.chip.position.x,
                    top: viewModel.chip.position.y,
                    boxShadow: viewModel.chip.selected
                        ? `0px 0px 3px 3px color-mix(in srgb, white 20%, ${viewModel.chip.color})`
                        : "none",
                }}
                className={cl.DefaultChip}
                onMouseDown={
                    viewModel.viewProps.isPreview
                        ? undefined
                        : (e) =>
                              viewModel.parent.clickedToChip(e, viewModel.chip)
                }
            >
                <div className={cl.PinList}>
                    {viewModel.chip.input.map((pin) => (
                        <ViewPin
                            key={pin.id}
                            Pin={pin}
                            interactPin={
                                viewModel.parent.wireIncompleteViewModel
                                    ?.clickToPin
                            }
                            drawTitle={viewModel.parent.showChipPinTitles}
                            isPreview={viewModel.viewProps.isPreview}
                        />
                    ))}
                </div>
                <div className={cl.ChipName}>{viewModel.chip.name}</div>
                <div className={cl.PinList}>
                    {viewModel.chip.output.map((pin) => (
                        <ViewPin
                            key={pin.id}
                            Pin={pin}
                            interactPin={
                                viewModel.parent.wireIncompleteViewModel
                                    ?.clickToPin
                            }
                            drawTitle={viewModel.parent.showChipPinTitles}
                            isPreview={viewModel.viewProps.isPreview}
                        />
                    ))}
                </div>
            </div>
        );
    }
);
