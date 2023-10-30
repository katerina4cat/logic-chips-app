import React, { useState, useRef, useEffect } from "react";
import cl from "./EditChip.module.scss";
import EditPagePin from "./CurrentChipPins/EditPagePin";
import { CreateChip } from "../../common/LoadSave/LoadSave";
import { chips } from "../../common/LoadSave/chips";
import Chip from "./Chip";
import Modal from "../Modal/Modal";
import { HotKeys } from "react-hotkeys";
import { Pin } from "../../common/Simulating/Pin";
import EditPageOutPin from "./CurrentChipPins/EditPageOutPin";
import { Bus, BusDrawer, LineDrawer } from "./Bus";
import { BUS } from "../../common/Simulating/BUS";

interface EditReq {
    VisiblePinTitles?: boolean;
    VisibleAllPinTitles?: boolean;
}

const EditChip: React.FC<EditReq> = (props) => {
    const [chipsSelected, setchipsSelected] = useState("1bit-REGISTER");
    const [editChip, setEditChip] = useState(CreateChip(chipsSelected, 0));
    const setModalEditState = useRef((e: boolean) => {});
    const [setupsInput, setSetupsInput] = useState(0);
    const [VisiblePinTitles, setVisiblePinTitles] = useState<boolean>(
        props.VisiblePinTitles != undefined ? props.VisiblePinTitles : true
    );
    const [VisibleAllPinTitles, setVisibleAllPinTitles] = useState<boolean>(
        props.VisibleAllPinTitles != undefined
            ? props.VisibleAllPinTitles
            : true
    );

    useEffect(() => {
        window.localStorage.setItem(
            "VisiblePinTitles",
            VisiblePinTitles.toString()
        );
    }, [VisiblePinTitles]);
    useEffect(() => {
        window.localStorage.setItem(
            "VisibleAllPinTitles",
            VisibleAllPinTitles.toString()
        );
    }, [VisibleAllPinTitles]);

    const chipLoaded = setupsInput >= editChip.InputPins.length;

    const [OutputPins, setOutputPins] = useState<Pin[]>([]);

    const updateAll = () => {
        setOutputPins([...editChip.OutputPins]);
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

    const editPageRef = useRef<HTMLDivElement>(null);

    return (
        <HotKeys keyMap={keyMap} handlers={handlers}>
            <div className={cl.EditPage} ref={editPageRef}>
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
                                    editPageRef.current?.scrollTo(0, 0);
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
                                handleChangeInputPin={updateAll}
                                setupsInput={setSetupsInput}
                                VisiblePinTitles={VisibleAllPinTitles}
                                updateAll={updateAll}
                            />
                        );
                    })}
                </div>
                <div className={cl.EditField} id="test">
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
                        updateAll={updateAll}
                    />
                    {chipLoaded
                        ? editChip.SubChips.map((chip) =>
                              chip.Name == "BUS" ? (
                                  <Bus chip={chip} />
                              ) : (
                                  <Chip
                                      chip={chip}
                                      MainChip={editChip}
                                      VisiblePinTitles={VisiblePinTitles}
                                      updateAll={updateAll}
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
                                      updateAll={updateAll}
                                  />
                              </div>
                          ))
                        : undefined}
                </div>
            </div>
        </HotKeys>
    );
};

export default EditChip;
