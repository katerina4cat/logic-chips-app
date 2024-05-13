import { createRef } from "react";
import cl from "./EditCircleAdding.module.scss";
import { CircleItem } from "./CircleItem";
import { ContextMenu } from "../ContextMenu";
import { Pos } from "../../../../common/Pos";
import { removeElement } from "../../../../common/RemoveElement";
import { SaveManager } from "../../../../Managers/SaveManager";
import { ViewModel, view } from "@yoskutik/react-vvm";
import { action, makeObservable, observable } from "mobx";

interface RequiredProps {
    enabled?: boolean;
    saveManager: SaveManager;
    circleID: number;
}

export class EditCircleAddingViewModel extends ViewModel<
    undefined,
    RequiredProps
> {
    @observable enabledContext: boolean = false;
    @observable positionContext: Pos = new Pos();
    selectedChip?: string;

    currentCircleRef = createRef<SVGSVGElement>();

    constructor() {
        super();
        makeObservable(this);
    }

    @action setEnabledContext(value: boolean = false) {
        this.enabledContext = value;
    }

    getAngle = (iter: number) => {
        return (
            iter *
            2 *
            Math.PI *
            (1 /
                this.viewProps.saveManager.Wheels[this.viewProps.circleID]
                    .length)
        );
    };

    @action setPositionContext = (chipName: string, positionCursor: Pos) => {
        this.enabledContext = true;
        this.positionContext = positionCursor;
        this.selectedChip = chipName;
    };
    @action deletingCircleItem = () => {
        removeElement(
            this.viewProps.saveManager.Wheels[this.viewProps.circleID],
            this.selectedChip || ""
        );
        this.viewProps.saveManager.save();
        this.enabledContext = false;
        this.selectedChip = undefined;
    };
}

export const EditCircleAdding = view(EditCircleAddingViewModel)<RequiredProps>(
    ({ viewModel }) => {
        return (
            <div
                style={{
                    display: viewModel.viewProps.enabled ? "flex" : "none",
                }}
                className={cl.EditCircleAddingBox}
                onClick={(e) => e.stopPropagation()}
            >
                <svg
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={action((e) => {
                        if (
                            viewModel.viewProps.saveManager.Wheels[
                                viewModel.viewProps.circleID
                            ].length >= 12
                        ) {
                            alert(
                                "Невозможно добавить больше 12 элементов в 1 круг!"
                            );
                            return;
                        }
                        if (
                            !viewModel.viewProps.saveManager.Wheels[
                                viewModel.viewProps.circleID
                            ].find(
                                (chipNames) =>
                                    chipNames == e.dataTransfer.getData("chip")
                            )
                        ) {
                            viewModel.viewProps.saveManager.Wheels[
                                viewModel.viewProps.circleID
                            ].push(e.dataTransfer.getData("chip"));
                            viewModel.viewProps.saveManager.save();
                        }
                    })}
                    className={cl.EditCircleAdding}
                    viewBox="0 0 100 100"
                    ref={viewModel.currentCircleRef}
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        backgroundColor:
                            viewModel.viewProps.saveManager.Wheels[
                                viewModel.viewProps.circleID
                            ].length == 0
                                ? "rgba(255,255,255,0.1)"
                                : "transparent",
                    }}
                >
                    {viewModel.viewProps.saveManager.Wheels[
                        viewModel.viewProps.circleID
                    ].map((element, i) => (
                        <CircleItem
                            key={element}
                            centerAngle={viewModel.getAngle(i)}
                            halfAngle={viewModel.getAngle(0.5)}
                            element={element}
                            elementInd={i}
                            saveManager={viewModel.viewProps.saveManager}
                            circleID={viewModel.viewProps.circleID}
                            contextMenu={viewModel.setPositionContext}
                            edit
                        />
                    ))}
                    <circle
                        cx={50}
                        cy={50}
                        r={6}
                        fill="rgba(249,38,40,0.75)"
                        style={{ cursor: "help" }}
                        onClick={() => {
                            viewModel.viewProps.saveManager.Wheels[
                                viewModel.viewProps.circleID
                            ] = [];
                            viewModel.viewProps.saveManager.save();
                        }}
                    />
                </svg>
                <h1 style={{ pointerEvents: "none" }}>{`#${
                    viewModel.viewProps.circleID + 1
                }`}</h1>
                <ContextMenu
                    enabled={viewModel.enabledContext}
                    setEnabled={viewModel.setEnabledContext}
                    pos={viewModel.positionContext}
                    className={cl.Context}
                >
                    <div className={cl.Title}>
                        Удаление {viewModel.selectedChip}
                    </div>
                    <button
                        className={cl.DeleteBtn}
                        onClick={viewModel.deletingCircleItem}
                    >
                        Удалить
                    </button>
                </ContextMenu>
            </div>
        );
    }
);
