import React, { useState, useRef, useEffect } from "react";
import cl from "./EditChip.module.scss";
import EditPagePin from "./CurrentChipPins/EditPagePin";
import { ChipHasInChip, CreateChip } from "../../common/LoadSave/LoadSave";
import { chips } from "../../common/LoadSave/chips";
import Chip from "./Chip";
import Modal from "../Modal/Modal";
import { HotKeys } from "react-hotkeys";
import { Pin } from "../../common/Simulating/Pin";
import EditPageOutPin from "./CurrentChipPins/EditPageOutPin";
import { Bus, BusDrawer, LineDrawer } from "./Bus";
import { BUS } from "../../common/Simulating/BUS";
import { ChipModel } from "../../common/Simulating/ChipModel";
import { WireIncomplete } from "../../common/Simulating/WireIncomplete";

interface EditReq {
    VisiblePinTitles?: boolean;
    VisibleAllPinTitles?: boolean;
}

export const sideWidth = 45;

const EditChip: React.FC<EditReq> = (props) => {
    const [chipSelected, setchipSelected] = useState("1bit-REGISTER");
    const [addSelected, setAddSelected] = useState("");
    const [editChip, setEditChip] = useState(CreateChip(chipSelected, 0));
    const [AddingChips, setAddingChips] = useState<ChipModel[]>([]);
    const [SelectedChips, setSelectedChips] = useState<ChipModel[]>([]);
    const newWire = useRef(new WireIncomplete());

    const setModalEditState = useRef((e: boolean) => {});
    const setModalAddState = useRef((e: boolean) => {});
    const selectingFieldRef = useRef<SVGRectElement>(null);
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
        SelectChipToAdd: ["ctrl+a", "ctrl+A", "ctrl+ф", "ctrl+Ф"],
        ChangePinTitles: "tab",
        ChangeAllPinTitles: ["q", "Q", "й", "Й"],
    };
    const handlers = {
        SelectChipToEdit: (keyboardEvent: any) => {
            keyboardEvent.preventDefault();
            setModalEditState.current(true);
        },
        SelectChipToAdd: (keyboardEvent: any) => {
            keyboardEvent.preventDefault();
            setModalAddState.current(true);
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
    const addSelectedConflict = ChipHasInChip(chipSelected, addSelected);

    return (
        <HotKeys keyMap={keyMap} handlers={handlers}>
            <div
                className={cl.EditPage}
                ref={editPageRef}
                onClick={() => {
                    setSelectedChips([]);
                }}
            >
                <Modal
                    setOpenedRef={setModalEditState}
                    className={cl.OpenEditChipList}
                >
                    <h2>Открыть чип в редакторе</h2>
                    <div className={cl.ListObjects}>
                        {Object.keys(chips).map((chipName) => (
                            <button
                                className={cl.Button}
                                disabled={chipName == chipSelected}
                                onClick={() => {
                                    editPageRef.current?.scrollTo(0, 0);
                                    setchipSelected(chipName);
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
                <Modal
                    setOpenedRef={setModalAddState}
                    className={cl.OpenAddChipList}
                >
                    <h2>Добавить чип</h2>
                    <div className={cl.ListObjects}>
                        {Object.keys(chips).map((chipName) => (
                            <button
                                className={cl.Button}
                                style={{
                                    border:
                                        chipName == addSelected
                                            ? "2px solid lime"
                                            : "none",
                                }}
                                onClick={() => {
                                    setAddSelected(chipName);
                                }}
                            >
                                {chipName}
                            </button>
                        ))}
                    </div>
                    <div className={cl.AddChipActions}>
                        <button
                            className={cl.Button}
                            disabled={
                                addSelected == "" ||
                                addSelected == chipSelected ||
                                addSelectedConflict
                            }
                            onClick={() => {}}
                        >
                            Добавить
                        </button>
                        <button
                            className={cl.Button}
                            disabled={addSelected == ""}
                            onClick={() => {}}
                        >
                            Закрепить
                        </button>

                        <button
                            className={cl.Button}
                            disabled={addSelected == ""}
                            onClick={() => {}}
                        >
                            Удалить
                        </button>
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
                                newWire={newWire}
                                Wires={editChip.Connections}
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
                        draggingWire={newWire}
                        selectingFieldRef={selectingFieldRef}
                    />
                    {chipLoaded
                        ? editChip.SubChips.map((chip) =>
                              chip.Name == "BUS" ? (
                                  <Bus chip={chip} />
                              ) : (
                                  <Chip
                                      setChipSelecting={setSelectedChips}
                                      ChipSelecting={SelectedChips}
                                      chip={chip}
                                      MainChip={editChip}
                                      VisiblePinTitles={VisiblePinTitles}
                                      updateAll={updateAll}
                                      newWire={newWire}
                                      Wires={editChip.Connections}
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
                                      newWire={newWire}
                                      Wires={editChip.Connections}
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
