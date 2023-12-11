import { Component, ReactNode } from "react";
import cl from "./RPin.module.scss";
import { Pin, State } from "../../Simulating/Pin";
import { getColorWithState } from "../Colors";

interface RequiredProps {
    Pin: Pin;
}

interface States {}

export class RPin extends Component<RequiredProps, States> {
    state: Readonly<States> = {};
    constructor(props: RequiredProps) {
        super(props);
    }

    render(): ReactNode {
        return (
            <circle
                className={cl.RPin}
                style={{
                    backgroundColor: getColorWithState(
                        this.props.Pin.getResultState(),
                        this.props.Pin.color
                    ),
                }}
            ></circle>
        );
    }
}
