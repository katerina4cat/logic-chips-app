import { Component, ReactNode } from "react";
import { Pin } from "../Simulating/Pin";
import { Chip } from "../Simulating/Chip";
import { Wire } from "../Simulating/Wire";
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
import { Bus } from "../Simulating/Bus";
import { Pos } from "../common/Pos";
import { ChipTypes } from "../Structs/ChipMinimalInfo";
import { RBus } from "./Wires/RBus";
import { RBusIncomplete } from "./Wires/RBusIncomplete";
import { hotkeys, manyBusSpace } from "../common/Settings";

interface RequiredProps {
    saveName: string;
}

interface States {
    Inputs: Pin[];
    Outputs: Pin[];
    SubChips: Chip[];
    Buses: Bus[];
    Wires: Wire[];
    CurrentChip: Chip;
    AddingChip?: Chip;
    AddingBus: boolean;
    AddingChipCount: number;
    showChipPinTitles: boolean;
    showAllPinTitles: boolean;
    showCircleAdding: boolean[];
    showLibrary: boolean;
    enabledModal: boolean;
    modalContent?: ReactNode;
}

export class EditPage extends Component<RequiredProps, States> {
    state: Readonly<States> = {
        Inputs: [],
        Outputs: [],
        SubChips: [],
        Buses: [],
        Wires: [],
        CurrentChip: new Chip(undefined, 0),
        AddingBus: false,
        AddingChipCount: 1,
        showChipPinTitles:
            (localStorage.getItem("showingPinTitles") || "true") == "true",
        showAllPinTitles:
            (localStorage.getItem("showingAllPinTitles") || "true") == "true",
        showCircleAdding: new Array(9).fill(false),
        showLibrary: false,
        enabledModal: false,
    };
    saveManager: SaveInfo;
    constructor(props: RequiredProps) {
        super(props);
        this.saveManager = SaveInfo.loadSave(props.saveName);
        this.initHotKeys();
    }

    componentDidUpdate(): void {
        this.state.CurrentChip.input = this.state.Inputs;
        this.state.CurrentChip.output = this.state.Outputs;
        this.state.CurrentChip.wires = this.state.Wires;
        this.state.CurrentChip.subChips = this.state.SubChips;
    }

    setModal = (state: boolean) => {
        this.setState({ enabledModal: state });
    };

    setLibrary = (state: boolean) => {
        this.setState({ showLibrary: state });
    };

    handleKeyDown = (e: KeyboardEvent) => {
        // Колесо добавления
        for (let i = 0; i < 9; i++)
            if (e.key == (i + 1).toString() && e.altKey) {
                this.setState((prev) => {
                    const newCircleState = new Array(9).fill(false);
                    newCircleState[i] = !prev.showCircleAdding[i];
                    return {
                        showCircleAdding: newCircleState,
                        showLibrary: false,
                        enabledModal: false,
                    };
                });
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

    loadChip = (chipName: string) => {
        const chip = this.saveManager.loadChipByName(chipName, undefined, 0);
        this.setState({
            CurrentChip: chip,
            Wires: chip.wires,
            Inputs: chip.input,
            Outputs: chip.output,
            SubChips: chip.subChips,
            showLibrary: false,
        });
    };

    newChip = () => {
        const chip = new Chip(undefined, 0);
        this.setState({
            CurrentChip: chip,
            Wires: chip.wires,
            Inputs: chip.input,
            Outputs: chip.output,
            SubChips: chip.subChips,
            showLibrary: false,
        });
    };

    lastSizeWindow = new Pos();

    onResize = (e: UIEvent) => {
        const newSizeWindow = new Pos(
            (e.currentTarget as Window).innerWidth,
            (e.currentTarget as Window).innerHeight
        );
        const delta = new Pos(
            (newSizeWindow.x - this.lastSizeWindow.x) / 2,
            (newSizeWindow.y - this.lastSizeWindow.y) / 2
        );
        this.state.SubChips.forEach((chip) => {
            if (chip instanceof Bus) {
                chip.to.add(delta);
                chip.from.add(delta);
                chip.input.forEach((pin) => pin.position.add(delta));
                chip.output.forEach((pin) => pin.position.add(delta));
            } else {
                chip.position.add(delta);
            }
        });
        this.state.Wires.forEach((wire) => wire.addDeltaToPoints(delta));
        this.state.Inputs.forEach((pin) => {
            if (pin.graphicalObject.current)
                pin.graphicalObject.current.style.top = String(
                    pin.position.y + delta.y
                );
            if (pin.updatePos) pin.updatePos();
        });
        this.state.Outputs.forEach((pin) => {
            if (pin.graphicalObject.current)
                pin.graphicalObject.current.style.top = String(
                    pin.position.y + delta.y
                );
            if (pin.updatePos) pin.updatePos();
        });

        this.lastSizeWindow = newSizeWindow;
        this.forceUpdate();
    };

    componentDidMount(): void {
        this.lastSizeWindow = new Pos(window.innerWidth, window.innerHeight);
        window.addEventListener("keydown", this.handleKeyDown);
        window.addEventListener("resize", this.onResize);
    }

    componentWillUnmount(): void {
        window.removeEventListener("keydown", this.handleKeyDown);
        window.removeEventListener("resize", this.onResize);
    }

    removeWire = (wire: Wire) => {
        wire.deletingWire();
        this.setState((prev) => {
            removeElement(prev.Wires, wire);
            return {
                Wires: prev.Wires,
            };
        });
    };

    addWire = (wire: Wire) => {
        if (!wire.error)
            this.setState((prev) => ({ Wires: [...prev.Wires, wire] }));
    };

    addPin = (pin: Pin) => {
        if (pin.isInput)
            this.setState((prev) => ({ Inputs: [...prev.Inputs, pin] }));
        else this.setState((prev) => ({ Outputs: [...prev.Outputs, pin] }));
    };

    removePin = (pin: Pin) => {
        while (pin.inWires.length != 0) this.removeWire(pin.inWires[0]);
        while (pin.outWires.length != 0) this.removeWire(pin.outWires[0]);
        if (pin.isInput)
            this.setState((prev) => ({
                Inputs: removeElement(prev.Inputs, pin),
            }));
        else
            this.setState((prev) => ({
                Outputs: removeElement(prev.Outputs, pin),
            }));
    };

    setAddingChip = (chipName: string) => {
        if (chipName != "BUS")
            this.setState({
                AddingChip: this.saveManager.loadChipByName(chipName),
                AddingBus: false,
                AddingChipCount: 1,
                showCircleAdding: new Array(9).fill(false),
            });
        else
            this.setState({
                AddingBus: true,
                AddingChip: undefined,
                AddingChipCount: 1,
                showCircleAdding: new Array(9).fill(false),
            });
    };

    addChips = (chips: Chip[]) => {
        this.setState((prev) => {
            return {
                SubChips: [...prev.SubChips, ...chips],
            };
        });
    };

    addBus = (from: Pos, to: Pos) => {
        this.setState((prev) => ({
            AddingBus: false,
            AddingChipCount: 1,
            AddingChip: undefined,
            SubChips: [
                ...prev.SubChips,
                ...new Array(prev.AddingChipCount).fill(0).map((_, i) => {
                    return new Bus(
                        new Pos(from.x + manyBusSpace * i, from.y),
                        new Pos(to.x + manyBusSpace * i, to.y)
                    );
                }),
            ],
        }));
    };

    remBus = (bus: Bus) => {
        bus.depentBus.forEach((dep) => removeElement(dep.depentBus, bus));
        bus.input.forEach((pin) => {
            pin.inWires.forEach((wire) => this.removeWire(wire));
            pin.outWires.forEach((wire) => this.removeWire(wire));
        });
        bus.output.forEach((pin) => {
            pin.inWires.forEach((wire) => this.removeWire(wire));
            pin.outWires.forEach((wire) => this.removeWire(wire));
        });
        removeElement(this.state.SubChips, bus);
    };

    clearAdding = () => {
        this.setState({ AddingChip: undefined, AddingChipCount: 1 });
    };

    clearSelections = () => {
        this.state.SubChips.forEach((chip) => (chip.selected = false));
    };

    interactPin = {
        current: (_pin: Pin, _ctrlKey: boolean, _point?: Pos) => {},
    }; // Переопределяется в VM->Wires->RWireIncomplete.tsx Необходим для протягивания провода
    wirePointClick = {
        current: (_e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {},
    }; // Переопределяется в VM->Wires->RWireIncomplete.tsx

    render(): ReactNode {
        return (
            <div className={cl.EditPage}>
                <svg
                    className={cl.EditView}
                    onClick={(e) => {
                        this.wirePointClick.current(e);
                    }}
                >
                    <RWireIncomplete
                        addWire={this.addWire}
                        interactPin={this.interactPin}
                        WirePointClick={this.wirePointClick}
                    />

                    <RBusIncomplete
                        enabled={this.state.AddingBus}
                        addNewBus={this.addBus}
                        addingCount={this.state.AddingChipCount}
                    />

                    <g
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        {this.state.Wires.map((wire) => (
                            <RWire
                                wire={wire}
                                deleteWire={this.removeWire}
                                key={wire.id}
                            />
                        ))}
                    </g>
                    <g>
                        {(
                            this.state.SubChips.filter(
                                (chip) => chip.chipType == ChipTypes.BUS
                            ) as Bus[]
                        ).map((bus) => (
                            <RBus
                                Bus={bus}
                                removeBus={this.remBus}
                                interactPin={this.interactPin}
                                key={bus.id}
                            />
                        ))}
                    </g>
                </svg>
                <SidePinField
                    Pins={this.state.Inputs}
                    interactPin={this.interactPin}
                    currentChip={this.state.CurrentChip}
                    isInput
                    addNewPin={this.addPin}
                    deletePin={this.removePin}
                    showPinTitle={this.state.showAllPinTitles}
                />
                <div className={cl.ChipField}>
                    {this.state.SubChips.filter(
                        (chip) => chip.chipType == ChipTypes.Default
                    ).map((chip) => (
                        <DefaultChip
                            key={chip.id}
                            chip={chip}
                            interactPin={this.interactPin}
                            showPinTitles={
                                this.state.showAllPinTitles
                                    ? this.state.showChipPinTitles
                                    : false
                            }
                            clearSelection={this.clearSelections}
                        />
                    ))}
                    <AddingChipsBox
                        AddingChip={this.state.AddingChip}
                        AddingChipCount={this.state.AddingChipCount}
                        saveManager={this.saveManager}
                        addChips={this.addChips}
                        clearAdding={this.clearAdding}
                    />
                </div>
                <SidePinField
                    Pins={this.state.Outputs}
                    interactPin={this.interactPin}
                    currentChip={this.state.CurrentChip}
                    disabled
                    addNewPin={this.addPin}
                    deletePin={this.removePin}
                    showPinTitle={this.state.showAllPinTitles}
                />
                <div>
                    {this.state.showCircleAdding.map((enabledI, i) => (
                        <CircleAdding
                            key={i}
                            circleID={i}
                            enabled={enabledI}
                            addNewChip={this.setAddingChip}
                            setEnabled={(e: boolean) => {
                                this.setState(() => {
                                    const newCircleState = new Array(9).fill(
                                        false
                                    );
                                    newCircleState[i] = e;
                                    return { showCircleAdding: newCircleState };
                                });
                            }}
                            saveManager={this.saveManager}
                        />
                    ))}
                </div>
                <ChipList
                    enabled={this.state.showLibrary}
                    currentChip={this.state.CurrentChip}
                    setEnabled={this.setLibrary}
                    saveManager={this.saveManager}
                    loadChip={this.loadChip}
                    addChip={this.setAddingChip}
                    newChip={this.newChip}
                />
                {/** maximum 12 элементов */}
                <Modal
                    setEnabled={this.setModal}
                    enabled={this.state.enabledModal}
                >
                    {this.state.modalContent}
                </Modal>
            </div>
        );
    }

    initHotKeys() {
        hotkeys.hideAllPin.event = () => {
            this.setState((prev) => {
                localStorage.setItem(
                    "showingAllPinTitles",
                    prev.showAllPinTitles ? "false" : "true"
                );
                localStorage.setItem(
                    "showingPinTitles",
                    prev.showAllPinTitles ? "false" : "true"
                );
                return {
                    showAllPinTitles: !prev.showAllPinTitles,
                    showChipPinTitles: !prev.showAllPinTitles,
                };
            });
        };
        hotkeys.hideChipPins.event = () => {
            this.setState((prev) => {
                localStorage.setItem(
                    "showingPinTitles",
                    prev.showChipPinTitles ? "false" : "true"
                );
                return { showChipPinTitles: !prev.showChipPinTitles };
            });
        };
        hotkeys.library.event = () => {
            console.log(this.state.showLibrary);
            this.setState((prev) => ({
                showLibrary: !prev.showLibrary,
                showCircleAdding: new Array(9).fill(false),
                enabledModal: false,
            }));
        };
        hotkeys.save.event = () => {
            if (
                this.saveManager.Chips.find(
                    (chip) => chip.name == this.state.CurrentChip.name
                )
            )
                this.saveManager.saveNewChip(
                    this.state.CurrentChip,
                    this.state.CurrentChip.name,
                    this.state.CurrentChip.color,
                    undefined,
                    true
                );
            else
                this.setState({
                    enabledModal: true,
                    modalContent: (
                        <SaveChip
                            saveManager={this.saveManager}
                            currentChip={this.state.CurrentChip}
                            setEnabled={this.setModal}
                        />
                    ),
                });
        };
        hotkeys.newChip.event = () => {
            this.setState({
                showLibrary: false,
                showCircleAdding: new Array(9).fill(false),
                enabledModal: false,
            });
            this.newChip();
        };
        hotkeys.addCount.event = () => {
            this.setState((prev) => ({
                AddingChipCount: prev.AddingChipCount + 1,
            }));
        };
        hotkeys.reduceCount.event = () => {
            this.setState((prev) => ({
                AddingChipCount:
                    prev.AddingChipCount - 1 > 0
                        ? prev.AddingChipCount - 1
                        : prev.AddingChipCount,
            }));
        };
        hotkeys.cancelAction.event = () => {
            this.setState({
                showCircleAdding: new Array(9).fill(false),
                AddingChip: undefined,
                AddingBus: false,
                showLibrary: false,
                AddingChipCount: 1,
            });
        };
        hotkeys.remove.event = () => {
            this.setState((prev) => {
                const chipsToRemove = prev.SubChips.filter(
                    (chip) => chip.selected
                );
                for (let chipRemoving of chipsToRemove) {
                    chipRemoving.input.forEach((pin) =>
                        pin.removeAllWire(prev.Wires)
                    );
                    chipRemoving.output.forEach((pin) =>
                        pin.removeAllWire(prev.Wires)
                    );
                    removeElement(prev.SubChips, chipRemoving);
                }
                return {
                    SubChips: prev.SubChips,
                    Wires: prev.Wires,
                };
            });
        };
    }
}
