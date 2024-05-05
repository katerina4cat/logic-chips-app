import { Component, ReactNode, createRef } from "react";
import cl from "./ContextMenu.module.scss";
import { Pos } from "../../../common/Pos";
import React from "react";

interface RequiredProps {
    enabled: boolean;
    pos: Pos;
    setEnabled: (e: boolean) => void;
}

interface States {}

export class ContextMenu extends Component<
    React.HTMLAttributes<HTMLDivElement> & RequiredProps,
    States
> {
    state: Readonly<States> = {};
    constructor(props: RequiredProps) {
        super(props);
    }

    handleClickOutside = (e: MouseEvent) => {
        if (this.ref.current && !this.ref.current.contains(e.target as Node))
            this.props.setEnabled(false);
    };

    componentDidMount(): void {
        window.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount(): void {
        window.removeEventListener("mousedown", this.handleClickOutside);
    }

    ref = createRef<HTMLDivElement>();

    render(): ReactNode {
        return (
            <div
                {...this.props}
                style={{
                    top: this.props.pos.y,
                    left: this.props.pos.x,
                    display: this.props.enabled ? "flex" : "none",
                }}
                ref={this.ref}
                className={`${cl.ContextMenu} ${this.props.className}`}
            />
        );
    }
}
