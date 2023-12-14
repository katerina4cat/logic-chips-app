import { Component, ReactNode, createRef } from "react";
import cl from "./RWire.module.scss";
import { Wire } from "../../Simulating/Wire";

interface RequiredProps {
    wire: Wire;
    deleteWire: (wire: Wire) => void;
}

interface States {}

export class RWire extends Component<RequiredProps, States> {
    state: Readonly<States> = {};
    constructor(props: RequiredProps) {
        super(props);
        props.wire.graphicObject = createRef();
    }

    handleKeydown = (e: KeyboardEvent) => {
        if (e.key == "Backspace") this.props.deleteWire(this.props.wire);
    };

    render(): ReactNode {
        return (
            <path
                className={cl.RWire}
                fill="none"
                ref={this.props.wire.graphicObject}
                onMouseEnter={() =>
                    window.addEventListener("keydown", this.handleKeydown)
                }
                onMouseLeave={() =>
                    window.removeEventListener("keydown", this.handleKeydown)
                }
            ></path>
        );
    }
}
