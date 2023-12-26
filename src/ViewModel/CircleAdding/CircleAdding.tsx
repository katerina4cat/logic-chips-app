import { Component, ReactNode } from "react";
import cl from "./CircleAdding.module.scss";
import { Pos } from "../../common/Pos";
import { Chip } from "../../Simulating/Chip";
import { SaveInfo } from "../../Structs/SaveInfo";
import { CircleItem } from "./CircleItem";

interface RequiredProps {
    enabled?: boolean;
    setEnabled: (e: boolean) => void;
    addNewChip: (chip: Chip) => void;
    saveManager: SaveInfo;
    circleID: number;
}

interface States {}

export class CircleAdding extends Component<RequiredProps, States> {
    state: Readonly<States> = { position: new Pos() };
    constructor(props: RequiredProps) {
        super(props);
    }

    private getAngle = (iter: number) => {
        return (
            iter *
            2 *
            Math.PI *
            (1 / this.props.saveManager.Wheels[this.props.circleID].length)
        );
    };

    render(): ReactNode {
        const disabled =
            this.props.saveManager.Wheels[this.props.circleID].length == 0;
        return (
            <div
                onClick={(e) => {
                    e.preventDefault();
                    this.props.setEnabled(false);
                }}
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.4)",
                    display: this.props.enabled ? "flex" : "none",
                    position: "fixed",
                    justifyContent: "center",
                    alignItems: "center",
                    left: 0,
                    top: 0,
                }}
            >
                <h1 style={{ color: disabled ? "#d32326" : "#fff" }}>
                    {disabled
                        ? `В круге #${this.props.circleID + 1} нет ни одного
                        элемента`
                        : `#${this.props.circleID + 1}`}
                </h1>
                <svg className={cl.CircleAdding} viewBox="0 0 100 100">
                    {this.props.saveManager.Wheels[this.props.circleID].map(
                        (element, i) => (
                            <CircleItem
                                key={i}
                                centerAngle={this.getAngle(i)}
                                halfAngle={this.getAngle(0.5)}
                                elementInd={i}
                                element={element}
                                saveManager={this.props.saveManager}
                                addNewChip={this.props.addNewChip}
                                updateCircle={() => {}}
                                circleID={this.props.circleID}
                                contextMenu={() => {}}
                            />
                        )
                    )}
                </svg>
            </div>
        );
    }
}
