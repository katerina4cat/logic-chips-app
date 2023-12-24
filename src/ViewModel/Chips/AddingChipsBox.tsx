import { Component, ReactNode, createRef } from "react";
import { Pos } from "../../common/Pos";
import { Chip } from "../../Simulating/Chip";
import { Pin } from "../../Simulating/Pin";
import { DefaultChip } from "./DefaultChip";
import { SaveInfo } from "../../Structs/SaveInfo";

interface RequiredProps {
    AddingChip?: Chip;
    AddingChipCount: number;
    saveManager: SaveInfo;
    addChips: (chips: Chip[]) => void;
    clearAdding: () => void;
}

interface States {
    CursorPosition: Pos;
}

export class AddingChipsBox extends Component<RequiredProps, States> {
    state: Readonly<States> = { CursorPosition: new Pos() };
    constructor(props: RequiredProps) {
        super(props);
    }

    componentDidMount(): void {
        window.addEventListener("mousemove", this.handleMouseMove);
    }
    componentWillUnmount(): void {
        window.removeEventListener("mousemove", this.handleMouseMove);
    }
    handleMouseMove = (e: MouseEvent) => {
        this.setState((prev) => {
            prev.CursorPosition.x = e.pageX;
            prev.CursorPosition.y = e.pageY;
            return { CursorPosition: prev.CursorPosition };
        });
    };

    addingChipBoxRef = createRef<HTMLDivElement>();

    handleClickToPlaceChip = () => {
        if (!this.props.AddingChip || !this.addingChipBoxRef.current) return;
        try {
            const curretTime = Date.now();
            if (this.addingChipBoxRef.current?.children.length > 0)
                this.props.addChips(
                    Array.from(this.addingChipBoxRef.current?.children || [])
                        .map((child, i) => {
                            const box = child?.getBoundingClientRect();
                            return this.props.AddingChip
                                ? this.props.saveManager.loadChipByName(
                                      this.props.AddingChip.name,
                                      new Pos(box?.x, box?.y),
                                      curretTime + i
                                  )
                                : undefined;
                        })
                        .filter(Boolean) as Chip[]
                );
        } catch (err: any) {
            console.log(err);
        }
        setTimeout(() => {
            this.props.clearAdding();
        }, 1);
    };

    render(): ReactNode {
        return (
            <>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        position: "absolute",
                        left: this.state.CursorPosition.x - 25,
                        top: this.state.CursorPosition.y - 25,
                    }}
                    ref={this.addingChipBoxRef}
                >
                    {new Array(this.props.AddingChipCount).fill(1).map((_e) => (
                        <DefaultChip
                            isPreview
                            chip={this.props.AddingChip}
                            interactPin={{
                                current: function (_pin: Pin): void {},
                            }}
                            clearSelection={() => {}}
                        />
                    ))}
                </div>
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        display: this.props.AddingChip ? "block" : "none",
                        position: "fixed",
                        left: 0,
                        top: 0,
                    }}
                    onMouseDown={(e) => e.stopPropagation()}
                    onClick={(e) => e.stopPropagation()}
                    onMouseUp={(e) => {
                        e.stopPropagation();
                        this.handleClickToPlaceChip();
                    }}
                ></div>
            </>
        );
    }
}
