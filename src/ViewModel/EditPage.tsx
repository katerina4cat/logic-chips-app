import { Component, ReactNode, createRef } from "react";
import { Pin } from "../Simulating/Pin";
import { Pos } from "../common/Pos";
import { Chip } from "../Simulating/Chip";
import { Wire } from "../Simulating/Wire";
import { RWire } from "./Wires/RWire";
import { removeElement } from "../common/RemoveElement";
import { RWireIncomplete } from "./Wires/RWireIncomplete";
import { SidePinField } from "./SidePinField";
import { DefaultChip } from "./Chips/DefaultChip";
import { CircleAdding } from "./CircleAdding/CircleAdding";
import { SaveInfo } from "../Structs/SaveInfo";
import { ChipMinimalInfo } from "../Structs/ChipMinimalInfo";
import { Modal } from "./Modal/Modal";
import { SaveChip } from "./Modal/SaveChip";
import { ChipList } from "./Modal/ChipList";
import React from "react";
import cl from "./EditPage.module.scss";
import { AddingChipsBox } from "./Chips/AddingChipsBox";

interface RequiredProps {
    saveName: string;
}

interface States {
    Inputs: Pin[];
    Outputs: Pin[];
    SubChips: Chip[];
    Wires: Wire[];
    CurrentChip: Chip;
    AddingChip?: Chip;
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
        Wires: [],
        CurrentChip: new Chip(undefined, 0),
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
        if (e.key == "Tab") {
            e.preventDefault();
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
        }
        if (e.key == "Q" || e.key == "q" || e.key == "Й" || e.key == "й") {
            e.preventDefault();
            this.setState((prev) => {
                localStorage.setItem(
                    "showingPinTitles",
                    prev.showChipPinTitles ? "false" : "true"
                );
                return { showChipPinTitles: !prev.showChipPinTitles };
            });
        }
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
            }
        if (
            (e.key == "a" || e.key == "A" || e.key == "ф" || e.key == "Ф") &&
            e.ctrlKey
        ) {
            this.setState((prev) => ({
                showLibrary: !prev.showLibrary,
                showCircleAdding: new Array(9).fill(false),
                enabledModal: false,
            }));
        }
        if (e.key == "ArrowUp" || e.key == "ArrowRight") {
            this.setState((prev) => ({
                AddingChipCount: prev.AddingChipCount + 1,
            }));
        }
        if (e.key == "ArrowDown" || e.key == "ArrowLeft") {
            this.setState((prev) => ({
                AddingChipCount:
                    prev.AddingChipCount - 1 > 0
                        ? prev.AddingChipCount - 1
                        : prev.AddingChipCount,
            }));
        }
        if (e.key == "Escape") {
            this.setState({
                showCircleAdding: new Array(9).fill(false),
                AddingChip: undefined,
                AddingChipCount: 1,
            });
        }
        if (
            (e.key == "s" || e.key == "S" || e.key == "ы" || e.key == "Ы") &&
            e.ctrlKey
        ) {
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
            e.preventDefault();
        }
        if (e.key == "Backspace") {
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

    componentDidMount(): void {
        window.addEventListener("keydown", this.handleKeyDown);
    }
    componentWillUnmount(): void {
        window.removeEventListener("keydown", this.handleKeyDown);
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
    setAddingChip = (chip: Chip) => {
        this.setState({
            AddingChip: chip,
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

    clearAdding = () => {
        this.setState({ AddingChip: undefined, AddingChipCount: 1 });
    };

    clearSelections = () => {
        this.state.SubChips.forEach((chip) => (chip.selected = false));
    };

    interactPin = { current: (_pin: Pin, _ctrlKey: boolean) => {} }; // Переопределяется в VM->Wires->RWireIncomplete.tsx Необходим для протягивания провода
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
                    <RWireIncomplete
                        addWire={this.addWire}
                        interactPin={this.interactPin}
                        WirePointClick={this.wirePointClick}
                    />
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
                    {this.state.SubChips.map((chip) => (
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
                {this.state.showCircleAdding.map((enabledI, i) => (
                    <CircleAdding
                        key={i}
                        circleNumber={i}
                        enabled={enabledI}
                        elements={
                            this.saveManager.Wheels[i]
                                .map((wheelItem) =>
                                    this.saveManager.Chips.find(
                                        (chip) => chip.name == wheelItem
                                    )
                                )
                                .filter(Boolean) as ChipMinimalInfo[]
                        }
                        addNewChip={this.setAddingChip}
                        setEnabled={(e: boolean) => {
                            this.setState((prev) => {
                                const newCircleState = new Array(9).fill(false);
                                newCircleState[i] = e;
                                return { showCircleAdding: newCircleState };
                            });
                        }}
                        saveManager={this.saveManager}
                    />
                ))}
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
}
