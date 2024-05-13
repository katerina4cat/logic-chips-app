import cl from "./CircleAdding.module.scss";
import { Pos } from "../../../../common/Pos";
import { CircleItem } from "./CircleItem";
import { SaveManager } from "../../../../Managers/SaveManager";
import { ViewModel, view } from "@yoskutik/react-vvm";
import { EditPageViewModel } from "../../EditPage";
import { makeObservable, observable } from "mobx";

interface RequiredProps {
    enabled?: boolean;
    addNewChip: (chipName: string) => void;
    saveManager: SaveManager;
    circleID: number;
}

class CircleAddingViewModel extends ViewModel<
    EditPageViewModel,
    RequiredProps
> {
    @observable position = new Pos();
    constructor() {
        super();
        makeObservable(this);
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
}

export const CircleAdding = view(CircleAddingViewModel)<RequiredProps>(
    ({ viewModel }) => {
        const disabled =
            viewModel.viewProps.saveManager.Wheels[viewModel.viewProps.circleID]
                .length == 0;
        return (
            <div
                onClick={(e) => {
                    e.preventDefault();
                    // TODO: close circle
                }}
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.4)",
                    display: viewModel.viewProps.enabled ? "flex" : "none",
                    position: "fixed",
                    justifyContent: "center",
                    alignItems: "center",
                    left: 0,
                    top: 0,
                }}
            >
                <h1 style={{ color: disabled ? "#d32326" : "#fff" }}>
                    {disabled
                        ? `В круге #${
                              viewModel.viewProps.circleID + 1
                          } нет ни одного
                        элемента`
                        : `#${viewModel.viewProps.circleID + 1}`}
                </h1>
                <svg className={cl.CircleAdding} viewBox="0 0 100 100">
                    {viewModel.viewProps.saveManager.Wheels[
                        viewModel.viewProps.circleID
                    ].map((element, i) => (
                        <CircleItem
                            key={i}
                            centerAngle={viewModel.getAngle(i)}
                            halfAngle={viewModel.getAngle(0.5)}
                            elementInd={i}
                            element={element}
                            saveManager={viewModel.viewProps.saveManager}
                            addNewChip={viewModel.viewProps.addNewChip}
                            circleID={viewModel.viewProps.circleID}
                            contextMenu={() => {}}
                        />
                    ))}
                </svg>
            </div>
        );
    }
);
