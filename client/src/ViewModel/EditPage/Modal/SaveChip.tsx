import { Component, ReactNode } from "react";
import cl from "./SaveChip.module.scss";
import { SaveInfo } from "../../../Structs/SaveInfo";
import { Chip } from "../../../Simulating/Chip";

interface RequiredProps {
    saveManager: SaveInfo;
    currentChip: Chip;
    setEnabled: (e: boolean) => void;
}

interface States {
    chipTitle: string;
    chipColor: string;
}

export class SaveChip extends Component<RequiredProps, States> {
    constructor(props: RequiredProps) {
        super(props);
        this.state = {
            chipTitle: props.currentChip.name || "",
            chipColor: "#ffffff",
        };
    }

    saveChip = () => {
        if (this.state.chipTitle != "")
            if (
                this.props.saveManager.saveNewChip(
                    this.props.currentChip,
                    this.state.chipTitle,
                    this.state.chipColor
                )
            )
                this.props.setEnabled(false);
            else alert("Не удалось сохранить чип!");
        else alert("Название не задано!");
    };

    render(): ReactNode {
        return (
            <div className={cl.SaveChip}>
                <div style={{ color: "white" }}>Saving chip</div>
                <input
                    onChange={(e) =>
                        this.setState({ chipTitle: e.target.value })
                    }
                    placeholder="Title"
                    value={this.state.chipTitle}
                    className={cl.CustomInput}
                />
                <div className={cl.rowFlex} style={{ margin: 0 }}>
                    <input
                        onChange={(e) => {
                            if (/^#([A-Fa-f0-9]){0,6}$/.test(e.target.value))
                                this.setState({ chipColor: e.target.value });
                        }}
                        value={this.state.chipColor}
                        className={`${cl.CustomInput} ${cl.ColorInput}`}
                    />
                    <input
                        type="color"
                        className={cl.ColorPicker}
                        value={this.state.chipColor}
                        onChange={(e) =>
                            this.setState({ chipColor: e.target.value })
                        }
                    />
                </div>
                <div className={`${cl.Buttons} ${cl.rowFlex}`}>
                    <button
                        onClick={this.saveChip}
                        style={{ marginRight: "1.5em" }}
                        className={cl.Button}
                    >
                        Сохранить
                    </button>
                    <button
                        onClick={() => this.props.setEnabled(false)}
                        className={cl.Button}
                    >
                        Отмена
                    </button>
                </div>
            </div>
        );
    }
}
