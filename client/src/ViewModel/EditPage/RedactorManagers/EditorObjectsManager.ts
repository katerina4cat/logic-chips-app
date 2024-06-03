import { action, makeObservable, observable } from "mobx";
import { EditPageViewModel } from "../EditPage";
import { StatesManager } from "./StatesManager";
import { Chip } from "../../../Simulating/Chip";
import { Pos } from "../../../common/Pos";
import { Bus } from "../../../Simulating/BaseChips/BUS";
import { Wire } from "../../../Simulating/Wire";
import { removeElement } from "../../../common/RemoveElement";
import { Pin } from "../../../Simulating/Pin";
import { WireIncompleteViewModel } from "../ChipViews/Wires/RWireIncomplete";
import { ChipInfo } from "@shared/models/saves/ChipInfo";

export class EditorObjectsManager {
    pageViewModel: EditPageViewModel;
    wireIncompleteViewModel?: WireIncompleteViewModel;
    statesManager: StatesManager;

    // Переменные для редактирования чипа
    @observable addingChip?: Chip;
    @observable addingBus: boolean = false;
    @observable selectedChips: Chip[] = [];
    @observable addingCount: number = 1;

    lastSizeWindow = new Pos();
    wireHovered = false;
    notSavedChanges = false;

    // Главные переменные для отображения
    @observable currentChip: Chip = new Chip(undefined, 0);
    chipDeep: Chip[] = [];

    constructor(editPageViewModel: EditPageViewModel) {
        this.pageViewModel = editPageViewModel;
        this.statesManager = editPageViewModel.statesManager;
        makeObservable(this);
    }

    get isAnyCancelable() {
        return (
            this.addingBus ||
            this.selectedChips.length !== 0 ||
            !!this.addingChip
        );
    }

    @action cancelAll = () => {
        this.addingChip = undefined;
        this.addingBus = false;
        this.addingCount = 1;
        this.selectedChips = [];
    };

    @action viewInChip = (chip: Chip) => {
        this.chipDeep.push(this.currentChip);
        this.currentChip = chip;
    };

    @action newChip = () => {
        this.pageViewModel.cancelAll();
        this.currentChip = new Chip(undefined, 0);
        this.notSavedChanges = false;
    };

    @action loadChip = (chipName: string) => {
        [this.currentChip, this.lastSizeWindow] =
            this.pageViewModel.saveLoder.loadChipByName(chipName, undefined, 0);
        this.pageViewModel.cancelAll();
        if (this.lastSizeWindow.x === 0 && this.lastSizeWindow.y === 0)
            this.lastSizeWindow = new Pos(
                window.innerWidth,
                window.innerHeight
            );
        this.windowResized();
        this.notSavedChanges = false;
    };

    @action loadChipByInfo = (chipInfo: ChipInfo) => {
        [this.currentChip, this.lastSizeWindow] =
            this.pageViewModel.saveLoder.loadChipByChipInfo(
                chipInfo,
                undefined,
                0
            );
        this.pageViewModel.cancelAll();
        if (this.lastSizeWindow.x === 0 && this.lastSizeWindow.y === 0)
            this.lastSizeWindow = new Pos(
                window.innerWidth,
                window.innerHeight
            );
        this.windowResized();
    };

    // Методы вызваемые действиями пользователя

    @action windowResized = () => {
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

    @action clickedToSvg = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        if (this.wireIncompleteViewModel?.wirePointClick(e))
            this.selectedChips = [];
    };

    // Методы добавления элементов чипа

    @action setAddingChip = (chipName: string) => {
        if (chipName != "BUS") {
            this.addingChip =
                this.pageViewModel.saveLoder.loadChipByName(chipName)[0];
            this.addingBus = false;
            this.addingCount = 1;
            this.statesManager.closeAll();
        } else {
            this.addingChip = undefined;
            this.addingBus = true;
            this.addingCount = 1;
            this.statesManager.closeAll();
        }
    };

    @action increaseAdding = () => this.addingCount++;
    @action decreaseAdding = () =>
        (this.addingCount -= this.addingCount > 1 ? 1 : 0);

    // Элементы чипа

    @action addChips = (chips: Chip[]) => {
        this.currentChip.subChips.push(...chips);
        this.notSavedChanges = true;
    };

    @action addBus = (points: Pos[]) => {
        this.currentChip.buses.push(new Bus(points));
        this.notSavedChanges = true;
    };

    @action removeWire = (wire: Wire) => {
        if (this.currentChip.id !== 0) return;
        wire.deletingWire();
        removeElement(this.currentChip.wires, wire);
        this.notSavedChanges = true;
    };
    @action addWire = (wire: Wire) => {
        this.currentChip.wires.push(wire);
        this.notSavedChanges = true;
    };
    @action addPin = (pin: Pin) => {
        if (pin.isInput) this.currentChip.input.push(pin);
        else this.currentChip.output.push(pin);
        this.notSavedChanges = true;
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
        this.notSavedChanges = true;
    };

    @action removeBus = (bus: Bus) => {
        if (this.currentChip.id !== 0) return;
        bus.depentBus.forEach((dep) => removeElement(dep.depentBus, bus));
        bus.input.forEach((pin) => this.removePin(pin));
        bus.output.forEach((pin) => this.removePin(pin));
        removeElement(this.currentChip.buses, bus);
        this.notSavedChanges = true;
    };

    @action removingSelectedChip = () => {
        if (this.wireHovered) return;
        const chipsToRemove = this.currentChip.subChips.filter(
            (chip) => chip.selected
        );
        for (let chipRemoving of chipsToRemove) {
            chipRemoving.input.forEach((pin) => this.removePin(pin));
            chipRemoving.output.forEach((pin) => this.removePin(pin));
            removeElement(this.currentChip.subChips, chipRemoving);
        }
        this.notSavedChanges = true;
    };
}
