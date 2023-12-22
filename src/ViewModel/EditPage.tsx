import { Component, ReactNode, createRef } from "react";
import cl from "./EditPage.module.scss";
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
import React from "react";
import { SaveInfo } from "../Structs/SaveInfo";
import { ChipMinimalInfo } from "../Structs/ChipMinimalInfo";
import { Modal } from "./Modal/Modal";
import { SaveChip } from "./Modal/SaveChip";

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
    showCircleAdding: boolean;
    CursorPosition: Pos;
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
        CursorPosition: new Pos(),
        showChipPinTitles:
            (localStorage.getItem("showingPinTitles") || "true") == "true",
        showAllPinTitles:
            (localStorage.getItem("showingAllPinTitles") || "true") == "true",
        showCircleAdding: false,
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
        if (e.key == "1" && e.altKey) {
            this.setState((prev) => ({
                showCircleAdding: !prev.showCircleAdding,
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
                showCircleAdding: false,
                AddingChip: undefined,
                AddingChipCount: 1,
            });
        }
        if (
            (e.key == "s" || e.key == "S" || e.key == "ы" || e.key == "Ы") &&
            e.ctrlKey
        ) {
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

    handleMouseMove = (e: MouseEvent) => {
        this.setState((prev) => {
            prev.CursorPosition.x = e.pageX;
            prev.CursorPosition.y = e.pageY;
            return { CursorPosition: prev.CursorPosition };
        });
    };

    componentDidMount(): void {
        window.addEventListener("keydown", this.handleKeyDown);
        window.addEventListener("mousemove", this.handleMouseMove);
        const chip = this.saveManager.loadChipByName("NAND", undefined, 0);

        this.setState({
            Wires: chip.wires,
            Inputs: chip.input,
            Outputs: chip.output,
            SubChips: chip.subChips,
        });
    }
    componentWillUnmount(): void {
        window.removeEventListener("keydown", this.handleKeyDown);
        window.removeEventListener("mousemove", this.handleMouseMove);
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
            showCircleAdding: false,
        });
    };

    handleClickToPlaceChip = () => {
        if (!this.state.AddingChip || !this.addingChipBoxRef.current) return;
        try {
            const curretTime = Date.now();
            if (this.addingChipBoxRef.current?.children.length > 0)
                this.setState((prev) => {
                    return {
                        SubChips: [
                            ...prev.SubChips,
                            ...(Array.from(
                                this.addingChipBoxRef.current?.children || []
                            )
                                .map((child, i) => {
                                    const box = child?.getBoundingClientRect();
                                    return prev.AddingChip
                                        ? this.saveManager.loadChipByName(
                                              prev.AddingChip.name,
                                              new Pos(box?.x, box?.y),
                                              curretTime + i
                                          )
                                        : undefined;
                                })
                                .filter(Boolean) as Chip[]),
                        ],
                    };
                });
        } catch (err: any) {
            console.log(err);
        }
        setTimeout(() => {
            this.setState({ AddingChip: undefined, AddingChipCount: 1 });
        }, 1);
    };

    clearSelections = () => {
        this.state.SubChips.forEach((chip) => (chip.selected = false));
    };

    interactPin = { current: (pin: Pin, ctrlKey: boolean) => {} }; // Переопределяется в VM->Wires->RWireIncomplete.tsx Необходим для протягивания провода
    wirePointClick = {
        current: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {},
    }; // Переопределяется в VM->Wires->RWireIncomplete.tsx

    addingChipBoxRef = createRef<HTMLDivElement>();

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
                            CursorPosition={this.state.CursorPosition}
                        />
                    ))}

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            position: "absolute",
                            left: this.state.CursorPosition.x - 25,
                            top: this.state.CursorPosition.y - 25,
                        }}
                        ref={this.addingChipBoxRef}
                    >
                        {new Array(this.state.AddingChipCount)
                            .fill(1)
                            .map((e) => (
                                <DefaultChip
                                    isPreview
                                    chip={this.state.AddingChip}
                                    interactPin={{
                                        current: function (pin: Pin): void {},
                                    }}
                                    clearSelection={() => {}}
                                    CursorPosition={this.state.CursorPosition}
                                />
                            ))}
                    </div>
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
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        display: this.state.AddingChip ? "block" : "none",
                        position: "fixed",
                        left: 0,
                        top: 0,
                    }}
                    onMouseDown={(e) => e.stopPropagation()}
                    onClick={(e) => e.stopPropagation()}
                    onMouseUp={(e) => {
                        e.stopPropagation();
                        this.handleClickToPlaceChip();
                    }}
                ></div>
                <CircleAdding
                    enabled={this.state.showCircleAdding}
                    elements={
                        this.saveManager.Wheels[0]
                            .map((wheelItem) =>
                                this.saveManager.Chips.find(
                                    (chip) => chip.name == wheelItem
                                )
                            )
                            .filter(Boolean) as ChipMinimalInfo[]
                    }
                    addNewChip={this.setAddingChip}
                    setEnabled={(e: boolean) => {
                        this.setState({ showCircleAdding: e });
                    }}
                    saveManager={this.saveManager}
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
