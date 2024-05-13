import { action, makeObservable } from "mobx";
import { EditPageViewModel } from "../EditPage";
import { userSettings } from "../../../Managers/UserManager";
import { Chip } from "../../../Simulating/Chip";
import { StatesManager } from "./StatesManager";
import { EditorObjectsManager } from "./EditorObjectsManager";

export class HotKeysManager {
    pageViewModel: EditPageViewModel;
    statesManager: StatesManager;
    editorObjectsManager: EditorObjectsManager;

    constructor(editPageViewModel: EditPageViewModel) {
        this.pageViewModel = editPageViewModel;
        this.statesManager = editPageViewModel.statesManager;
        this.editorObjectsManager = editPageViewModel.editorObjectsManager;
        this.initHotKeys();
        makeObservable(this);
    }

    @action handleKeyDown = (e: KeyboardEvent) => {
        // Проверка находимся ли в основном чипе
        if (this.editorObjectsManager.currentChip.id !== 0) {
            if (userSettings.hotKeys.save.testKey(e)) {
                e.preventDefault();
                userSettings.hotKeys.save.event();
            }
            if (e.key === "Backspace") {
                this.editorObjectsManager.currentChip =
                    this.editorObjectsManager.chipDeep.pop() as Chip;
            }
            return;
        }

        if ((e.target as any).tagName === "INPUT") return;
        // Колесо добавления
        for (let i = 0; i < 9; i++)
            if (e.key == (i + 1).toString() && e.altKey) {
                this.statesManager.openCircle(i);
                return;
            }
        // Проверка каждого хоткея
        for (const hotKeyItem of Object.values(userSettings.hotKeys)) {
            if (hotKeyItem.testKey(e)) {
                e.preventDefault();
                hotKeyItem.event();
                return;
            }
        }
    };

    initHotKeys() {
        // All pins titles
        userSettings.hotKeys.hideAllPin.event =
            this.pageViewModel.statesManager.changeShowAllPinTitles;
        // Chip pins titles
        userSettings.hotKeys.hideChipPins.event =
            this.pageViewModel.statesManager.changeShowChipPinTitles;
        // Library
        userSettings.hotKeys.library.event =
            this.pageViewModel.statesManager.switchLibraryWindow;
        // Save
        userSettings.hotKeys.save.event =
            this.pageViewModel.statesManager.switchSavingWindow;
        // New chip
        userSettings.hotKeys.newChip.event = this.editorObjectsManager.newChip;
        // Increase adding
        userSettings.hotKeys.increaseCount.event =
            this.editorObjectsManager.increaseAdding;
        // Decrease adding
        userSettings.hotKeys.decreaseCount.event =
            this.editorObjectsManager.decreaseAdding;
        // escAction
        userSettings.hotKeys.escAction.event = () => {
            // Если что-то можно отменить
            if (this.pageViewModel.isAnyCancelable)
                return this.pageViewModel.cancelAll();
            // Иначе, открываем меню
            this.statesManager.menuWindow = true;
        };
        // Удаление
        userSettings.hotKeys.remove.event =
            this.editorObjectsManager.removingSelectedChip;
    }
}
