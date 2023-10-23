import React, { useRef, useState } from "react";
import cl from "./EditPage.module.scss";
import { CustomChip } from "../../common/CustomChip";

interface EditReq {
    chipFile: string;
}

const EditPage: React.FC<EditReq> = (props) => {
    const editChip = useRef(CustomChip.FromJSON("OR", 0));
    const [fir, setfir] = useState(0);
    const [sec, setsec] = useState(0);
    editChip.current.InputPins[0].State = fir;
    editChip.current.InputPins[1].State = sec;
    editChip.current.setConnection();
    editChip.current.StartChipLogic();

    return (
        <div className={cl.EditPage}>
            <button onClick={() => setfir((prev) => (prev === 0 ? 1 : 0))}>
                {fir}
            </button>
            <button onClick={() => setsec((prev) => (prev === 0 ? 1 : 0))}>
                {sec}
            </button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <button>{editChip.current.OutputPins[0].State}</button>
        </div>
    );
};

export default EditPage;
