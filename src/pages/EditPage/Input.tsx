import { useState } from "react";
import { Pin } from "../../common/Simulating/Pin";

interface PinReq extends React.HTMLAttributes<HTMLInputElement> {
    pin: Pin;
}

const Input: React.FC<PinReq> = (props) => {
    const [value, setValue] = useState(props.pin.Name);
    return (
        <input
            {...props}
            value={value}
            onChange={(e) => {
                setValue(e.target.value);
                props.pin.Name = e.target.value;
            }}
            onBlur={() => {
                if (value.trim() == "") {
                    setValue("Pin");
                }
            }}
            tabIndex={-1}
            style={{ width: `${value.length + 1}ch` }}
        />
    );
};

export default Input;
