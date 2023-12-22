import { Component, ReactNode, createRef } from "react";
import cl from "./DefaultChip.module.scss";
import { Chip } from "../../Simulating/Chip";
import { RPin } from "../Pins/RPin";
import { Pin } from "../../Simulating/Pin";
import { Pos } from "../../common/Pos";

interface RequiredProps {
    chip: Chip | undefined;
    interactPin: { current: (pin: Pin, ctrlKey: boolean) => void };
    showPinTitles?: boolean;
    isPreview?: boolean;
    clearSelection: () => void;
    CursorPosition: Pos;
}

interface States {
    position: Pos;
}

export class DefaultChip extends Component<RequiredProps, States> {
    constructor(props: RequiredProps) {
        super(props);
        this.state = { position: props.chip?.position || new Pos() };
    }

    grabbing = false;
    delta = new Pos();
    handleKeyUp = (e: KeyboardEvent) => {
        if (e.key == "Control") {
            window.removeEventListener("keyup", this.handleKeyUp);
            this.grabbing = true;
            this.delta = new Pos(
                this.state.position.x - this.props.CursorPosition.x,
                this.state.position.y - this.props.CursorPosition.y
            );
            window.addEventListener("mouseup", this.stopGrabbing);
            window.addEventListener("mousemove", this.processGrabbing);
        }
    };
    lastStartTouch = new Pos();
    startGrabbing = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        this.lastStartTouch.x = e.pageX;
        this.lastStartTouch.y = e.pageY;
        if (e.ctrlKey) {
            window.addEventListener("keyup", this.handleKeyUp);
            if (this.props.chip) this.props.chip.selected = true;
        } else {
            this.props.clearSelection();
            if (this.props.chip) this.props.chip.selected = true;
            this.grabbing = true;
            this.delta = new Pos(
                this.state.position.x - e.pageX,
                this.state.position.y - e.pageY
            );
            window.addEventListener("mouseup", this.stopGrabbing);
            window.addEventListener("mousemove", this.processGrabbing);
        }
    };
    processGrabbing = (e: MouseEvent) => {
        if (!this.props.chip) return;
        this.setState({ position: new Pos(e.pageX, e.pageY).add(this.delta) });
        this.props.chip.position = this.state.position;
        this.props.chip.input.forEach((pin) => {
            if (pin.updatePos) pin.updatePos();
        });
        this.props.chip.output.forEach((pin) => {
            if (pin.updatePos) pin.updatePos();
        });
    };
    stopGrabbing = (e: MouseEvent) => {
        window.removeEventListener("mouseup", this.stopGrabbing);
        window.removeEventListener("mousemove", this.processGrabbing);
        const deltaLastTouch = new Pos(
            e.pageX - this.lastStartTouch.x,
            e.pageY - this.lastStartTouch.y
        );
        if (
            !(
                deltaLastTouch.x < 5 &&
                deltaLastTouch.x > -5 &&
                deltaLastTouch.y < 5 &&
                deltaLastTouch.y > -5
            )
        )
            this.props.clearSelection();
    };

    render(): ReactNode {
        if (!this.props.chip) return <></>;
        return (
            <div
                style={{
                    backgroundColor: this.props.chip.color,
                    position: this.props.isPreview ? "relative" : "absolute",
                    cursor: this.props.isPreview ? "default" : "pointer",
                    left: this.props.chip.position.x,
                    top: this.props.chip.position.y,
                    boxShadow: this.props.chip.selected
                        ? `0px 0px 3px 3px color-mix(in srgb, white 20%, ${this.props.chip.color})`
                        : "none",
                }}
                className={cl.DefaultChip}
                onMouseDown={
                    this.props.isPreview ? undefined : this.startGrabbing
                }
            >
                <div className={cl.PinList}>
                    {this.props.chip.input.map((pin) => (
                        <RPin
                            key={pin.id}
                            Pin={pin}
                            interactPin={this.props.interactPin}
                            drawTitle={this.props.showPinTitles}
                            isPreview={this.props.isPreview}
                        />
                    ))}
                </div>
                <div className={cl.ChipName}>{this.props.chip.name}</div>
                <div className={cl.PinList}>
                    {this.props.chip.output.map((pin) => (
                        <RPin
                            key={pin.id}
                            Pin={pin}
                            interactPin={this.props.interactPin}
                            drawTitle={this.props.showPinTitles}
                            isPreview={this.props.isPreview}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
