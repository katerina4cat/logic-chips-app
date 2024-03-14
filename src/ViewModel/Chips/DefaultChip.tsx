import cl from "./DefaultChip.module.scss";
import { Chip } from "../../Simulating/Chip";
import { RPin } from "../Pins/RPin";
import { Pin } from "../../Simulating/Pin";
import { Pos } from "../../common/Pos";
import { ViewModel, view } from "@yoskutik/react-vvm";
import { action, makeObservable, observable } from "mobx";
import { EditPageViewModel } from "../EditPage";

interface RequiredProps {
    chip: Chip;
    interactPin: { current: (pin: Pin, ctrlKey: boolean, point?: Pos) => void };
    showPinTitles?: boolean;
    isPreview?: boolean;
}

class DefaultChipViewModel extends ViewModel<EditPageViewModel, RequiredProps> {
    @observable chip: Chip;
    // @observable delta: Pos = new Pos();

    startPosition: Pos = new Pos();
    mouseDownTime: number = 0;

    constructor() {
        super();
        this.chip = this.viewProps.chip;
        makeObservable(this);
        window.addEventListener("resize", this.onResize);
    }

    @action onResize = (e: UIEvent) => {
        console.log(e);
    };

    // @action mouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    //     this.startPosition = new Pos(e.pageX, e.pageY);
    //     if (e.ctrlKey) {
    //         this.chip.selected = !this.chip.selected;
    //         if (this.chip.selected)
    //             window.addEventListener("mousedown", this.startGrabbing);
    //         else window.removeEventListener("mousedown", this.startGrabbing);
    //     } else {
    //         this.mouseDownTime = Date.now();
    //         this.delta = new Pos(
    //             this.chip.position.x - e.pageX,
    //             this.chip.position.y - e.pageY
    //         );
    //         if (!this.chip.selected) this.viewProps.clearSelection();
    //         this.chip.selected = true;
    //         window.addEventListener("mouseup", this.stopGrabbing);
    //         window.addEventListener("mousemove", this.processGrabbing);
    //     }
    // };

    // startGrabbing = (e: MouseEvent) => {
    //     if (e.ctrlKey) return;

    //     if (!this.chip.selected) {
    //         window.removeEventListener("mousedown", this.startGrabbing);
    //         return;
    //     }
    //     this.mouseDownTime = Date.now();
    //     this.delta = new Pos(
    //         this.chip.position.x - e.pageX,
    //         this.chip.position.y - e.pageY
    //     );
    //     window.addEventListener("mouseup", this.stopGrabbing);
    //     window.addEventListener("mousemove", this.processGrabbing);
    // };

    // @action processGrabbing = (e: MouseEvent) => {
    //     if (Date.now() - this.mouseDownTime < 75) return;
    //     this.chip.position = new Pos(e.pageX, e.pageY).add(this.delta);
    //     this.chip.input.forEach((pin) => {
    //         if (pin.updatePos) pin.updatePos();
    //     });
    //     this.chip.output.forEach((pin) => {
    //         if (pin.updatePos) pin.updatePos();
    //     });
    // };

    // @action stopGrabbing = (e: MouseEvent) => {
    //     window.removeEventListener("mouseup", this.stopGrabbing);
    //     window.removeEventListener("mousemove", this.processGrabbing);
    //     if (Date.now() - this.mouseDownTime < 75) {
    //         this.viewProps.clearSelection();
    //         this.chip.selected = true;
    //     }
    // };
}

export const DefaultChip = view(DefaultChipViewModel)<RequiredProps>(
    (props) => {
        if (props.viewModel.chip == undefined) return <></>;
        return (
            <div
                style={{
                    backgroundColor: props.viewModel.chip.color,
                    position: props.isPreview ? "relative" : "absolute",
                    cursor: props.isPreview ? "default" : "pointer",
                    left:
                        props.viewModel.chip.position.x +
                        (props.viewModel.chip.selected
                            ? props.viewModel.parent.deltaMove.x
                            : 0),
                    top:
                        props.viewModel.chip.position.y +
                        (props.viewModel.chip.selected
                            ? props.viewModel.parent.deltaMove.y
                            : 0),
                    boxShadow: props.viewModel.chip.selected
                        ? `0px 0px 3px 3px color-mix(in srgb, white 20%, ${props.viewModel.chip.color})`
                        : "none",
                }}
                className={cl.DefaultChip}
                onMouseDown={
                    props.isPreview
                        ? undefined
                        : (e) =>
                              props.viewModel.parent.clickedToChip(
                                  e,
                                  props.viewModel.chip
                              )
                }
            >
                <div className={cl.PinList}>
                    {props.viewModel.chip.input.map((pin) => (
                        <RPin
                            key={pin.id}
                            Pin={pin}
                            interactPin={props.interactPin}
                            drawTitle={props.showPinTitles}
                            isPreview={props.isPreview}
                        />
                    ))}
                </div>
                <div className={cl.ChipName}>{props.viewModel.chip.name}</div>
                <div className={cl.PinList}>
                    {props.viewModel.chip.output.map((pin) => (
                        <RPin
                            key={pin.id}
                            Pin={pin}
                            interactPin={props.interactPin}
                            drawTitle={props.showPinTitles}
                            isPreview={props.isPreview}
                        />
                    ))}
                </div>
            </div>
        );
    }
);
