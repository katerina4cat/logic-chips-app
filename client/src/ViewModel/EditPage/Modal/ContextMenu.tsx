import { createRef } from "react";
import cl from "./ContextMenu.module.scss";
import { Pos } from "../../../common/Pos";
import React from "react";
import { ViewModel, view } from "@yoskutik/react-vvm";
import { makeObservable } from "mobx";

interface RequiredProps {
    enabled: boolean;
    setEnabled: (e?: boolean) => void;
    pos: Pos;
}

export class ContexViewModel extends ViewModel<
    undefined,
    React.HTMLAttributes<HTMLDivElement> & RequiredProps
> {
    ref = createRef<HTMLDivElement>();

    constructor() {
        super();
        makeObservable(this);
    }

    handleClickOutside = (e: MouseEvent) => {
        if (this.ref.current && !this.ref.current.contains(e.target as Node))
            this.viewProps.setEnabled(false);
    };

    componentDidMount(): void {
        window.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount(): void {
        window.removeEventListener("mousedown", this.handleClickOutside);
    }
}

export const ContextMenu = view(ContexViewModel)<
    React.HTMLAttributes<HTMLDivElement> & RequiredProps
>(({ viewModel }) => {
    return (
        <div
            {...viewModel.viewProps}
            style={{
                top: viewModel.viewProps.pos.y,
                left: viewModel.viewProps.pos.x,
                display: viewModel.viewProps.enabled ? "flex" : "none",
            }}
            ref={viewModel.ref}
            className={`${cl.ContextMenu} ${viewModel.viewProps.className}`}
        />
    );
});
