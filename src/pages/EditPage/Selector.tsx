import { Component, ReactNode, RefObject, createRef } from "react";
import { Pos } from "../../common/Simulating/Wire";
import { sideWidth } from "./CurrentChip";

interface RequiredProps {
    SvgElementRef: RefObject<SVGSVGElement>;
}

interface SelectorStates {
    StartCords: Pos;
}

export class Selector extends Component<RequiredProps, SelectorStates> {
    state: Readonly<SelectorStates> = {
        StartCords: { X: 0, Y: 0 },
    };
    SelectorRef = createRef<SVGRectElement>();

    constructor(props: RequiredProps) {
        super(props);
        props.SvgElementRef.current?.addEventListener(
            "mousedown",
            this.handleStartSelecting
        );
    }
    handleEndSelecting() {
        this.props.SvgElementRef.current?.removeEventListener(
            "mouseup",
            this.handleEndSelecting
        );
        this.props.SvgElementRef.current?.removeEventListener(
            "mousemove",
            this.handleSelecting
        );
        if (this.SelectorRef.current) {
            this.SelectorRef.current.style.display = "none";

            this.SelectorRef.current.setAttribute("width", "0");
            this.SelectorRef.current.setAttribute("height", "0");
        }
    }
    handleStartSelecting(e: MouseEvent) {
        this.setState({ StartCords: { X: e.pageX, Y: e.pageY } });
        this.props.SvgElementRef.current?.addEventListener(
            "mouseup",
            this.handleEndSelecting
        );
        this.props.SvgElementRef.current?.addEventListener(
            "mousemove",
            this.handleSelecting
        );
        if (this.SelectorRef.current) {
            this.SelectorRef.current.setAttribute(
                "x",
                (e.pageX - sideWidth).toString()
            );
            this.SelectorRef.current.setAttribute("y", e.pageY.toString());
        }
    }
    handleSelecting(e: MouseEvent) {
        const deltaX = e.pageX - this.state.StartCords.X;
        const deltaY = e.pageY - this.state.StartCords.Y;
        if (this.SelectorRef.current) {
            if (deltaX < 0)
                this.SelectorRef.current.setAttribute(
                    "x",
                    (e.pageX - sideWidth).toString()
                );
            if (deltaY < 0)
                this.SelectorRef.current.setAttribute("y", e.pageY.toString());
            this.SelectorRef.current.setAttribute(
                "width",
                Math.abs(deltaX) + "px"
            );
            this.SelectorRef.current.setAttribute(
                "height",
                Math.abs(deltaY) + "px"
            );
        }
    }
    render(): ReactNode {
        return <rect ref={this.SelectorRef} />;
    }
}
