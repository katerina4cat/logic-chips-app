import cl from "./EightSegmentChip.module.scss";
import { Chip } from "../../../../Simulating/Chip";
import { ViewPin } from "../Pins/RPin";
import { Pos } from "../../../../common/Pos";
import { ViewModel, view } from "@yoskutik/react-vvm";
import { action, makeObservable, observable } from "mobx";
import { EditPageViewModel } from "../../EditPage";
import { getColorWithState } from "../../../../common/Colors";

interface RequiredProps {
    chip: Chip;
    isPreview?: boolean;
}

enum SegmentsPins {
    A = 0,
    B = 1,
    C = 2,
    D = 3,
    E = 4,
    F = 5,
    G = 6,
    DP = 7,
}

class EightSegmentChipViewModel extends ViewModel<
    EditPageViewModel,
    RequiredProps
> {
    @observable chip: Chip;
    @observable hovered = [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ];
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
    @action hoverPin = (index: number, value: boolean = false) =>
        (this.hovered[index] = value);
}

export const EightSegmentChip = view(EightSegmentChipViewModel)<RequiredProps>(
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
                    if (!viewModel.chip.isBase)
                        viewModel.parent.editorObjectsManager.viewInChip(
                            viewModel.chip
                        );
                    viewModel.clearSelection();
                }}
                className={cl.EightSegmentChip}
                onMouseDown={
                    viewModel.viewProps.isPreview
                        ? undefined
                        : (e) => viewModel.clickedToChip(e, viewModel.chip)
                }
            >
                <div className={cl.PinList}>
                    {viewModel.chip.input.map((pin, index) => (
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
                            onHover={(value) => {
                                viewModel.hoverPin(index, value);
                            }}
                        />
                    ))}
                </div>
                <div className={cl.ChipDisplay}>
                    <div>
                        <div
                            className={cl.HorisontalSegment}
                            style={{
                                backgroundColor: getColorWithState(
                                    viewModel.chip.input[SegmentsPins.A]
                                        .totalState,
                                    viewModel.chip.input[SegmentsPins.A].color
                                ),
                                opacity: viewModel.hovered[SegmentsPins.A]
                                    ? 0.2
                                    : 1,
                            }}
                        />
                        <div className={cl.RowSegments}>
                            <div
                                className={cl.VerticalSegment}
                                style={{
                                    backgroundColor: getColorWithState(
                                        viewModel.chip.input[SegmentsPins.F]
                                            .totalState,
                                        viewModel.chip.input[SegmentsPins.F]
                                            .color
                                    ),
                                    opacity: viewModel.hovered[SegmentsPins.F]
                                        ? 0.2
                                        : 1,
                                }}
                            />
                            <div
                                className={cl.VerticalSegment}
                                style={{
                                    backgroundColor: getColorWithState(
                                        viewModel.chip.input[SegmentsPins.B]
                                            .totalState,
                                        viewModel.chip.input[SegmentsPins.B]
                                            .color
                                    ),
                                    opacity: viewModel.hovered[SegmentsPins.B]
                                        ? 0.2
                                        : 1,
                                }}
                            />
                        </div>
                        <div
                            className={cl.HorisontalSegment}
                            style={{
                                backgroundColor: getColorWithState(
                                    viewModel.chip.input[SegmentsPins.G]
                                        .totalState,
                                    viewModel.chip.input[SegmentsPins.G].color
                                ),
                                opacity: viewModel.hovered[SegmentsPins.G]
                                    ? 0.2
                                    : 1,
                            }}
                        />
                        <div className={cl.RowSegments}>
                            <div
                                className={cl.VerticalSegment}
                                style={{
                                    backgroundColor: getColorWithState(
                                        viewModel.chip.input[SegmentsPins.E]
                                            .totalState,
                                        viewModel.chip.input[SegmentsPins.E]
                                            .color
                                    ),
                                    opacity: viewModel.hovered[SegmentsPins.E]
                                        ? 0.2
                                        : 1,
                                }}
                            />
                            <div
                                className={cl.VerticalSegment}
                                style={{
                                    backgroundColor: getColorWithState(
                                        viewModel.chip.input[SegmentsPins.C]
                                            .totalState,
                                        viewModel.chip.input[SegmentsPins.C]
                                            .color
                                    ),
                                    opacity: viewModel.hovered[SegmentsPins.C]
                                        ? 0.2
                                        : 1,
                                }}
                            />
                        </div>
                        <div
                            className={cl.HorisontalSegment}
                            style={{
                                backgroundColor: getColorWithState(
                                    viewModel.chip.input[SegmentsPins.D]
                                        .totalState,
                                    viewModel.chip.input[SegmentsPins.D].color
                                ),
                                opacity: viewModel.hovered[SegmentsPins.D]
                                    ? 0.2
                                    : 1,
                            }}
                        />
                    </div>
                    <div
                        className={cl.Dot}
                        style={{
                            backgroundColor: getColorWithState(
                                viewModel.chip.input[SegmentsPins.DP]
                                    .totalState,
                                viewModel.chip.input[SegmentsPins.DP].color
                            ),
                            opacity: viewModel.hovered[SegmentsPins.DP]
                                ? 0.2
                                : 1,
                        }}
                    />
                </div>
            </div>
        );
    }
);
