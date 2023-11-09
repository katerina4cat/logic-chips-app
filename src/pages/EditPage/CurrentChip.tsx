import { Component, ReactNode, createRef } from "react";
import { ChipModel } from "../../common/Simulating/ChipModel";
import { CreateChip } from "../../common/LoadSave/LoadSave";
import { WireIncomplete } from "../../common/Simulating/WireIncomplete";
import { Pin } from "../../common/Simulating/Pin";
import cl from "./EditChip.module.scss";
import { BUS } from "../../common/Simulating/BUS";
import { BusDrawer, Bus } from "./Bus";
import Chip from "./Chip";
import EditPageOutPin from "./CurrentChipPins/EditPageOutPin";
import EditPagePin from "./CurrentChipPins/EditPagePin";
import { WireGraphics } from "./Wire";
import { WireIncompleteGraphics } from "./WireIncomplete";

interface RequiredProps {
    chipName: string;
    VisiblePinTitles: boolean | undefined;
    VisibleAllPinTitles: boolean | undefined;
}

interface CurrentChipStates {
    OpenedChipModel: ChipModel;
    SelectedSubChips: ChipModel[];
    SetupsInput: number;
    VisiblePinTitles: boolean;
    VisibleAllPinTitles: boolean;
    OutputPins: Pin[];
}

export const sideWidth = 45;

export class CurrentChip extends Component<RequiredProps, CurrentChipStates> {
    state: Readonly<CurrentChipStates> = {
        OpenedChipModel: CreateChip(this.props.chipName, 0),
        SelectedSubChips: [],
        SetupsInput: 0,
        VisiblePinTitles:
            this.props.VisiblePinTitles != undefined
                ? this.props.VisiblePinTitles
                : true,
        VisibleAllPinTitles:
            this.props.VisibleAllPinTitles != undefined
                ? this.props.VisibleAllPinTitles
                : true,
        OutputPins: [],
    };
    SvgElementRef = createRef<SVGSVGElement>();
    WireIncompleteRef = createRef<SVGPathElement>();
    NewWire = new WireIncomplete(this.WireIncompleteRef);
    ChipLoaded = false;
    constructor(props: RequiredProps) {
        super(props);
    }

    updateAll = () => {
        this.setState({ OutputPins: this.state.OpenedChipModel.OutputPins });
    };
    IncrementLoadedInput = () => {
        this.setState((prev) => {
            const Loaded = prev.SetupsInput + 1;
            if (Loaded == this.state.OpenedChipModel.InputPins.length)
                this.ChipLoaded = true;
            return { SetupsInput: Loaded };
        });
    };
    SetSelectedChip = (chip: ChipModel[]) => {
        this.setState({ SelectedSubChips: chip });
    };

    render(): ReactNode {
        return (
            <div className={cl.EditPage}>
                <div className={cl.InputPins}>
                    {this.state.OpenedChipModel.InputPins.map((pinInput, i) => {
                        return (
                            <EditPagePin
                                key={this.state.OpenedChipModel.Name + i}
                                Pin={pinInput}
                                handleChangeInputPin={this.updateAll}
                                IncrementLoadedInput={this.IncrementLoadedInput}
                                VisiblePinTitles={
                                    this.state.VisibleAllPinTitles
                                }
                                updateAll={this.updateAll}
                                newWire={this.NewWire}
                                Wires={this.state.OpenedChipModel.Connections}
                            />
                        );
                    })}
                </div>
                <div className={cl.EditField} id="test">
                    <svg
                        style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            left: 0,
                            top: 0,
                        }}
                        ref={this.SvgElementRef}
                    >
                        <BusDrawer
                            buses={
                                this.ChipLoaded
                                    ? this.state.OpenedChipModel.SubChips.filter(
                                          (chip) => chip.Name == BUS.name
                                      )
                                    : []
                            }
                        />
                        {this.state.OpenedChipModel.Connections.map(
                            (WireObject) => (
                                <WireGraphics Wire={WireObject} />
                            )
                        )}
                        <WireIncompleteGraphics WireIncomplete={this.NewWire} />
                    </svg>
                    {this.ChipLoaded
                        ? this.state.OpenedChipModel.SubChips.map((chip) =>
                              chip.Name == "BUS" ? (
                                  <Bus chip={chip} />
                              ) : (
                                  <Chip
                                      setChipSelecting={this.SetSelectedChip}
                                      ChipSelecting={
                                          this.state.SelectedSubChips
                                      }
                                      chip={chip}
                                      MainChip={this.state.OpenedChipModel}
                                      VisiblePinTitles={
                                          this.state.VisiblePinTitles
                                      }
                                      updateAll={this.updateAll}
                                      newWire={this.NewWire}
                                      Wires={
                                          this.state.OpenedChipModel.Connections
                                      }
                                  />
                              )
                          )
                        : undefined}
                </div>
                <div className={cl.OutputPins}>
                    {this.ChipLoaded
                        ? this.state.OutputPins.map((pin) => (
                              <div>
                                  <EditPageOutPin
                                      Pin={pin}
                                      VisiblePinTitles={
                                          this.state.VisibleAllPinTitles
                                      }
                                      updateAll={this.updateAll}
                                      newWire={this.NewWire}
                                      Wires={
                                          this.state.OpenedChipModel.Connections
                                      }
                                  />
                              </div>
                          ))
                        : undefined}
                </div>
            </div>
        );
    }
}
