import { useEffect, useState } from "react";
import { Pin } from "../../common/Pin";

interface ReqPin {
    Pin: Pin;
    handleChangeInputPin: React.MutableRefObject<() => void>;
}

const EditPagePin: React.FC<ReqPin> = (props) => {
    const [pinState, setpinState] = useState(0);
    useEffect(() => {
        props.Pin.State.value = pinState;
    }, []);
    useEffect(() => {
        props.handleChangeInputPin.current();
    }, [pinState]);
    return (
        <button
            onClick={() => {
                setpinState((prev) => {
                    const res = prev ? 0 : 1;
                    props.Pin.State.value = res;
                    return res;
                });
            }}
        >
            {props.Pin.Name}
            <br />
            {pinState}
        </button>
    );
};

export default EditPagePin;
