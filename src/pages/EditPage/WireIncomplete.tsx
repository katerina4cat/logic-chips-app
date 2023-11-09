import { Component, ReactNode } from "react";
import { WireIncomplete } from "../../common/Simulating/WireIncomplete";

interface RequiredProps {
    WireIncomplete: WireIncomplete;
}

interface WireIncompleteStates {}

export class WireIncompleteGraphics extends Component<
    RequiredProps,
    WireIncompleteStates
> {
    state: Readonly<WireIncompleteStates> = {};
    constructor(props: RequiredProps) {
        super(props);
    }
    render(): ReactNode {
        return (
            <path
                ref={this.props.WireIncomplete.WireGraphObject}
                stroke={this.props.WireIncomplete.getColorWithState()}
                strokeWidth="6px"
                fill="none"
            />
        );
    }
}
