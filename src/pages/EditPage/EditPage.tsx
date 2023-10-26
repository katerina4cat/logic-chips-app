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
    console.log(editChip);

    const [OutputPins, setOutputPins] = useState<Pin[]>([]);

    const handleChangeInputPin = () => {
        setOutputPins((prev) => [...editChip.OutputPins]);
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
                                    setOutputPins(editChip.OutputPins);
                                    setModalEditState.current(false);
                                }}
                            >
                                {chipName}
                            </button>
                        ))}
                    </div>
                </Modal>
                <div className={cl.InputPins}>
                    {editChip.InputPins.map((pinInput) => {
                        return (
                            <EditPagePin
                                Pin={pinInput}
                                handleChangeInputPin={handleChangeInputPin}
                            />
                        );
                    })}
                </div>
                <div className={cl.EditField}>
                    {editChip.SubChips.map((chip) => (
                        <Chip chip={chip} />
                    ))}
                </div>
                <div className={cl.OutputPins}>
                    {OutputPins.map((pin) => (
                        <div>
                            <EditPageOutPin Pin={pin} />
                        </div>
                    ))}
                </div>
            </div>
        </HotKeys>
    );
};

export default EditPage;
