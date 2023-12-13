import { Component, ReactNode, createRef } from "react";
import cl from "./PWire.module.scss";
import { Wire } from "../../Simulating/Wire";

interface RequiredProps {
    wire: Wire;
}

interface States {}

export class PWire extends Component<RequiredProps, States> {
    state: Readonly<States> = {};
    constructor(props: RequiredProps) {
        super(props);
        props.wire.graphicObject = createRef();
    }

    componentDidMount(): void {
        this.props.wire.updateColor();
        // this.props.wire.drawWire();
    }

    render(): ReactNode {
        return (
            <path
                className={cl.PWire}
                ref={this.props.wire.graphicObject}
            ></path>
        );
    }
}
