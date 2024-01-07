import { Component, ReactNode } from "react";
import cl from "./ChipList.module.scss";
import { SaveInfo } from "../../Structs/SaveInfo";
import { Chip } from "../../Simulating/Chip";
import { EditCircleAdding } from "../CircleAdding/EditCircleAdding";

interface RequiredProps {
    enabled: boolean;
    saveManager: SaveInfo;
    currentChip: Chip;
    setEnabled: (e: boolean) => void;
    loadChip: (chipName: string) => void;
    addChip: (chipName: string) => void;
    newChip: () => void;
}

interface States {
    currentSelect?: string;
    circleID: number;
}

export class ChipList extends Component<RequiredProps, States> {
    state: Readonly<States> = { circleID: 0 };
    constructor(props: RequiredProps) {
        super(props);
    }

    componentDidUpdate(): void {
        if (!this.props.enabled && this.state.currentSelect != undefined)
            this.setState({ currentSelect: undefined });
        if (this.props.enabled)
            window.addEventListener("keydown", this.handleKeyDown);
        else window.removeEventListener("keydown", this.handleKeyDown);
    }

    componentDidMount(): void {
        window.addEventListener("keydown", this.handleKeyDown);
    }
    componentWillUnmount(): void {
        window.removeEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown = (e: KeyboardEvent) => {
        for (let i = 0; i < 9; i++)
            if (
                (!e.altKey || !e.ctrlKey || !e.shiftKey) &&
                e.key == (i + 1).toString()
            ) {
                this.setState({ circleID: i });
            }
    };

    render(): ReactNode {
        return (
            <div
                onClick={(e) => {
                    this.props.setEnabled(false), e.stopPropagation();
                }}
                style={{ display: this.props.enabled ? "flex" : "none" }}
                className={cl.ChipListEditor}
            >
                <div
                    className={cl.ChipList}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className={cl.Title}>Chip library</div>
                    <div
                        className={cl.List}
                        onClick={(e) => e.stopPropagation()}
                    >
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
                                draggable
                                onDragStart={(e) =>
                                    e.dataTransfer.setData("chip", chip.name)
                                }
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
                                ) ||
                                this.props.currentChip.name ==
                                    this.state.currentSelect
                            }
                            onClick={() => {
                                if (this.state.currentSelect) {
                                    this.props.loadChip(
                                        this.state.currentSelect
                                    );
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
                                        this.state.currentSelect
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
                            onClick={() => {
                                this.props.saveManager.removeChip(
                                    this.state.currentSelect || ""
                                );
                                this.forceUpdate();
                            }}
                        >
                            Удалить
                        </button>
                        <button
                            className={cl.Button}
                            onClick={this.props.newChip}
                        >
                            Новый чип
                        </button>
                    </div>
                </div>
                <EditCircleAdding
                    enabled={this.props.enabled}
                    setEnabled={() => {}}
                    saveManager={this.props.saveManager}
                    circleID={this.state.circleID}
                />
            </div>
        );
    }
}
