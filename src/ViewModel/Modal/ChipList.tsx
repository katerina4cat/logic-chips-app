import cl from "./ChipList.module.scss";
import { EditCircleAdding } from "../CircleAdding/EditCircleAdding";
import { ViewModel, view } from "@yoskutik/react-vvm";
import { EditPageViewModel } from "../EditPage";
import { action, makeObservable, observable } from "mobx";

class ChipListViewModel extends ViewModel<EditPageViewModel> {
    @observable currentSelect?: string;
    @observable circleID = 0;
    constructor() {
        super();
        makeObservable(this);
    }
    @action handleKeyDown = (e: KeyboardEvent) => {
        for (let i = 0; i < 9; i++)
            if (
                (!e.altKey || !e.ctrlKey || !e.shiftKey) &&
                e.key == (i + 1).toString()
            ) {
                this.circleID = i;
            }
    };

    @action setSelection = (chipName: string) => {
        this.currentSelect = chipName;
    };
    @action refreshCircle = () => {
        this.circleID = 0;
    };
}

export const ChipList = view(ChipListViewModel)(({ viewModel }) => {
    if (!viewModel.parent.showLibrary) {
        window.removeEventListener("keydown", viewModel.handleKeyDown);
        viewModel.refreshCircle();
    } else window.addEventListener("keydown", viewModel.handleKeyDown);

    return (
        <div
            onClick={(e) => {
                viewModel.parent.setLibrary(false), e.stopPropagation();
            }}
            style={{ display: viewModel.parent.showLibrary ? "flex" : "none" }}
            className={cl.ChipListEditor}
        >
            <div className={cl.ChipList} onClick={(e) => e.stopPropagation()}>
                <div className={cl.Title}>Chip library</div>
                <div className={cl.List} onClick={(e) => e.stopPropagation()}>
                    {viewModel.parent.saveManager.Chips.map((chip) => (
                        <div
                            className={cl.LibraryItem}
                            onClick={() => viewModel.setSelection(chip.name)}
                            style={{
                                backgroundColor:
                                    chip.name == viewModel.currentSelect
                                        ? "rgba(84,174,37,0.25)"
                                        : "rgba(255,255,255,0.25)",
                            }}
                            draggable
                            onDragStart={(e) =>
                                e.dataTransfer.setData("chip", chip.name)
                            }
                        >
                            {chip.name}
                        </div>
                    ))}
                </div>
                <div className={cl.ActionsField}>
                    <button
                        className={cl.Button}
                        disabled={
                            !viewModel.currentSelect ||
                            /^(AND|NOT|TRI-STATE BUFFER|BUS)$/.test(
                                viewModel.currentSelect
                            ) ||
                            viewModel.parent.currentChip.name ==
                                viewModel.currentSelect
                        }
                        onClick={() => {
                            if (viewModel.currentSelect) {
                                viewModel.parent.loadChip(
                                    viewModel.currentSelect
                                );
                            }
                        }}
                    >
                        Изменить
                    </button>
                    <button
                        className={cl.Button}
                        disabled={
                            !viewModel.currentSelect ||
                            !viewModel.parent.saveManager.canAddedChipToCurrentEdit(
                                viewModel.parent.currentChip.name,
                                viewModel.currentSelect
                            )
                        }
                        onClick={() => {
                            if (viewModel.currentSelect) {
                                viewModel.parent.setLibrary(false);
                                viewModel.parent.setAddingChip(
                                    viewModel.currentSelect
                                );
                            }
                        }}
                    >
                        Добавить
                    </button>
                    <button
                        className={cl.Button}
                        disabled={
                            !viewModel.currentSelect ||
                            /^(AND|NOT|TRI-STATE BUFFER|BUS)$/.test(
                                viewModel.currentSelect
                            )
                        }
                        onClick={() => {
                            viewModel.parent.saveManager.removeChip(
                                viewModel.currentSelect || ""
                            );
                        }}
                    >
                        Удалить
                    </button>
                    <button
                        className={cl.Button}
                        onClick={viewModel.parent.newChip}
                    >
                        Новый чип
                    </button>
                </div>
            </div>
            <EditCircleAdding
                enabled={viewModel.parent.showLibrary}
                setEnabled={() => {}}
                saveManager={viewModel.parent.saveManager}
                circleID={viewModel.circleID}
            />
        </div>
    );
});
