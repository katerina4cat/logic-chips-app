import { Component, ReactNode } from "react";
import cl from "./SidePinField.module.scss";
import { Pin } from "../Simulating/Pin";
import { SideEditPin } from "./Pins/SideEditPin";
import { Chip } from "../Simulating/Chip";

interface RequiredProps {
    Pins: Pin[];
    interactPin: { current: (pin: Pin) => void };
    currentChip: Chip;
    showPinTitle?: boolean;
    isInput?: boolean;
    disabled?: boolean;
    addNewPin: (pin: Pin) => void;
    deletePin: (pin: Pin) => void;
}

interface States {
    hiden: boolean;
    positionY: number;
}

export class SidePinField extends Component<RequiredProps, States> {
    state: Readonly<States> = {
        hiden: true,
        positionY: 0,
    };
    constructor(props: RequiredProps) {
        super(props);
    }
    previewPin = new Pin(
        this.props.currentChip,
        !!this.props.isInput,
        -1,
        "",
        0
    );

    componentWillUnmount(): void {
        document.removeEventListener("mousemove", this.handleMouseMove);
    }

    handleMouseMove = (e: MouseEvent) => {
        this.setState({ positionY: e.pageY });
    };

    handleClickAddPin = () => {
        this.props.addNewPin(
            new Pin(
                this.props.currentChip,
                !!this.props.isInput,
                Date.now(),
                "Pin",
                this.state.positionY,
                this.props.isInput
            )
        );
    };

    render(): ReactNode {
        return (
            <div className={cl.SidePinField}>
                <div
                    className={cl.SideAddingField}
                    style={{ marginLeft: this.props.isInput ? "0" : "auto" }}
                    onMouseOver={() => {
                        document.addEventListener(
                            "mousemove",
                            this.handleMouseMove
                        );
                        this.setState({ hiden: false });
                    }}
                    onMouseOut={() => {
                        document.removeEventListener(
                            "mousemove",
                            this.handleMouseMove
                        );
                        this.setState({ hiden: true });
                    }}
                    onClick={this.handleClickAddPin}
                />
                {this.props.Pins.map((pin) => (
                    <SideEditPin
                        key={pin.id}
                        Pin={pin}
                        interactPin={this.props.interactPin}
                        disabled={this.props.disabled}
                        deletePin={this.props.deletePin}
                        showPinTitle={this.props.showPinTitle}
                    />
                ))}
                <SideEditPin
                    style={{
                        display: this.state.hiden ? "none" : "flex",
                    }}
                    Pin={this.previewPin}
                    position={this.state.positionY}
                    disabled
                    isPreview
                />
            </div>
        );
    }
}
