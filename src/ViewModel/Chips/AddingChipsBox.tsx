import { useRef } from "react";
import { Pos } from "../../common/Pos";
import { Chip } from "../../Simulating/Chip";
import { DefaultChip } from "./DefaultChip";
import { ViewModel, view } from "@yoskutik/react-vvm";
import { EditPageViewModel } from "../EditPage";
import { action, makeObservable, observable } from "mobx";

class AddingChipViewModel extends ViewModel<EditPageViewModel> {
    @observable cursorPosition: Pos = new Pos();
    addingChipBoxRef = useRef<HTMLDivElement>(null);
    constructor() {
        super();
        makeObservable(this);
    }

    protected onViewMounted(): void {
        window.addEventListener("mousemove", this.handleMouseMove);
    }
    protected onViewUnmounted(): void {
        window.removeEventListener("mousemove", this.handleMouseMove);
    }
    @action handleMouseMove = (e: MouseEvent) => {
        this.cursorPosition.x = e.pageX;
        this.cursorPosition.y = e.pageY;
    };
    @action handleClickToPlaceChip = () => {
        if (!this.parent.addingChip) return;
        try {
            const curretTime = Date.now();
            if (this.addingChipBoxRef.current)
                if (this.addingChipBoxRef.current.children.length > 0)
                    this.parent.addChips(
                        Array.from(
                            this.addingChipBoxRef.current?.children || []
                        )
                            .map((child, i) => {
                                const box = child?.getBoundingClientRect();
                                const res = this.parent.addingChip
                                    ? this.parent.saveManager.loadChipByName(
                                          this.parent.addingChip.name,
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
            this.parent.clearAdding();
        }, 1);
    };
}

export const AddingChipsBox = view(AddingChipViewModel)((props) => {
    if (props.viewModel.parent.addingChip === undefined) return <></>;
    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    left: props.viewModel.cursorPosition.x - 25,
                    top: props.viewModel.cursorPosition.y - 25,
                }}
                ref={props.viewModel.addingChipBoxRef}
            >
                {new Array(props.viewModel.parent.addingCount)
                    .fill(1)
                    .map((_e, i) => (
                        <DefaultChip
                            key={i}
                            isPreview
                            chip={props.viewModel.parent.addingChip as Chip}
                        />
                    ))}
            </div>
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: props.viewModel.parent.addingChip
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
