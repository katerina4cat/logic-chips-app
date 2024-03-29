import { Pin } from "../../Simulating/Pin";
import { Chip } from "../../Simulating/Chip";
import { RWire } from "./Wires/RWire";
import { removeElement } from "../../common/RemoveElement";
import {
    RWireIncomplete,
    WireIncompleteViewModel,
} from "./Wires/RWireIncomplete";
import { SidePinField } from "./SidePinField";
import { DefaultChip } from "./Chips/DefaultChip";
import { CircleAdding } from "./CircleAdding/CircleAdding";
import { SaveInfo } from "../../Structs/SaveInfo";
import { Modal } from "./Modal/Modal";
import { SaveChip } from "./Modal/SaveChip";
import { ChipList } from "./Modal/ChipList";
import React from "react";
import cl from "./EditPage.module.scss";
import { AddingChipsBox } from "./Chips/AddingChipsBox";
import { Bus } from "../../Simulating/BaseChips/Bus";
import { Pos } from "../../common/Pos";
import { RBus } from "./Wires/RBus";
import { BusIncomplete } from "./Wires/RBusIncomplete";
import { ViewModel, view } from "@yoskutik/react-vvm";
import { action, makeObservable, observable } from "mobx";
import { Wire } from "../../Simulating/Wire";
import UserManager, { userSettings } from "../../Managers/UserManager";

interface RequiredProps {
    saveName: string;
}

export class EditPageViewModel extends ViewModel<undefined, RequiredProps> {
    @observable currentChip: Chip = new Chip(undefined, 0);
    @observable addingChip?: Chip;
    @observable addingBus: boolean = false;
    @observable addingCount: number = 1;
    @observable showChipPinTitles: boolean =
        (localStorage.getItem("showingPinTitles") || "true") == "true";
    @observable showAllPinTitles: boolean =
        (localStorage.getItem("showingAllPinTitles") || "true") == "true";
    @observable showCircleAdding: boolean[] = new Array(9).fill(false);
    @observable showLibrary: boolean = false;
    @observable enabledModal: boolean = false;
    @observable selectedChips: Chip[] = [];
    @observable modalActive = false;

    chipDeep: Chip[] = [];
    saveManager: SaveInfo;
    startClickTime = 0;
    startClickPos = new Pos();
    deltaMove = new Pos();
    chipMoved = new Pos();
    lastSizeWindow = new Pos();

    wireIncompleteViewModel?: WireIncompleteViewModel;

    constructor() {
        super();
        this.saveManager = SaveInfo.loadSave(this.viewProps.saveName);
        makeObservable(this);
        this.initHotKeys();
    }

    @action viewInChip = (chip: Chip) => {
        this.chipDeep.push(this.currentChip);
        this.currentChip = chip;
    };

    @action setLibrary = (v: boolean) => (this.showLibrary = v);
    @action setModal = (v: boolean) => (this.modalActive = v);
    @action setCircleState = (i: number, v: boolean) =>
        (this.showCircleAdding[i] = v);

    @action handleKeyDown = (e: KeyboardEvent) => {
        if (this.currentChip.id !== 0) {
            if (userSettings.hotKeys.save.testKey(e)) {
                e.preventDefault();
                userSettings.hotKeys.save.event();
            }
            if (e.key === "Backspace") {
                this.currentChip = this.chipDeep.pop() as Chip;
            }
            return;
        }

        if ((e.target as any).tagName === "INPUT") return;
        // Колесо добавления
        for (let i = 0; i < 9; i++)
            if (e.key == (i + 1).toString() && e.altKey) {
                (this.showCircleAdding = new Array(this.showCircleAdding.length)
                    .fill(false)
                    .map((_, ind) => i === ind)),
                    (this.showLibrary = false),
                    e.preventDefault();
                return;
            }
        for (const hotKeyItem of Object.values(userSettings.hotKeys)) {
            if (hotKeyItem.testKey(e)) {
                e.preventDefault();
                hotKeyItem.event();
                return;
            }
        }
    };
    @action loadChip = (chipName: string) => {
        [this.currentChip, this.lastSizeWindow] =
            this.saveManager.loadChipByName(chipName, undefined, 0);
        this.showLibrary = false;
        if (this.lastSizeWindow.x === 0 && this.lastSizeWindow.y === 0)
            this.lastSizeWindow = new Pos(
                window.innerWidth,
                window.innerHeight
            );
        this.onResize();
    };
    @action newChip = () => (this.currentChip = new Chip(undefined, 0));
    @action addChips = (chips: Chip[]) =>
        this.currentChip.subChips.push(...chips);
    @action addBus = (points: Pos[]) => {
        this.currentChip.buses.push(new Bus(points));
    };

    @action removeWire = (wire: Wire) => {
        if (this.currentChip.id !== 0) return;
        wire.deletingWire();
        removeElement(this.currentChip.wires, wire);
    };
    @action addWire = (wire: Wire) => {
        this.currentChip.wires.push(wire);
    };
    @action addPin = (pin: Pin) => {
        if (pin.isInput) this.currentChip.input.push(pin);
        else this.currentChip.output.push(pin);
    };

    @action removePin = (pin: Pin) => {
        const wires = this.currentChip.wires.filter(
            (wire) => wire.source == pin || wire.target == pin
        );
        for (const wire of wires) {
            wire.deletingWire();
            removeElement(this.currentChip.wires, wire);
        }
        if (pin.isInput) removeElement(this.currentChip.input, pin);
        else removeElement(this.currentChip.output, pin);
    };

    @action removeBus = (bus: Bus) => {
        if (this.currentChip.id !== 0) return;
        bus.depentBus.forEach((dep) => removeElement(dep.depentBus, bus));
        bus.input.forEach((pin) => this.removePin(pin));
        bus.output.forEach((pin) => this.removePin(pin));
        removeElement(this.currentChip.buses, bus);
    };
    @action clearSelection = () => {
        this.currentChip.subChips.forEach((schip) => (schip.selected = false));
    };
    @action selectChip = (chip: Chip) => {
        this.clearSelection();
        chip.selected = true;
    };

    lastClickedChip?: Chip;

    clickedToChip = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
        chip: Chip
    ) => {
        if (this.currentChip.id === 0)
            if (e.altKey) {
                this.setAddingChip(chip.name);
                return;
            }
        this.startClickTime = Date.now();
        this.startClickPos = new Pos(e.pageX, e.pageY);
        this.lastClickedChip = chip;
        window.addEventListener("mouseup", this.stopClickToChip);
        if (chip.selected) window.addEventListener("mousemove", this.chipMove);
    };

    @action stopClickToChip = (e: MouseEvent) => {
        window.removeEventListener("mouseup", this.stopClickToChip);
        window.removeEventListener("mousemove", this.chipMove);
        if (this.lastClickedChip) {
            if (Date.now() - this.startClickTime < 100) {
                if (e.ctrlKey) this.selectingChip(this.lastClickedChip);
                else this.selectChip(this.lastClickedChip);
                this.currentChip.subChips
                    .filter((chip) => chip.selected)
                    .forEach((chip) => chip.position.rem(this.deltaMove));
            }
        }
        this.chipMoved = new Pos();
        this.deltaMove = new Pos();
        this.lastClickedChip = undefined;
    };
    @action chipMove = (e: MouseEvent) => {
        this.deltaMove = new Pos(
            e.pageX - this.startClickPos.x,
            e.pageY - this.startClickPos.y
        );
        this.currentChip.subChips
            .filter((chip) => chip.selected)
            .forEach((chip) =>
                chip.position.add(this.deltaMove.removing(this.chipMoved))
            );
        this.chipMoved = this.deltaMove.copy();
    };
    @action selectingChip = (chip: Chip) => (chip.selected = !chip.selected);
    @action clearAdding = () => {
        this.addingChip = undefined;
        this.addingCount = 1;
        this.addingBus = false;
    };
    @action onResize = () => {
        const newSizeWindow = new Pos(window.innerWidth, window.innerHeight);
        const delta = new Pos(
            newSizeWindow.x / this.lastSizeWindow.x,
            newSizeWindow.y / this.lastSizeWindow.y
        );
        this.currentChip.subChips.forEach((chip) => {
            chip.position.multy(delta);
        });
        this.currentChip.buses.forEach((bus) =>
            bus.positions.forEach((pos) => pos.multy(delta))
        );
        this.currentChip.wires.forEach((wire) =>
            wire.points.forEach((pos, i) => {
                if (i === 0 || i === wire.points.length - 1) return;
                pos.multy(delta);
            })
        );
        this.currentChip.input.forEach((pin) => pin.deltaPos.multy(delta));
        this.currentChip.output.forEach((pin) => pin.deltaPos.multy(delta));

        this.lastSizeWindow = newSizeWindow;
    };
    protected onViewMounted(): void {
        this.lastSizeWindow = new Pos(window.outerWidth, window.outerHeight);
        window.addEventListener("resize", this.onResize);
        window.addEventListener("keydown", this.handleKeyDown);
    }
    protected onViewUnmounted(): void {
        window.removeEventListener("keydown", this.handleKeyDown);
        window.removeEventListener("resize", this.onResize);
    }

    @action setAddingChip = (chipName: string) => {
        if (chipName != "BUS") {
            this.addingChip = this.saveManager.loadChipByName(chipName)[0];
            this.addingBus = false;
            this.addingCount = 1;
            this.showCircleAdding = new Array(9).fill(false);
        } else {
            this.addingChip = undefined;
            this.addingBus = true;
            this.addingCount = 1;
            this.showCircleAdding = new Array(9).fill(false);
        }
    };
    initHotKeys() {
        userSettings.hotKeys.hideAllPin.event = () => {
            localStorage.setItem(
                "showingAllPinTitles",
                this.showAllPinTitles ? "false" : "true"
            );
            localStorage.setItem(
                "showingPinTitles",
                this.showAllPinTitles ? "false" : "true"
            );
            this.showAllPinTitles = !this.showAllPinTitles;
            this.showChipPinTitles = this.showAllPinTitles;
        };
        userSettings.hotKeys.hideChipPins.event = () => {
            localStorage.setItem(
                "showingPinTitles",
                this.showChipPinTitles ? "false" : "true"
            );
            this.showChipPinTitles = !this.showChipPinTitles;
        };
        userSettings.hotKeys.library.event = () => {
            this.showLibrary = !this.showLibrary;
            this.showCircleAdding = new Array(9).fill(false);
            this.enabledModal = false;
        };
        userSettings.hotKeys.save.event = () => {
            if (
                this.saveManager.Chips.find(
                    (chip) => chip.name == this.currentChip.name
                )
            )
                this.saveManager.saveNewChip(
                    this.currentChip,
                    this.currentChip.name,
                    this.currentChip.color,
                    undefined,
                    true
                );
            else {
                this.setModal(true);
            }
        };
        userSettings.hotKeys.newChip.event = () => {
            this.showLibrary = false;
            this.showCircleAdding = new Array(9).fill(false);
            this.enabledModal = false;
            this.newChip();
        };
        userSettings.hotKeys.addCount.event = () => {
            this.addingCount = this.addingCount + 1;
        };
        userSettings.hotKeys.reduceCount.event = () => {
            this.addingCount =
                this.addingCount - 1 > 0
                    ? this.addingCount - 1
                    : this.addingCount;
        };
        userSettings.hotKeys.cancelAction.event = () => {
            this.showCircleAdding = new Array(9).fill(false);
            this.addingChip = undefined;
            this.addingBus = false;
            this.showLibrary = false;
            this.addingCount = 1;
        };
        userSettings.hotKeys.remove.event = this.removingSelectedChip;
    }
    @action removingSelectedChip = () => {
        const chipsToRemove = this.currentChip.subChips.filter(
            (chip) => chip.selected
        );
        for (let chipRemoving of chipsToRemove) {
            chipRemoving.input.forEach((pin) => this.removePin(pin));
            chipRemoving.output.forEach((pin) => this.removePin(pin));
            removeElement(this.currentChip.subChips, chipRemoving);
        }
    };
}

export const EditPage = view(EditPageViewModel)<RequiredProps>((props) => {
    const { viewModel } = props;
    return (
        <div className={cl.EditPage}>
            <svg
                className={cl.EditView}
                onClick={(e) => {
                    viewModel.wireIncompleteViewModel?.wirePointClick(e);
                    viewModel.clearSelection();
                }}
            >
                <RWireIncomplete />
                <BusIncomplete />

                <g
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    {viewModel.currentChip.wires.map((wire) => (
                        <RWire wire={wire} key={wire.id} />
                    ))}
                </g>
                <g>
                    {viewModel.currentChip.buses.map((bus) => (
                        <RBus Bus={bus} key={bus.id} />
                    ))}
                </g>
            </svg>
            <SidePinField Pins={viewModel.currentChip.input} isInput />
            <div className={cl.ChipField}>
                {viewModel.currentChip.subChips.map((chip) => (
                    <DefaultChip key={chip.id} chip={chip} />
                ))}
                <AddingChipsBox />
            </div>
            <SidePinField Pins={viewModel.currentChip.output} />
            <div>
                {viewModel.showCircleAdding.map((enabledI, i) => (
                    <CircleAdding
                        key={i}
                        circleID={i}
                        enabled={enabledI}
                        addNewChip={viewModel.setAddingChip}
                        setEnabled={(e: boolean) => {
                            viewModel.setCircleState(i, e);
                        }}
                        saveManager={viewModel.saveManager}
                    />
                ))}
            </div>
            <ChipList />
            {/** maximum 12 элементов */}
            <Modal
                setEnabled={viewModel.setModal}
                enabled={viewModel.modalActive}
            >
                <SaveChip
                    saveManager={viewModel.saveManager}
                    currentChip={viewModel.currentChip}
                    setEnabled={viewModel.setModal}
                />
            </Modal>
        </div>
    );
});
