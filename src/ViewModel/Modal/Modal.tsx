import { Component, ReactNode } from "react";
import cl from "./Modal.module.scss";

interface RequiredProps {
    enabled: boolean;
    setEnabled: (e: boolean) => void;
    modalBG?: string;
}

interface States {}

export class Modal extends Component<
    RequiredProps & React.HTMLAttributes<HTMLDivElement>,
    States
> {
    state: Readonly<States> = {};
    constructor(props: RequiredProps) {
        super(props);
    }

    render(): ReactNode {
        return (
            <div
                className={cl.Modal}
                style={{ display: this.props.enabled ? "flex" : "none" }}
                onClick={(e) => {
                    e.stopPropagation();
                    this.props.setEnabled(false);
                }}
            >
                <div
                    {...this.props}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                    className={`${cl.ModalWindow} ${this.props.className}`}
                    style={
                        this.props.modalBG
                            ? { backgroundColor: this.props.modalBG }
                            : undefined
                    }
                />
            </div>
        );
    }
}
