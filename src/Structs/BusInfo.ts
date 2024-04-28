import { Pos } from "../common/Pos";
import { PinInfo } from "./PinInfo";

export class BusInfo {
    id: number;
    name: string;
    color: number;

    positions: Pos[];
    inputs: PinInfo[];
    outputs: PinInfo[];
    constructor(
        id: number,
        name: string,
        color: number,
        positions: Pos[],
        inputs: PinInfo[],
        outputs: PinInfo[]
    ) {
        this.name = name;
        this.color = color;
        this.positions = positions;
        this.id = id;
        this.inputs = inputs;
        this.outputs = outputs;
    }
}
