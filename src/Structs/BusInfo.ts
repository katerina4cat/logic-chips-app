import { Pos } from "../common/Pos";
import { PinSaveInfo } from "./PinInfo";

export class BusMinimalInfo {
    name: string;
    id: number;
    color: string;
    positions: Pos[];
    inputs: PinSaveInfo[];
    outputs: PinSaveInfo[];
    constructor(
        name: string,
        color: string,
        positions: Pos[],
        id: number,
        inputs: PinSaveInfo[],
        outputs: PinSaveInfo[]
    ) {
        this.name = name;
        this.color = color;
        this.positions = positions;
        this.id = id;
        this.inputs = inputs;
        this.outputs = outputs;
    }
}
