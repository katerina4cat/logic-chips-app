import React, { useState, useRef, useEffect } from "react";
import cl from "./EditPage.module.scss";
import EditPagePin from "./EditPagePin";
import { CreateChip } from "../../common/LoadSave";
import { chips } from "../../common/chips";
import Chip from "./Chip";
import Modal from "../Modal/Modal";
import { HotKeys } from "react-hotkeys";
import { Pin } from "../../common/Pin";
import EditPageOutPin from "./EditPageOutPin";

interface EditReq {}

const EditPage: React.FC<EditReq> = () => {
    const [chipsSelected, setchipsSelected] = useState("3AND");
    const [editChip, setEditChip] = useState(CreateChip(chipsSelected, 0));
    const setModalEditState = useRef((e: boolean) => {});
    const [setupsInput, setSetupsInput] = useState(0);
    const chipLoaded = setupsInput >= editChip.InputPins.length;

    const [OutputPins, setOutputPins] = useState<Pin[]>([]);

    const handleChangeInputPin = () => {
        setOutputPins([...editChip.OutputPins]);
        setEditChip((prev) => prev);
    };

    const keyMap = {
        SelectChipToEdit: "ctrl+e",
    };
    const handlers = {
        SelectChipToEdit: (keyboardEvent: any) => {
            keyboardEvent.preventDefault();
            setModalEditState.current(true);
        },
    };

    return (
        <HotKeys keyMap={keyMap} handlers={handlers}>
            <div className={cl.EditPage} style={{}}>
                <Modal
                    setOpenedRef={setModalEditState}
                    className={cl.OpenEditChipList}
                >
                    <div className={cl.ListObjects}>
                        {Object.keys(chips).map((chipName) => (
                            <button
                                className={cl.Button}
                                onClick={() => {
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
                            />
                        );
                    })}
                </div>
                <div className={cl.EditField}>
                    {chipLoaded
                        ? editChip.SubChips.map((chip) =>
                              chip.Name == "BUS" ? (
                                  <Chip chip={chip} />
                              ) : (
                                  <Chip chip={chip} />
                              )
                          )
                        : undefined}
                </div>
                <div className={cl.OutputPins}>
                    {chipLoaded
                        ? OutputPins.map((pin) => (
                              <div>
                                  <EditPageOutPin Pin={pin} />
                              </div>
                          ))
                        : undefined}
                </div>
            </div>
        </HotKeys>
    );
};

export default EditPage;
