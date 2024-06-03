import cl from "./SaveChip.module.scss";
import { ViewModel, view } from "@yoskutik/react-vvm";
import { action, makeObservable, observable, reaction } from "mobx";
import { Modal } from "../Modal";
import { EditPageViewModel } from "../../EditPage";

interface RequiredProps {}

export class SaveChipViewModel extends ViewModel<
    EditPageViewModel,
    React.HTMLAttributes<HTMLDivElement> & RequiredProps
> {
    @observable chipTitle =
        this.parent.editorObjectsManager.currentChip.name || "";
    @observable chipColor =
        this.parent.editorObjectsManager.currentChip.color.length === 7
            ? this.parent.editorObjectsManager.currentChip.color
            : "#ffffff";

    constructor() {
        super();
        makeObservable(this);
        reaction(
            () => this.parent.editorObjectsManager.currentChip,
            (value) => {
                this.chipTitle = value.name;
                this.chipColor =
                    this.parent.editorObjectsManager.currentChip.color
                        .length === 7
                        ? this.parent.editorObjectsManager.currentChip.color
                        : "#ffffff";
            }
        );
    }

    saveChip = () => {
        if (this.chipTitle != "")
            if (
                this.parent.saveLoder.saveNewChip(
                    this.parent.editorObjectsManager.currentChip,
                    this.chipTitle,
                    this.chipColor
                )
            )
                this.parent.statesManager.switchSavingWindow(false);
            else alert("Не удалось сохранить чип!");
        else alert("Название не задано!");
    };
}

export const SaveChip = view(SaveChipViewModel)<RequiredProps>(
    ({ viewModel }) => {
        return (
            <Modal
                enabled={viewModel.parent.statesManager.savingWindow}
                setEnabled={viewModel.parent.statesManager.switchSavingWindow}
            >
                <div className={cl.SaveChip}>
                    <div style={{ color: "white" }}>Saving chip</div>
                    <input
                        onChange={action(
                            (e) => (viewModel.chipTitle = e.target.value)
                        )}
                        placeholder="Title"
                        value={viewModel.chipTitle}
                        className={cl.CustomInput}
                    />
                    <div className={cl.rowFlex} style={{ margin: 0 }}>
                        <input
                            onChange={action((e) => {
                                if (
                                    /^#([A-Fa-f0-9]){0,6}$/.test(e.target.value)
                                )
                                    viewModel.chipColor = e.target.value;
                            })}
                            value={viewModel.chipColor}
                            className={`${cl.CustomInput} ${cl.ColorInput}`}
                        />
                        <input
                            type="color"
                            className={cl.ColorPicker}
                            value={viewModel.chipColor}
                            onChange={action(
                                (e) => (viewModel.chipColor = e.target.value)
                            )}
                        />
                    </div>
                    <div className={`${cl.Buttons} ${cl.rowFlex}`}>
                        <button
                            onClick={viewModel.saveChip}
                            style={{ marginRight: "1.5em" }}
                            className={cl.Button}
                        >
                            Сохранить
                        </button>
                        <button
                            onClick={() =>
                                viewModel.parent.statesManager.switchSavingWindow(
                                    false
                                )
                            }
                            className={cl.Button}
                        >
                            Отмена
                        </button>
                    </div>
                </div>
            </Modal>
        );
    }
);
