import React, { useEffect, useRef, useState } from "react";
import cl from "./EditPage.module.scss";
import { CreateBaseChip } from "../../common/CustomChip";
import EditPagePin from "./EditPagePin";
import { PinState } from "../../common/Pin";

interface EditReq {}

const EditPage: React.FC<EditReq> = () => {
    const editChip = useRef(CreateBaseChip("SR-LATCH", 0));

    const [OutputPins, setOutputPins] = useState<PinState[]>([]);

    const handleChangeInputPin = useRef(() => {
        editChip.current.RecurseState();
        setOutputPins(editChip.current.OutputPins.map((pin) => pin.State));
    });

    useEffect(() => {
        setInterval(handleChangeInputPin.current, 500);
    }, []);

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
