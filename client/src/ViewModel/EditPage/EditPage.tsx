import { RWire } from "./ChipViews/Wires/RWire";
import { RWireIncomplete } from "./ChipViews/Wires/RWireIncomplete";
import { SidePinField } from "./ChipViews/Pins/SidePinField";
import { CircleAdding } from "./Modal/CircleAdding/CircleAdding";
import { SaveChip } from "./Modal/DefaultModals/SaveChip";
import { ChipList } from "./Modal/DefaultModals/ChipList";
import cl from "./EditPage.module.scss";
import { AddingChipsBox } from "./ChipViews/Chips/AddingChipsBox";
import { RBus } from "./ChipViews/Wires/RBus";
import { BusIncomplete } from "./ChipViews/Wires/RBusIncomplete";
import { ViewModel, view } from "@yoskutik/react-vvm";
import { observable, makeObservable, runInAction } from "mobx";
import { SaveManager } from "../../Managers/SaveManager";
import { Pos } from "../../common/Pos";
import { MouseEvent } from "react";
import { StatesManager } from "./RedactorManagers/StatesManager";
import { HotKeysManager } from "./RedactorManagers/HotKeysManager";
import { EditorObjectsManager } from "./RedactorManagers/EditorObjectsManager";
import { lastEditSaves } from "../../common/lastEditSaves";
import { ChipInfo } from "@shared/models/saves/ChipInfo";
import { EscMenu } from "./Modal/DefaultModals/EscMenu";
import { AppViewModel } from "../../App";

export interface RequiredProps {
    saveName: string;
    chipInfo?: ChipInfo;
}

export class EditPageViewModel extends ViewModel<AppViewModel, RequiredProps> {
    saveManager: SaveManager;
    statesManager: StatesManager;
    hotKeysManager: HotKeysManager;
    editorObjectsManager: EditorObjectsManager;

    @observable cursorPosition: Pos = new Pos();

    listeners: { [key: string]: (e: any) => void };

    constructor() {
        super();
        this.saveManager = SaveManager.loadSaveByName(this.viewProps.saveName);
        this.statesManager = new StatesManager(this);
        this.editorObjectsManager = new EditorObjectsManager(this);
        this.hotKeysManager = new HotKeysManager(this);
        this.listeners = {
            resize: this.editorObjectsManager.windowResized,
            mousemove: this.handleMouseMove,
            keydown: this.hotKeysManager.handleKeyDown,
        };
        if (this.viewProps.chipInfo) {
            this.editorObjectsManager.loadChipByInfo(this.viewProps.chipInfo);
        }
        makeObservable(this);
    }

    handleMouseMove = (e: MouseEvent) => {
        runInAction(() => {
            this.cursorPosition = new Pos(e.pageX, e.pageY);
        });
    };

    get isAnyCancelable() {
        return (
            this.statesManager.isAnyEnabled ||
            this.editorObjectsManager.isAnyCancelable ||
            this.editorObjectsManager.wireIncompleteViewModel?.isStretching
        );
    }

    cancelAll = () => {
        this.statesManager.closeAll();
        this.editorObjectsManager.cancelAll();
    };

    // -------

    onClosingWindow = () => {
        if (!this.editorObjectsManager.notSavedChanges) return;
        const lastEditSave: lastEditSaves = {
            saveName: this.saveManager.saveName,
            chipInfo: this.editorObjectsManager.currentChip.toChipInfo(),
        };
        localStorage.setItem("Recovery:lastEdit", JSON.stringify(lastEditSave));
    };

    protected onViewMounted(): void {
        this.editorObjectsManager.lastSizeWindow = new Pos(
            window.outerWidth,
            window.outerHeight
        );
        for (const key in this.listeners)
            window.addEventListener(key, this.listeners[key]);
        window.addEventListener("beforeunload", this.onClosingWindow);
    }
    protected onViewUnmounted(): void {
        for (const key in this.listeners)
            window.removeEventListener(key, this.listeners[key]);
    }
}

export const EditPage = view(EditPageViewModel)<RequiredProps>(
    ({ viewModel }) => {
        return (
            <div className={cl.EditPage}>
                <svg
                    className={cl.EditView}
                    onClick={viewModel.editorObjectsManager.clickedToSvg}
                >
                    <RWireIncomplete />
                    <BusIncomplete />

                    <g
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        {viewModel.editorObjectsManager.currentChip.wires.map(
                            (wire) => (
                                <RWire wire={wire} key={wire.id} />
                            )
                        )}
                    </g>
                    <g>
                        {viewModel.editorObjectsManager.currentChip.buses.map(
                            (bus) => (
                                <RBus Bus={bus} key={bus.id} />
                            )
                        )}
                    </g>
                </svg>
                <SidePinField
                    Pins={viewModel.editorObjectsManager.currentChip.input}
                    isInput
                />
                <div className={cl.ChipField}>
                    {viewModel.editorObjectsManager.currentChip.subChips.map(
                        (chip) => chip.createElement()
                    )}
                    <AddingChipsBox />
                </div>
                <SidePinField
                    Pins={viewModel.editorObjectsManager.currentChip.output}
                />
                <>
                    {/* Modals windows */}
                    <div>
                        {viewModel.statesManager.circleAddingWindow.map(
                            (circleEnabled, i) => (
                                <CircleAdding
                                    key={i}
                                    circleID={i}
                                    enabled={circleEnabled}
                                    addNewChip={
                                        viewModel.editorObjectsManager
                                            .setAddingChip
                                    }
                                    saveManager={viewModel.saveManager}
                                />
                            )
                        )}
                    </div>
                    <ChipList />
                    <SaveChip />
                    <EscMenu />
                </>
            </div>
        );
    }
);
