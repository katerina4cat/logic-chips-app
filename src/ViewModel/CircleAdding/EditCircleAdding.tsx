import { Component, ReactNode, createRef } from "react";
import cl from "./EditCircleAdding.module.scss";
import { SaveInfo } from "../../Structs/SaveInfo";
import { CircleItem } from "./CircleItem";

interface RequiredProps {
    enabled?: boolean;
    setEnabled: (e: boolean) => void;
    saveManager: SaveInfo;
    circleID: number;
}

interface States {}

export class EditCircleAdding extends Component<RequiredProps, States> {
    state: Readonly<States> = {};
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

    render(): ReactNode {
        const disabled =
            this.props.saveManager.Wheels[this.props.circleID].length == 0;

        return (
            <div
                style={{
                    display: this.props.enabled ? "flex" : "none",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                className={cl.EditCircleAddingBox}
            >
                <h1 style={{ color: disabled ? "#d32326" : "#fff" }}>
                    {`#${this.props.circleID + 1}`}
                </h1>
                <svg
                    className={cl.EditCircleAdding}
                    viewBox="0 0 100 100"
                    ref={this.currentCircleRef}
                    onClick={(e) => e.stopPropagation()}
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
                                edit
                            />
                        )
                    )}
                </svg>
            </div>
        );
    }
}
