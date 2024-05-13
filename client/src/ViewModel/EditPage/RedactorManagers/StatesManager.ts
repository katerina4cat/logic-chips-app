import { action, makeObservable, observable } from "mobx";
import { EditPageViewModel } from "../EditPage";
import { EditorObjectsManager } from "./EditorObjectsManager";

export class StatesManager {
    pageViewModel: EditPageViewModel;
    editorObjectsManager: EditorObjectsManager;

    @observable showChipPinTitles: boolean =
        (localStorage.getItem("showingPinTitles") || "true") == "true";
    @observable showAllPinTitles: boolean =
        (localStorage.getItem("showingAllPinTitles") || "true") == "true";
    @observable circleAddingWindow: boolean[] = new Array(9).fill(false);
    @observable libraryWindow: boolean = false;
    @observable savingWindow = false;
    @observable menuWindow = false;

    constructor(editPageViewModel: EditPageViewModel) {
        this.pageViewModel = editPageViewModel;
        this.editorObjectsManager = editPageViewModel.editorObjectsManager;
        makeObservable(this);
    }

    get isAnyEnabled() {
        return (
            this.libraryWindow ||
            this.savingWindow ||
            this.menuWindow ||
            this.circleAddingWindow.find((circlShow) => circlShow)
        );
    }

    @action closeAll = () => {
        this.libraryWindow = false;
        this.savingWindow = false;
        this.menuWindow = false;
        this.circleAddingWindow = new Array(9).fill(false);
    };

    @action openCircle = (index: number, value: boolean = true) => {
        this.closeAll();
        this.circleAddingWindow[index] = value;
    };

    @action changeShowAllPinTitles = () => {
        localStorage.setItem(
            "showingAllPinTitles",
            this.showAllPinTitles ? "false" : "true"
        );
        localStorage.setItem(
            "showingPinTitles",
            this.showAllPinTitles ? "false" : "true"
        );
        this.showChipPinTitles = !this.showAllPinTitles;
        this.showAllPinTitles = !this.showAllPinTitles;
    };

    @action changeShowChipPinTitles = () => {
        localStorage.setItem(
            "showingPinTitles",
            this.showChipPinTitles ? "false" : "true"
        );
        this.showChipPinTitles = !this.showChipPinTitles;
    };

    @action switchLibraryWindow = (value?: boolean) => {
        this.closeAll();
        if (value === undefined) this.libraryWindow = !this.libraryWindow;
        else this.libraryWindow = value;
    };

    @action switchSavingWindow = (value?: boolean) => {
        this.closeAll();
        if (value === undefined) this.savingWindow = !this.savingWindow;
        else this.savingWindow = value;
    };
}
