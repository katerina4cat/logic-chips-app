import { Component, ReactNode, createRef } from "react";
import cl from "./EditCircleAdding.module.scss";
import { SaveInfo } from "../../../Structs/SaveInfo";
import { CircleItem } from "./CircleItem";
import { ContextMenu } from "../Modal/ContextMenu";
import { Pos } from "../../../common/Pos";
import { removeElement } from "../../../common/RemoveElement";

interface RequiredProps {
    enabled?: boolean;
    setEnabled: (e: boolean) => void;
    saveManager: SaveInfo;
    circleID: number;
}

interface States {
    enabledContext: boolean;
    positionContext: Pos;
    selectedChip?: string;
}

export class EditCircleAdding extends Component<RequiredProps, States> {
    state: Readonly<States> = {
        enabledContext: false,
        positionContext: new Pos(),
    };
    constructor(props: RequiredProps) {
        super(props);
    }
    currentCircleRef = createRef<SVGSVGElement>();

    private getAngle = (iter: number) => {
        return (
            iter *
            2 *
            Math.PI *
            (1 / this.props.saveManager.Wheels[this.props.circleID].length)
        );
    };

    setPositionContext = (chipName: string, positionCursor: Pos) => {
        this.setState({
            enabledContext: true,
            positionContext: positionCursor,
            selectedChip: chipName,
        });
    };

    render(): ReactNode {
        if (this.state.enabledContext && !this.props.enabled) {
            this.setState({ enabledContext: false, selectedChip: undefined });
        }
        return (
            <div
                style={{
                    display: this.props.enabled ? "flex" : "none",
                }}
                className={cl.EditCircleAddingBox}
                onClick={(e) => e.stopPropagation()}
            >
                <svg
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                        if (
                            this.props.saveManager.Wheels[this.props.circleID]
                                .length >= 12
                        ) {
                            alert(
                                "Невозможно добавить больше 12 элементов в 1 круг!"
                            );
                            return;
                        }
                        if (
                            !this.props.saveManager.Wheels[
                                this.props.circleID
                            ].find(
                                (chipNames) =>
                                    chipNames == e.dataTransfer.getData("chip")
                            )
                        ) {
                            this.props.saveManager.Wheels[
                                this.props.circleID
                            ].push(e.dataTransfer.getData("chip"));
                            this.props.saveManager.save();
                            this.forceUpdate();
                        }
                    }}
                    className={cl.EditCircleAdding}
                    viewBox="0 0 100 100"
                    ref={this.currentCircleRef}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        backgroundColor:
                            this.props.saveManager.Wheels[this.props.circleID]
                                .length == 0
                                ? "rgba(255,255,255,0.1)"
                                : "transparent",
                    }}
                >
                    {this.props.saveManager.Wheels[this.props.circleID].map(
                        (element, i) => (
                            <CircleItem
                                key={element}
                                centerAngle={this.getAngle(i)}
                                halfAngle={this.getAngle(0.5)}
                                element={element}
                                elementInd={i}
                                saveManager={this.props.saveManager}
                                addNewChip={() => {}}
                                circleID={this.props.circleID}
                                updateCircle={() => {
                                    this.forceUpdate();
                                }}
                                contextMenu={this.setPositionContext}
                                edit
                            />
                        )
                    )}
                    <circle
                        cx={50}
                        cy={50}
                        r={6}
                        fill="rgba(249,38,40,0.75)"
                        style={{ cursor: "help" }}
                        onClick={() => {
                            this.props.saveManager.Wheels[this.props.circleID] =
                                [];
                            this.forceUpdate();
                            this.props.saveManager.save();
                        }}
                    ></circle>
                </svg>
                <h1 style={{ pointerEvents: "none" }}>{`#${
                    this.props.circleID + 1
                }`}</h1>
                <ContextMenu
                    enabled={this.state.enabledContext}
                    pos={this.state.positionContext}
                    setEnabled={(state: boolean) =>
                        this.setState({ enabledContext: state })
                    }
                    className={cl.Context}
                >
                    <div className={cl.Title}>
                        Удаление {this.state.selectedChip}
                    </div>
                    <button
                        className={cl.DeleteBtn}
                        onClick={() => {
                            removeElement(
                                this.props.saveManager.Wheels[
                                    this.props.circleID
                                ],
                                this.state.selectedChip || ""
                            );
                            this.forceUpdate();
                            this.props.saveManager.save();
                            this.setState({
                                enabledContext: false,
                                selectedChip: undefined,
                            });
                        }}
                    >
                        Удалить
                    </button>
                </ContextMenu>
            </div>
        );
    }
}
