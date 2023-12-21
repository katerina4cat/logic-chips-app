import { Component, ReactNode, createRef } from "react";
import cl from "./EditPage.module.scss";
import { Pin } from "../Simulating/Pin";
import { Pos } from "../common/Pos";
import { AND, Chip, NOT, TRI_STATE_BUFFER } from "../Simulating/Chip";
import { Wire } from "../Simulating/Wire";
import { RWire } from "./Wires/RWire";
import { removeElement } from "../common/RemoveElement";
import { RWireIncomplete } from "./Wires/RWireIncomplete";
import { SidePinField } from "./SidePinField";
import { DefaultChip } from "./Chips/DefaultChip";
import { CircleAdding } from "./CircleAdding/CircleAdding";
import { ChipMinimalInfo } from "../Structs/ChipMinimalInfo";
import { loadChipByName } from "../Simulating/LoadChip";
import React from "react";

interface RequiredProps {}

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
    };
    constructor(props: RequiredProps) {
        super(props);
        this.state.Inputs.push();
        this.state.Outputs.push();
        this.state.Wires.push();
        this.state.SubChips.push();
    }

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
            document.removeEventListener(
                "mousedown",
                this.handleClickToPlaceChip
            );
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
        document.addEventListener("keydown", this.handleKeyDown);
        window.addEventListener("mousemove", this.handleMouseMove);
    }
    componentWillUnmount(): void {
        document.removeEventListener("keydown", this.handleKeyDown);
        window.removeEventListener("mousemove", this.handleMouseMove);
        document.removeEventListener("mousedown", this.handleClickToPlaceChip);
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
        document.addEventListener("mousedown", this.handleClickToPlaceChip);
    };

    handleClickToPlaceChip = (e: MouseEvent) => {
        if (!this.state.AddingChip || !this.addingChipBoxRef.current) return;
        const curretTime = Date.now();
        this.setState((prev) => ({
            SubChips: [
                ...prev.SubChips,
                ...(Array.from(this.addingChipBoxRef.current?.children || [])
                    .map((child, i) => {
                        const box = child?.getBoundingClientRect();
                        return prev.AddingChip
                            ? loadChipByName(
                                  prev.AddingChip.name,
                                  new Pos(box?.x, box?.y),
                                  curretTime + i
                              )
                            : undefined;
                    })
                    .filter(Boolean) as Chip[]),
            ],
            AddingChipCount: 1,
            AddingChip: undefined,
        }));
    };

    interactPin = { current: (pin: Pin) => {} }; // Переопределяется в VM->Wires->RWireIncomplete.tsx Необходим для протягивания провода
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
                            chip={chip}
                            interactPin={this.interactPin}
                            showPinTitles={
                                this.state.showAllPinTitles
                                    ? this.state.showChipPinTitles
                                    : false
                            }
                        />
                    ))}

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            position: "absolute",
                            left: this.state.CursorPosition.x - 10,
                            top: this.state.CursorPosition.y - 5,
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
                <CircleAdding
                    enabled={this.state.showCircleAdding}
                    elements={[
                        new ChipMinimalInfo("AND", 2, 1, 1),
                        new ChipMinimalInfo("NOT", 2, 1, 1),
                        new ChipMinimalInfo("TRI-STATE BUFFER", 2, 1, 1),
                    ]}
                    addNewChip={this.setAddingChip}
                />
                {/** maximum 12 элементов */}
            </div>
        );
    }
}
