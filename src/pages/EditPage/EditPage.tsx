import React, { useState, useRef } from "react";
import cl from "./EditPage.module.scss";
import EditPagePin from "./CurrentChipPins/EditPagePin";
import { CreateChip } from "../../common/LoadSave";
import { chips } from "../../common/chips";
import Chip from "./Chip";
import Modal from "../Modal/Modal";
import { HotKeys } from "react-hotkeys";
import { Pin } from "../../common/Pin";
import EditPageOutPin from "./CurrentChipPins/EditPageOutPin";
import { Bus, BusDrawer, LineDrawer } from "./Bus";
import { BUS } from "../../common/BUS";
import { ChipModel } from "../../common/ChipModel";

interface EditReq {}

const EditPage: React.FC<EditReq> = () => {
    const [chipsSelected, setchipsSelected] = useState("1bit-REGISTER");
    const [editChip, setEditChip] = useState(CreateChip(chipsSelected, 0));
    const setModalEditState = useRef((e: boolean) => {});
    const [setupsInput, setSetupsInput] = useState(0);
    const [VisiblePinTitles, setVisiblePinTitles] = useState(true);
    const [VisibleAllPinTitles, setVisibleAllPinTitles] = useState(true);
    const chipLoaded = setupsInput >= editChip.InputPins.length;

    const [OutputPins, setOutputPins] = useState<Pin[]>([]);

    const handleChangeInputPin = () => {
        setOutputPins([...editChip.OutputPins]);
        setEditChip((prev) => prev);
    };

    const keyMap = {
        SelectChipToEdit: ["ctrl+x", "ctrl+X", "ctrl+ч", "ctrl+Ч"],
        ChangePinTitles: "tab",
        ChangeAllPinTitles: ["q", "Q", "й", "Й"],
    };
    const handlers = {
        SelectChipToEdit: (keyboardEvent: any) => {
            keyboardEvent.preventDefault();
            setModalEditState.current(true);
        },
        ChangePinTitles: (keyboardEvent: any) => {
            keyboardEvent.preventDefault();
            setVisiblePinTitles((prev) => !prev);
        },
        ChangeAllPinTitles: (keyboardEvent: any) => {
            keyboardEvent.preventDefault();
            setVisibleAllPinTitles((prev) => {
                setVisiblePinTitles(!prev);
                return !prev;
            });
        },
    };

    return (
        <HotKeys keyMap={keyMap} handlers={handlers}>
            <div className={cl.EditPage}>
                <Modal
                    setOpenedRef={setModalEditState}
                    className={cl.OpenEditChipList}
                >
                    <div className={cl.ListObjects}>
                        {Object.keys(chips).map((chipName) => (
                            <button
                                className={cl.Button}
                                disabled={chipName == chipsSelected}
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                    setchipsSelected(chipName);
                                    setEditChip(CreateChip(chipName, 0));
                                    setOutputPins([]);
                                    setSetupsInput(0);
                                    setModalEditState.current(false);
                                }}
                            >
                                {chipName}
                            </button>
                        ))}
                    </div>
                </Modal>
                <div className={cl.InputPins}>
                    {editChip.InputPins.map((pinInput, i) => {
                        return (
                            <EditPagePin
                                key={editChip.Name + i}
                                Pin={pinInput}
                                handleChangeInputPin={handleChangeInputPin}
                                setupsInput={setSetupsInput}
                                VisiblePinTitles={VisibleAllPinTitles}
                            />
                        );
                    })}
                </div>
                <div className={cl.EditField}>
                    <BusDrawer
                        buses={
                            chipLoaded
                                ? editChip.SubChips.filter(
                                      (chip) => chip.Name == BUS.name
                                  )
                                : []
                        }
                    />
                    <LineDrawer
                        wires={chipLoaded ? editChip.Connections : []}
                    />
                    {chipLoaded
                        ? editChip.SubChips.map((chip) =>
                              chip.Name == "BUS" ? (
                                  <Bus chip={chip} />
                              ) : (
                                  <Chip
                                      chip={chip}
                                      updateWires={() => {
                                          setEditChip(editChip);
                                      }}
                                      VisiblePinTitles={VisiblePinTitles}
                                  />
                              )
                          )
                        : undefined}
                </div>
                <div className={cl.OutputPins}>
                    {chipLoaded
                        ? OutputPins.map((pin) => (
                              <div>
                                  <EditPageOutPin
                                      Pin={pin}
                                      VisiblePinTitles={VisibleAllPinTitles}
                                  />
                              </div>
                          ))
                        : undefined}
                </div>
            </div>
        </HotKeys>
    );
};

export default EditPage;
