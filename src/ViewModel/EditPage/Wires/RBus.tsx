import cl from "./RBus.module.scss";
import { Bus } from "../../../Simulating/BaseChips/Bus";
import { State } from "../../../common/State";
import { getColorWithState } from "../../../common/Colors";
import { BusEndPosWidth, busID } from "../../../common/DefaultSettings";
import { ViewModel, view } from "@yoskutik/react-vvm";
import { action, makeObservable, observable } from "mobx";
import { EditPageViewModel } from "../EditPage";
import { Pos } from "../../../common/Pos";
import { BusPin } from "../../../Simulating/Pin";
import { useRef } from "react";

interface RequiredProps {
    Bus: Bus;
}

export class BusViewModel extends ViewModel<EditPageViewModel, RequiredProps> {
    @observable bus = this.viewProps.Bus;
    ref = useRef<SVGPathElement>(null);
    radiusWire = 20;
    constructor() {
        super();
        makeObservable(this);
    }

    @action protected onViewMounted(): void {
        this.bus.input.forEach((pin) => {
            const position = this.ref.current?.getPointAtLength(
                (pin as BusPin).distanceFromZero
            );
            pin.deltaPos = new Pos(position?.x, position?.y);
        });
        this.bus.output.forEach((pin) => {
            const position = this.ref.current?.getPointAtLength(
                (pin as BusPin).distanceFromZero
            );
            pin.deltaPos = new Pos(position?.x, position?.y);
        });
    }

    @action handleKeyDown = (e: KeyboardEvent) => {
        if (e.key == "Backspace") this.parent.removeBus(this.bus);
    };
}

export const RBus = view(BusViewModel)<RequiredProps>(({ viewModel }) => {
    if (!viewModel.bus) return <></>;
    return (
        <g>
            <rect
                x={viewModel.bus.positions[0].x - BusEndPosWidth / 2}
                y={viewModel.bus.positions[0].y - BusEndPosWidth / 2}
                width={BusEndPosWidth}
                height={BusEndPosWidth}
                className={cl.BusEndPos}
            />
            <rect
                x={
                    viewModel.bus.positions[viewModel.bus.positions.length - 1]
                        .x -
                    BusEndPosWidth / 2
                }
                y={
                    viewModel.bus.positions[viewModel.bus.positions.length - 1]
                        .y -
                    BusEndPosWidth / 2
                }
                width={BusEndPosWidth}
                height={BusEndPosWidth}
                className={cl.BusEndPos}
            />
            <path
                className={cl.RBus}
                ref={viewModel.ref}
                stroke={getColorWithState(
                    viewModel.bus.totalState,
                    viewModel.bus.BusColor
                )}
                d={viewModel.bus.drawWire}
                onClick={(e) => {
                    e.stopPropagation();
                    let closestDistance = Infinity,
                        distanceFromZero = 0;
                    for (
                        let i = 0;
                        i < e.currentTarget.getTotalLength();
                        i += 0.25
                    ) {
                        const point = e.currentTarget.getPointAtLength(i);
                        const distance = Math.sqrt(
                            (point.x - e.pageX) ** 2 + (point.y - e.pageY) ** 2
                        );

                        if (distance < closestDistance) {
                            closestDistance = distance;
                            distanceFromZero = i;
                        }
                    }
                    const point =
                        e.currentTarget.getPointAtLength(distanceFromZero);
                    viewModel.parent.wireIncompleteViewModel?.clickToPin(
                        new BusPin(
                            viewModel.bus,
                            distanceFromZero,
                            false,
                            undefined,
                            "BPin",
                            undefined,
                            false,
                            new Pos(point.x, point.y)
                        ),
                        e.ctrlKey
                    );
                    // this.props.interactPin.current(
                    //     this.props.Bus.phantomPin,
                    //     e.ctrlKey,
                    //     new Pos(e.pageX, e.pageY)
                    // );
                }}
                onMouseOver={() =>
                    document.addEventListener(
                        "keydown",
                        viewModel.handleKeyDown
                    )
                }
                onMouseOut={() =>
                    document.removeEventListener(
                        "keydown",
                        viewModel.handleKeyDown
                    )
                }
            />
            {busID ? (
                <text>
                    <textPath
                        href={`#bus_${viewModel.bus.id}`}
                        startOffset={"50%"}
                        stroke="white"
                    >
                        {viewModel.bus.id}
                    </textPath>
                </text>
            ) : undefined}
        </g>
    );
});
