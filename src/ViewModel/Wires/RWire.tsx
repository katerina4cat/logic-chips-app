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
    }

    componentDidMount(): void {
        this.props.wire.drawWire();
        this.props.wire.updateColor();
    }

    componentWillUnmount(): void {
        document.removeEventListener("keydown", this.handleKeydown);
    }

    handleKeydown = (e: KeyboardEvent) => {
        if (e.key == "Backspace") this.props.deleteWire(this.props.wire);
    };

    render(): ReactNode {
        return (
            <path
                className={cl.RWire}
                ref={this.props.wire.graphicObject}
                onMouseOver={() =>
                    document.addEventListener("keydown", this.handleKeydown)
                }
                onMouseOut={() =>
                    document.removeEventListener("keydown", this.handleKeydown)
                }
            ></path>
        );
    }
}
