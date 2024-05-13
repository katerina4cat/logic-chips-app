import { RWire } from "./ChipViews/Wires/RWire";
import { RWireIncomplete } from "./ChipViews/Wires/RWireIncomplete";
import { SidePinField } from "./ChipViews/Pins/SidePinField";
import { DefaultChip } from "./ChipViews/Chips/DefaultChip";
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
import { userSettings } from "../../Managers/UserManager";
import { Pos } from "../../common/Pos";
import { MouseEvent } from "react";
import { StatesManager } from "./RedactorManagers/StatesManager";
import { HotKeysManager } from "./RedactorManagers/HotKeysManager";
import { EditorObjectsManager } from "./RedactorManagers/EditorObjectsManager";

export interface RequiredProps {
    saveName: string;
}

export class EditPageViewModel extends ViewModel<undefined, RequiredProps> {
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
        makeObservable(this);
    }

    handleMouseMove = (e: MouseEvent) => {
        runInAction(() => {
            this.cursorPosition = new Pos(
                e.pageX -
                    (userSettings.cellCord
                        ? e.pageX % userSettings.cellSize
                        : 0),
                e.pageY -
                    (userSettings.cellCord
                        ? e.pageY % userSettings.cellSize
                        : 0)
            );
        });
    };

    get isAnyCancelable() {
        return (
            this.statesManager.isAnyEnabled ||
            this.editorObjectsManager.isAnyCancelable
        );
    }

    cancelAll = () => {
        this.statesManager.closeAll();
        this.editorObjectsManager.cancelAll();
    };

    // -------

    protected onViewMounted(): void {
        this.editorObjectsManager.lastSizeWindow = new Pos(
            window.outerWidth,
            window.outerHeight
        );
        for (const key in this.listeners)
            window.addEventListener(key, this.listeners[key]);
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
                        (chip) => (
                            <DefaultChip key={chip.id} chip={chip} />
                        )
                    )}
                    <AddingChipsBox />
                </div>
                <SidePinField
                    Pins={viewModel.editorObjectsManager.currentChip.output}
                />
                {/* Modals windows */}
                <>
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
                    {/** maximum 12 элементов */}
                    <SaveChip />
                </>
            </div>
        );
    }
);
