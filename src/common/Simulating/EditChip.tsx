import { ReactNode, createRef } from "react";
import { BusDrawer, Bus } from "../../pages/EditPage/Bus";
import { Chip } from "../../pages/EditPage/Chip";
import { EditPageOutPin } from "../../pages/EditPage/CurrentChipPins/EditPageOutPin";
import EditPagePin from "../../pages/EditPage/CurrentChipPins/EditPagePin";
import { WireGraphics } from "../../pages/EditPage/WireGraphics";
import { WireIncompleteGraphics } from "../../pages/EditPage/WireIncomplete";
import { BUS } from "./BUS";
import { ChipModel, ChipModelRequiredProps } from "./ChipModel";
import cl from "../../pages/EditPage/EditChip.module.scss";
import { WireIncomplete } from "./WireIncomplete";
import { Wire } from "./Wire";
import { CustomChip } from "./CustomChip";

export const sideWidth = 45;

export class EditChip extends CustomChip {
    constructor(props: ChipModelRequiredProps) {
        super(props);
    }

    SvgElementRef = createRef<SVGSVGElement>();
    WireIncompleteRef = createRef<SVGPathElement>();
    NewWire = new WireIncomplete(this.WireIncompleteRef);

    IncrementLoadedInput = () => {
        this.setState((prev) => {
            const Loaded = prev.SetupsInput + 1;
            return {
                SetupsInput: Loaded,
                ChipLoaded: Loaded >= this.InputPins.length,
            };
        });
    };
    SetSelectedChip = (chip: ChipModel[]) => {
        this.setState({ SelectedSubChips: chip });
    };
    DeleteWire(Wire: Wire) {
        const index = this.Wires.indexOf(Wire);
        this.Wires.splice(index, 1);
    }

    updateAll() {
        console.log("first");
    }
    render(): ReactNode {
        return (
            <div className={cl.EditPage}>
                <div className={cl.InputPins}>
                    {this.InputPins.map((pinInput, i) => {
                        return (
                            <EditPagePin
                                key={this.Name + i}
                                Pin={pinInput}
                                handleChangeInputPin={this.updateAll}
                                IncrementLoadedInput={this.IncrementLoadedInput}
                                VisiblePinTitles={
                                    this.state.VisibleAllPinTitles
                                }
                                newWire={this.NewWire}
                                Wires={this.Wires}
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
                                this.state.ChipLoaded
                                    ? this.SubChips.filter(
                                          (chip) => chip.Name == BUS.name
                                      )
                                    : []
                            }
                        />
                        {this.state.ChipLoaded
                            ? this.Wires.map((WireObject) => (
                                  <WireGraphics
                                      Wire={WireObject}
                                      DeleteWire={this.DeleteWire}
                                  />
                              ))
                            : undefined}
                        <WireIncompleteGraphics WireIncomplete={this.NewWire} />
                    </svg>
                    {this.state.ChipLoaded
                        ? this.SubChips.map((chip) =>
                              chip.Name == "BUS" ? (
                                  <Bus chip={chip} />
                              ) : (
                                  <Chip
                                      setChipSelecting={this.SetSelectedChip}
                                      ChipSelecting={
                                          this.state.SelectedSubChips
                                      }
                                      chip={chip}
                                      MainChip={this}
                                      VisiblePinTitles={
                                          this.state.VisiblePinTitles
                                      }
                                      updateAll={this.updateAll}
                                      newWire={this.NewWire}
                                      Wires={this.Wires}
                                  />
                              )
                          )
                        : undefined}
                </div>
                <div className={cl.OutputPins}>
                    {this.state.ChipLoaded
                        ? this.state.OutputPins.map((pin) => (
                              <div>
                                  <EditPageOutPin
                                      Pin={pin}
                                      VisiblePinTitles={
                                          this.state.VisibleAllPinTitles
                                      }
                                      updateAll={this.updateAll}
                                      newWire={this.NewWire}
                                      Wires={this.Wires}
                                  />
                              </div>
                          ))
                        : undefined}
                </div>
            </div>
        );
    }
    override RefreshLogic() {
        this.OutputPins[0].State.value =
            this.InputPins[0].State.value == -1
                ? 1
                : this.InputPins[0].State.value
                ? 0
                : 1;
        return true;
    }
}
