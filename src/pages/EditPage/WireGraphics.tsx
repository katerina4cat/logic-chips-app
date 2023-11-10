import { Component, ReactNode, createRef } from "react";
import { Wire } from "../../common/Simulating/Wire";
import cl from "./Wire.module.scss";
import { debug } from "../../App";

interface RequiredProps {
    Wire: Wire;
    DeleteWire: (Wire: Wire) => void;
}

interface WireState {}

export class WireGraphics extends Component<RequiredProps, WireState> {
    state: Readonly<WireState> = {};
    constructor(props: RequiredProps) {
        super(props);
        props.Wire.WireGraphObject = createRef<SVGPathElement>();
    }
    handleKeyDownDeleting(e: KeyboardEvent) {
        this.props.DeleteWire(this.props.Wire);
    }
    render(): ReactNode {
        return (
            <g key={this.props.Wire.ID}>
                <path
                    ref={this.props.Wire.WireGraphObject}
                    stroke={this.props.Wire.getColorWithState()}
                    fill="none"
                    className={cl.WirePath}
                    id={this.props.Wire.ID.toString()}
                    d={this.props.Wire.generateStringPoints()}
                    tabIndex={0}
                    onMouseEnter={() =>
                        window.addEventListener(
                            "keydown",
                            this.handleKeyDownDeleting
                        )
                    }
                    onMouseLeave={() =>
                        window.removeEventListener(
                            "keydown",
                            this.handleKeyDownDeleting
                        )
                    }
                />
                {debug ? (
                    <text>
                        <textPath
                            href={`#${this.props.Wire.ID}`}
                            startOffset={"50%"}
                            fill="white"
                        >
                            {this.props.Wire.ID}
                        </textPath>
                    </text>
                ) : undefined}
            </g>
        );
    }
}
