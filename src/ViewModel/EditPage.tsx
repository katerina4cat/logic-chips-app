import { ReactNode } from "react";
import { Pin } from "../Simulating/Pin";
import { Chip } from "../Simulating/Chip";
import { RWire } from "./Wires/RWire";
import { removeElement } from "../common/RemoveElement";
import { RWireIncomplete } from "./Wires/RWireIncomplete";
import { SidePinField } from "./SidePinField";
import { DefaultChip } from "./Chips/DefaultChip";
import { CircleAdding } from "./CircleAdding/CircleAdding";
import { SaveInfo } from "../Structs/SaveInfo";
import { Modal } from "./Modal/Modal";
import { SaveChip } from "./Modal/SaveChip";
import { ChipList } from "./Modal/ChipList";
import React from "react";
import cl from "./EditPage.module.scss";
import { AddingChipsBox } from "./Chips/AddingChipsBox";
import { Bus } from "../Simulating/BaseChips/Bus";
import { Pos } from "../common/Pos";
import { ChipTypes } from "../Structs/ChipMinimalInfo";
import { RBus } from "./Wires/RBus";
import { RBusIncomplete } from "./Wires/RBusIncomplete";
import { hotkeys, manyBusSpace } from "../common/Settings";
import { ViewModel, view } from "@yoskutik/react-vvm";
import { action, makeObservable, observable } from "mobx";
import { Wire } from "../Simulating/Wire";

interface RequiredProps {
    saveName: string;
}

export class EditPageViewModel extends ViewModel<undefined, RequiredProps> {
    @observable currentChip: Chip = new Chip();
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

    saveManager: SaveInfo;
    startClickTime = 0;
    startClickPos = new Pos();
    @observable deltaMove = new Pos();
    lastSizeWindow = new Pos();

    constructor() {
        super();
        this.saveManager = SaveInfo.loadSave(this.viewProps.saveName);
        makeObservable(this);
        this.initHotKeys();
    }
    @action setLibrary = (v: boolean) => (this.showLibrary = v);
    @action setModal = (v: boolean) => (this.modalActive = v);
    @action setCircleState = (i: number, v: boolean) =>
        (this.showCircleAdding[i] = v);

    @action handleKeyDown = (e: KeyboardEvent) => {
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
        for (const hotKeyItem of Object.values(hotkeys)) {
            if (hotKeyItem.testKey(e)) {
                e.preventDefault();
                hotKeyItem.event();
                return;
            }
        }
    };
    @action loadChip = (chipName: string) => {
        this.currentChip = this.saveManager.loadChipByName(
            chipName,
            undefined,
            0
        );
        this.showLibrary = false;
    };
    @action newChip = () => (this.currentChip = new Chip(undefined, 0));
    @action addChips = (chips: Chip[]) =>
        this.currentChip.subChips.push(...chips);
    @action addBuses = (from: Pos, to: Pos) => {
        this.currentChip.buses.push(
            ...new Array(this.addingCount).fill(0).map((_, i) => {
                return new Bus(
                    new Pos(from.x + manyBusSpace * i, from.y),
                    new Pos(to.x + manyBusSpace * i, to.y)
                );
            })
        );
    };

    @action removeWire = (wire: Wire) => {
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
        while (pin.inWires.length != 0) this.removeWire(pin.inWires[0]);
        while (pin.outWires.length != 0) this.removeWire(pin.outWires[0]);
        if (pin.isInput) removeElement(this.currentChip.input, pin);
        else removeElement(this.currentChip.output, pin);
    };

    @action removeBus = (bus: Bus) => {
        bus.depentBus.forEach((dep) => removeElement(dep.depentBus, bus));
        bus.input.forEach((pin) => {
            pin.inWires.forEach((wire) => this.removeWire(wire));
            pin.outWires.forEach((wire) => this.removeWire(wire));
        });
        bus.output.forEach((pin) => {
            pin.inWires.forEach((wire) => this.removeWire(wire));
            pin.outWires.forEach((wire) => this.removeWire(wire));
        });
        removeElement(this.currentChip.buses, bus);
    };
    @action selectChip = (chip: Chip) => {
        this.currentChip.subChips.forEach((schip) => (schip.selected = false));
        chip.selected = true;
    };

    lastClickedChip?: Chip;

    clickedToChip = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
        chip: Chip
    ) => {
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
            if (Date.now() - this.startClickTime < 175) {
                if (e.ctrlKey) this.selectingChip(this.lastClickedChip);
                else this.selectChip(this.lastClickedChip);
            } else {
                this.currentChip.subChips
                    .filter((chip) => chip.selected)
                    .forEach((chip) => chip.position.add(this.deltaMove));
            }
        }
        this.deltaMove = new Pos();
        this.lastClickedChip = undefined;
    };
    @action chipMove = (e: MouseEvent) => {
        this.deltaMove = new Pos(
            e.pageX - this.startClickPos.x,
            e.pageY - this.startClickPos.y
        );
    };
    @action selectingChip = (chip: Chip) => (chip.selected = !chip.selected);
    @action clearAdding = () => {
        this.addingChip = undefined;
        this.addingCount = 1;
        this.addingBus = false;
    };
    @action onResize = (e: UIEvent) => {
        const newSizeWindow = new Pos(
            (e.currentTarget as Window).innerWidth,
            (e.currentTarget as Window).innerHeight
        );
        const delta = new Pos(
            (newSizeWindow.x - this.lastSizeWindow.x) / 2,
            (newSizeWindow.y - this.lastSizeWindow.y) / 2
        );
        this.currentChip.subChips.forEach((chip) => {
            if (chip instanceof Bus) {
                chip.to.add(delta);
                chip.from.add(delta);
                chip.input.forEach((pin) => pin.position.add(delta));
                chip.output.forEach((pin) => pin.position.add(delta));
            } else {
                chip.position.add(delta);
            }
        });
        this.currentChip.wires.forEach((wire) => wire.addDeltaToPoints(delta));
        this.currentChip.input.forEach((pin) => {
            if (pin.graphicalObject.current)
                pin.graphicalObject.current.style.top = String(
                    pin.position.y + delta.y
                );
            if (pin.updatePos) pin.updatePos();
        });
        this.currentChip.output.forEach((pin) => {
            if (pin.graphicalObject.current)
                pin.graphicalObject.current.style.top = String(
                    pin.position.y + delta.y
                );
            if (pin.updatePos) pin.updatePos();
        });

        this.lastSizeWindow = newSizeWindow;
    };
    protected onViewMounted(): void {
        this.lastSizeWindow = new Pos(window.innerWidth, window.innerHeight);
        window.addEventListener("resize", this.onResize);
        window.addEventListener("keydown", this.handleKeyDown);
    }
    protected onViewUnmounted(): void {
        window.removeEventListener("keydown", this.handleKeyDown);
        window.removeEventListener("resize", this.onResize);
    }
    interactPin = {
        current: (_pin: Pin, _ctrlKey: boolean, _point?: Pos) => {},
    }; // Переопределяется в VM->Wires->RWireIncomplete.tsx Необходим для протягивания провода
    wirePointClick = {
        current: (_e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {},
    }; // Переопределяется в VM->Wires->RWireIncomplete.tsx

    @action setAddingChip = (chipName: string) => {
        if (chipName != "BUS") {
            this.addingChip = this.saveManager.loadChipByName(chipName);
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
        hotkeys.hideAllPin.event = () => {
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
        hotkeys.hideChipPins.event = () => {
            localStorage.setItem(
                "showingPinTitles",
                this.showChipPinTitles ? "false" : "true"
            );
            this.showChipPinTitles = !this.showChipPinTitles;
        };
        hotkeys.library.event = () => {
            this.showLibrary = !this.showLibrary;
            this.showCircleAdding = new Array(9).fill(false);
            this.enabledModal = false;
        };
        hotkeys.save.event = () => {
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
                this.enabledModal = true;
            }
        };
        hotkeys.newChip.event = () => {
            this.showLibrary = false;
            this.showCircleAdding = new Array(9).fill(false);
            this.enabledModal = false;
            this.newChip();
        };
        hotkeys.addCount.event = () => {
            this.addingCount = this.addingCount + 1;
        };
        hotkeys.reduceCount.event = () => {
            this.addingCount =
                this.addingCount - 1 > 0
                    ? this.addingCount - 1
                    : this.addingCount;
        };
        hotkeys.cancelAction.event = () => {
            this.showCircleAdding = new Array(9).fill(false);
            this.addingChip = undefined;
            this.addingBus = false;
            this.showLibrary = false;
            this.addingCount = 1;
        };
        hotkeys.remove.event = () => {
            const chipsToRemove = this.currentChip.subChips.filter(
                (chip) => chip.selected
            );
            for (let chipRemoving of chipsToRemove) {
                chipRemoving.input.forEach((pin) =>
                    pin.removeAllWire(this.currentChip.wires)
                );
                chipRemoving.output.forEach((pin) =>
                    pin.removeAllWire(this.currentChip.wires)
                );
                removeElement(this.currentChip.subChips, chipRemoving);
            }
        };
    }
}

export const EditPage = view(EditPageViewModel)((props) => {
    const { viewModel } = props;
    return (
        <div className={cl.EditPage}>
            <svg
                className={cl.EditView}
                onClick={(e) => {
                    viewModel.wirePointClick.current(e);
                }}
            >
                <RWireIncomplete
                    addWire={viewModel.addWire}
                    interactPin={viewModel.interactPin}
                    WirePointClick={viewModel.wirePointClick}
                />

                <RBusIncomplete
                    enabled={viewModel.addingBus}
                    addNewBus={viewModel.addBuses}
                    addingCount={viewModel.addingCount}
                />

                <g
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    {viewModel.currentChip.wires.map((wire) => (
                        <RWire
                            wire={wire}
                            deleteWire={viewModel.removeWire}
                            key={wire.id}
                        />
                    ))}
                </g>
                <g>
                    {(
                        viewModel.currentChip.subChips.filter(
                            (chip) => chip.chipType == ChipTypes.BUS
                        ) as Bus[]
                    ).map((bus) => (
                        <RBus
                            Bus={bus}
                            removeBus={viewModel.removeBus}
                            interactPin={viewModel.interactPin}
                            key={bus.id}
                        />
                    ))}
                </g>
            </svg>
            <SidePinField
                Pins={viewModel.currentChip.input}
                interactPin={viewModel.interactPin}
                currentChip={viewModel.currentChip}
                isInput
                addNewPin={viewModel.addPin}
                deletePin={viewModel.removePin}
                showPinTitle={viewModel.showAllPinTitles}
            />
            <div className={cl.ChipField}>
                {viewModel.currentChip.subChips.map((chip) => (
                    <DefaultChip
                        key={chip.id}
                        chip={chip}
                        interactPin={viewModel.interactPin}
                        showPinTitles={
                            viewModel.showAllPinTitles
                                ? viewModel.showChipPinTitles
                                : false
                        }
                    />
                ))}
                <AddingChipsBox />
            </div>
            <SidePinField
                Pins={viewModel.currentChip.output}
                interactPin={viewModel.interactPin}
                currentChip={viewModel.currentChip}
                disabled
                addNewPin={viewModel.addPin}
                deletePin={viewModel.removePin}
                showPinTitle={viewModel.showAllPinTitles}
            />
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
            <ChipList
                enabled={viewModel.showLibrary}
                currentChip={viewModel.currentChip}
                setEnabled={viewModel.setLibrary}
                saveManager={viewModel.saveManager}
                loadChip={viewModel.loadChip}
                addChip={viewModel.setAddingChip}
                newChip={viewModel.newChip}
            />
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
