import { Component, ReactNode } from "react";

import cl from "./ChipList.module.scss";
import { Modal } from "./Modal";
import { SaveInfo } from "../../Structs/SaveInfo";
import { Chip } from "../../Simulating/Chip";

interface RequiredProps {
    enabled: boolean;
    saveManager: SaveInfo;
    currentChip: Chip;
    setEnabled: (e: boolean) => void;
    loadChip: (chipName: string) => void;
    addChip: (chip: Chip) => void;
}

interface States {
    currentSelect?: string;
}

export class ChipList extends Component<RequiredProps, States> {
    state: Readonly<States> = {};
    constructor(props: RequiredProps) {
        super(props);
    }

    render(): ReactNode {
        return (
            <Modal
                setEnabled={this.props.setEnabled}
                enabled={this.props.enabled}
                className={cl.ChipList}
                modalBG={`color-mix(in srgb, white 10%, transparent)`}
            >
                <div className={cl.List}>
                    {this.props.saveManager.Chips.map((chip) => (
                        <div
                            className={cl.LibraryItem}
                            onClick={() =>
                                this.setState({ currentSelect: chip.name })
                            }
                            style={{
                                backgroundColor:
                                    chip.name == this.state.currentSelect
                                        ? "rgba(84,174,37,0.25)"
                                        : "rgba(255,255,255,0.25)",
                            }}
                        >
                            {chip.name}
                        </div>
                    ))}
                </div>
                <div className={cl.ActionsField}>
                    <button
                        className={cl.Button}
                        disabled={
                            !this.state.currentSelect ||
                            /^(AND|NOT|TRI-STATE BUFFER|BUS)$/.test(
                                this.state.currentSelect
                            )
                        }
                        onClick={() => {
                            if (this.state.currentSelect) {
                                this.props.loadChip(this.state.currentSelect);
                                this.props.setEnabled(false);
                            }
                        }}
                    >
                        Изменить
                    </button>
                    <button
                        className={cl.Button}
                        disabled={
                            !this.state.currentSelect ||
                            !this.props.saveManager.canAddedChipToCurrentEdit(
                                this.props.currentChip.name,
                                this.state.currentSelect
                            )
                        }
                        onClick={() => {
                            if (this.state.currentSelect) {
                                this.props.setEnabled(false);
                                this.props.addChip(
                                    this.props.saveManager.loadChipByName(
                                        this.state.currentSelect
                                    )
                                );
                            }
                        }}
                    >
                        Добавить
                    </button>
                    <button
                        className={cl.Button}
                        disabled={
                            !this.state.currentSelect ||
                            /^(AND|NOT|TRI-STATE BUFFER|BUS)$/.test(
                                this.state.currentSelect
                            )
                        }
                    >
                        Удалить
                    </button>
                    <button
                        className={cl.Button}
                        disabled={!this.state.currentSelect}
                    >
                        Закрепить
                    </button>
                    <button className={cl.Button}>Новый чип</button>
                </div>
            </Modal>
        );
    }
}
