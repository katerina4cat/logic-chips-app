import React, { useEffect, useRef, useState } from "react";
import cl from "./EditPage.module.scss";
import EditPagePin from "./EditPagePin";
import { CreateChip } from "../../common/LoadSave";

interface EditReq {}

const EditPage: React.FC<EditReq> = () => {
    const editChip = useRef(CreateChip("NAND", 0));

    const [OutputPins, setOutputPins] = useState<number[]>([]);

    const handleChangeInputPin = useRef(() => {
        editChip.current.RefreshLogic();
        setOutputPins(
            editChip.current.OutputPins.map((pin) => pin.State.value)
        );
        console.log(editChip.current);
    });

    // useEffect(() => {
    //     setInterval(handleChangeInputPin.current, 500);
    // }, []);

    return (
        <div className={cl.EditPage}>
            {editChip.current.InputPins.map((pinInput) => {
                return (
                    <EditPagePin
                        Pin={pinInput}
                        handleChangeInputPin={handleChangeInputPin}
                    />
                );
            })}
            <br />
            <br />
            <br />
            <br />
            <br />
            <div>
                {OutputPins.map((pin, i) => (
                    <button>
                        {editChip.current.OutputPins[i].Name}
                        <br />
                        {pin}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default EditPage;
