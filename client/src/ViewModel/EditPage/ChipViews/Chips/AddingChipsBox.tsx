import { createRef } from "react";
import { Pos } from "../../../../common/Pos";
import { Chip } from "../../../../Simulating/Chip";
import { DefaultChip } from "./DefaultChip";
import { ViewModel, view } from "@yoskutik/react-vvm";
import { action, makeObservable } from "mobx";
import { EditPageViewModel } from "../../EditPage";

class AddingChipViewModel extends ViewModel<EditPageViewModel> {
    addingChipBoxRef = createRef<HTMLDivElement>();
    constructor() {
        super();
        makeObservable(this);
    }

    @action handleClickToPlaceChip = () => {
        if (!this.parent.editorObjectsManager.addingChip) return;
        try {
            const curretTime = Date.now();
            if (this.addingChipBoxRef.current)
                if (this.addingChipBoxRef.current.children.length > 0)
                    this.parent.editorObjectsManager.addChips(
                        Array.from(
                            this.addingChipBoxRef.current?.children || []
                        )
                            .map((child, i) => {
                                const box = child?.getBoundingClientRect();
                                const res = this.parent.editorObjectsManager
                                    .addingChip
                                    ? this.parent.saveManager.loadChipByName(
                                          this.parent.editorObjectsManager
                                              .addingChip.name,
                                          new Pos(box?.x, box?.y),
                                          curretTime + i
                                      )[0]
                                    : undefined;
                                // TODO sets positions to pins
                                return res;
                            })
                            .filter(Boolean) as Chip[]
                    );
        } catch (err: any) {
            console.log(err);
        }
        setTimeout(() => {
            this.parent.editorObjectsManager.cancelAll();
        }, 2);
    };
}

export const AddingChipsBox = view(AddingChipViewModel)((props) => {
    if (props.viewModel.parent.editorObjectsManager.addingChip === undefined)
        return <></>;
    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    left: props.viewModel.parent.cursorPosition.x - 25,
                    top: props.viewModel.parent.cursorPosition.y - 25,
                }}
                ref={props.viewModel.addingChipBoxRef}
            >
                {new Array(
                    props.viewModel.parent.editorObjectsManager.addingCount
                )
                    .fill(1)
                    .map((_e, i) => (
                        <DefaultChip
                            key={i}
                            isPreview
                            chip={
                                props.viewModel.parent.editorObjectsManager
                                    .addingChip as Chip
                            }
                        />
                    ))}
            </div>
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: props.viewModel.parent.editorObjectsManager
                        .addingChip
                        ? "block"
                        : "none",
                    position: "fixed",
                    left: 0,
                    top: 0,
                }}
                onMouseDown={(e) => {
                    e.stopPropagation();
                    props.viewModel.handleClickToPlaceChip();
                }}
                onClick={(e) => e.stopPropagation()}
                onMouseUp={(e) => {
                    e.stopPropagation();
                }}
            ></div>
        </>
    );
});
