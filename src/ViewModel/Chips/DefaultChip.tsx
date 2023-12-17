import { Component, ReactNode, createRef } from "react";
import cl from "./DefaultChip.module.scss";
import { Chip } from "../../Simulating/Chip";
import { RPin } from "../Pins/RPin";
import { Pin } from "../../Simulating/Pin";
import { Pos } from "../../common/Pos";

interface RequiredProps {
    chip: Chip;
    interactPin: { current: (pin: Pin) => void };
    showPinTitles?: boolean;
}

interface States {
    position: Pos;
}

export class DefaultChip extends Component<RequiredProps, States> {
    constructor(props: RequiredProps) {
        super(props);
        this.state = { position: props.chip.position };
    }

    grabbing = false;
    delta = new Pos();
    startGrabbing = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        this.grabbing = true;
        this.delta = new Pos(
            this.state.position.x - e.pageX,
            this.state.position.y - e.pageY
        );
        window.addEventListener("mouseup", this.stopGrabbing);
        window.addEventListener("mousemove", this.processGrabbing);
    };
    processGrabbing = (e: MouseEvent) => {
        this.setState({ position: new Pos(e.pageX, e.pageY).add(this.delta) });
        this.props.chip.position = this.state.position;
        this.props.chip.input.forEach((pin) => {
            if (pin.updatePos) pin.updatePos();
        });
        this.props.chip.output.forEach((pin) => {
            if (pin.updatePos) pin.updatePos();
        });
    };
    stopGrabbing = () => {
        window.removeEventListener("mouseup", this.stopGrabbing);
        window.removeEventListener("mousemove", this.processGrabbing);
    };

    render(): ReactNode {
        return (
            <div
                style={{
                    backgroundColor: this.props.chip.color,
                    left: this.props.chip.position.x,
                    top: this.props.chip.position.y,
                }}
                className={cl.DefaultChip}
                onMouseDown={this.startGrabbing}
            >
                <div className={cl.PinList}>
                    {this.props.chip.input.map((pin) => (
                        <RPin
                            Pin={pin}
                            interactPin={this.props.interactPin}
                            drawTitle={this.props.showPinTitles}
                        />
                    ))}
                </div>
                <div className={cl.ChipName}>{this.props.chip.name}</div>
                <div className={cl.PinList}>
                    {this.props.chip.output.map((pin) => (
                        <RPin
                            Pin={pin}
                            interactPin={this.props.interactPin}
                            drawTitle={this.props.showPinTitles}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
