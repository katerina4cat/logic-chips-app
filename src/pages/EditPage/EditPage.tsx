import React, { useEffect, useRef, useState } from "react";
import cl from "./EditPage.module.scss";
import { CustomChip } from "../../common/CustomChip";
import EditPagePin from "./EditPagePin";
import { PinState } from "../../common/Pin";

interface EditReq {}

const EditPage: React.FC<EditReq> = () => {
    const editChip = useRef(CustomChip.FromJSON("NAND", 0));

    const [OutputPins, setOutputPins] = useState<PinState[]>([]);

    const handleChangeInputPin = () => {
        editChip.current.RecurseState();
        setOutputPins(editChip.current.OutputPins.map((pin) => pin.State));
    };

    console.log(editChip.current);

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
                {OutputPins.map((pin) => (
                    <button>{pin}</button>
                ))}
            </div>
        </div>
    );
};

export default EditPage;
