import cl from "./DefaultChip.module.scss";
import { Chip } from "../../../../Simulating/Chip";
import { ViewPin } from "../Pins/RPin";
import { Pos } from "../../../../common/Pos";
import { ViewModel, view } from "@yoskutik/react-vvm";
import { action, makeObservable, observable } from "mobx";
import { EditPageViewModel } from "../../EditPage";

interface RequiredProps {
    chip: Chip;
    isPreview?: boolean;
}

class DefaultChipViewModel extends ViewModel<EditPageViewModel, RequiredProps> {
    @observable chip: Chip;
    editChip: Chip = new Chip(undefined, -1);

    mouseDownTime: number = 0;
    startClickTime: number = 0;
    startPosition: Pos = new Pos();
    startClickPos: Pos = new Pos();
    chipMoved: Pos = new Pos();
    deltaMove = new Pos();

    constructor() {
        super();
        this.chip = this.viewProps.chip;
        if (!this.viewProps.isPreview)
            this.editChip = this.parent.editorObjectsManager.currentChip;
        makeObservable(this);
    }

    clickedToChip = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
        chip: Chip
    ) => {
        if (e.button !== 0) return;
        // Если отображается редактируемый чип (Не внутренности)
        if (this.editChip.id === 0)
            if (e.altKey) {
                this.parent.editorObjectsManager.setAddingChip(chip.name);
                return;
            }
        this.startClickTime = Date.now();
        this.startClickPos = new Pos(e.pageX, e.pageY);
        window.addEventListener("mouseup", this.stopClickToChip);
        if (chip.selected) window.addEventListener("mousemove", this.chipMove);
    };

    @action stopClickToChip = (e: MouseEvent) => {
        window.removeEventListener("mouseup", this.stopClickToChip);
        window.removeEventListener("mousemove", this.chipMove);
        if (Date.now() - this.startClickTime < 100) {
            if (e.ctrlKey) this.selectingChip(this.chip);
            else this.selectChip(this.chip);
            this.editChip.subChips
                .filter((chip) => chip.selected)
                .forEach((chip) => chip.position.rem(this.deltaMove));
        }
        this.chipMoved = new Pos();
        this.deltaMove = new Pos();
    };
    @action chipMove = (e: MouseEvent) => {
        this.deltaMove = new Pos(
            e.pageX - this.startClickPos.x,
            e.pageY - this.startClickPos.y
        );
        this.editChip.subChips
            .filter((chip) => chip.selected)
            .forEach((chip) => {
                chip.position.add(this.deltaMove.removing(this.chipMoved));
            });
        this.chipMoved = this.deltaMove.copy();
    };
    @action clearSelection = () => {
        this.editChip.subChips.forEach((subChip) => (subChip.selected = false));
    };
    @action selectChip = (chip: Chip) => {
        this.clearSelection();
        chip.selected = true;
    };
    @action selectingChip = (chip: Chip) => (chip.selected = !chip.selected);
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
                    viewModel.parent.editorObjectsManager.viewInChip(
                        viewModel.chip
                    );
                    viewModel.clearSelection();
                }}
                className={cl.DefaultChip}
                onMouseDown={
                    viewModel.viewProps.isPreview
                        ? undefined
                        : (e) => viewModel.clickedToChip(e, viewModel.chip)
                }
            >
                <div className={cl.PinList}>
                    {viewModel.chip.input.map((pin) => (
                        <ViewPin
                            key={pin.id}
                            Pin={pin}
                            interactPin={
                                viewModel.viewProps.isPreview
                                    ? () => {}
                                    : viewModel.parent.editorObjectsManager
                                          .wireIncompleteViewModel?.clickToPin
                            }
                            drawTitle={
                                viewModel.viewProps.isPreview
                                    ? false
                                    : viewModel.parent.statesManager
                                          .showChipPinTitles
                            }
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
                                viewModel.viewProps.isPreview
                                    ? () => {}
                                    : viewModel.parent.editorObjectsManager
                                          .wireIncompleteViewModel?.clickToPin
                            }
                            drawTitle={
                                viewModel.viewProps.isPreview
                                    ? false
                                    : viewModel.parent.statesManager
                                          .showChipPinTitles
                            }
                            isPreview={viewModel.viewProps.isPreview}
                        />
                    ))}
                </div>
            </div>
        );
    }
);
