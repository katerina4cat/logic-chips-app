import cl from "./DefaultChip.module.scss";
import { Chip } from "../../../Simulating/Chip";
import { ViewPin } from "../Pins/RPin";
import { Pos } from "../../../common/Pos";
import { ViewModel, view } from "@yoskutik/react-vvm";
import { makeObservable, observable } from "mobx";
import { EditPageViewModel } from "../EditPage";

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
                onContextMenu={(e) => {
                    e.preventDefault();
                    viewModel.parent.viewInChip(viewModel.chip);
                    viewModel.parent.clearSelection();
                }}
                className={cl.DefaultChip}
                onMouseDown={
                    viewModel.viewProps.isPreview
                        ? undefined
                        : (e) => {
                              if (e.button === 0)
                                  viewModel.parent.clickedToChip(
                                      e,
                                      viewModel.chip
                                  );
                          }
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
