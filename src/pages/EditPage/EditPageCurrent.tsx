import { useRef, useState } from "react";
import EditChip from "./EditChip";
import { HotKeys } from "react-hotkeys";
import { CreateChip } from "../../common/LoadSave";
import Modal from "../Modal/Modal";
import { chips } from "../../common/chips";
import cl from "./EditPageCurrent.module.scss";
import { ChipModel } from "../../common/ChipModel";

const EditPageCurrent = () => {
    const [VisiblePinTitles, setVisiblePinTitles] = useState(true);
    const [VisibleAllPinTitles, setVisibleAllPinTitles] = useState(true);

    const [chipsSelected, setchipsSelected] = useState("OR");

    const [editChip, setEditChip] = useState<ChipModel>(
        CreateChip(chipsSelected, 0)
    );

    const setModalEditState = useRef<(e: boolean) => void>(() => {});

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
            <div style={{ height: "100%", width: "100%" }}>
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
                                    setchipsSelected(chipName);
                                    setEditChip(CreateChip(chipName, 0));
                                    setModalEditState.current(false);
                                }}
                            >
                                {chipName}
                            </button>
                        ))}
                    </div>
                </Modal>
                <EditChip
                    chipModel={editChip}
                    VisibleAllPinTitles={VisibleAllPinTitles}
                    VisiblePinTitles={VisiblePinTitles}
                />
            </div>
        </HotKeys>
    );
};

export default EditPageCurrent;
