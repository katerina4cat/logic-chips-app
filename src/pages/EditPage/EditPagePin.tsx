import { useEffect, useState } from "react";
import { PinInfo, PinState } from "../../common/Pin";

interface ReqPin {
    Pin: PinInfo;
    handleChangeInputPin: React.MutableRefObject<() => void>;
}

const EditPagePin: React.FC<ReqPin> = (props) => {
    const [pinState, setpinState] = useState(PinState.LOW);
    useEffect(() => {
        props.Pin.State = pinState;
        props.handleChangeInputPin.current();
    }, [pinState]);
    return (
        <button
            onClick={() => {
                setpinState((prev) =>
                    prev === PinState.LOW ? PinState.HIGH : PinState.LOW
                );
            }}
        >
            {props.Pin.Name}
            <br />
            {pinState}
        </button>
    );
};

export default EditPagePin;
