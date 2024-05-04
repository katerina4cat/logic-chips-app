import { Pos } from "../common/Pos";
import { BusInfo } from "./BusInfo";
import { PinInfo } from "./PinInfo";
import { WireInfo } from "./WireInfo";

export enum ChipTypes {
    "Default" = 1,
    "BUS" = 2,
    "SevenSegment" = 3,
}

export class ChipInfo {
    name: string;
    color: string;
    chipStyleType: number;

    inputPins: PinInfo[];
    outputPins: PinInfo[];
    SubChips: { name: string; id: number; position: Pos }[];
    Buses: BusInfo[];
    Wires: WireInfo[];

    lastEdit: Date;
    screenSize: Pos;
    constructor(
        name: string,
        chipStyleType: number = ChipTypes.Default,
        color: string = "#909090",
        inputPins: PinInfo[] = [],
        outputPins: PinInfo[] = [],
        Wires: WireInfo[] = [],
        SubChips: { name: string; id: number; position: Pos }[] = [],
        Buses: BusInfo[] = [],
        screenSize: Pos = new Pos(),
        lastEdit: Date = new Date(0)
    ) {
        this.name = name;
        this.chipStyleType = chipStyleType;
        this.color = color;
        this.inputPins = inputPins;
        this.outputPins = outputPins;
        this.Wires = Wires;
        this.SubChips = SubChips;
        this.Buses = Buses;
        this.screenSize = screenSize;
        this.lastEdit = lastEdit;
    }
}

export class SubChipInfo {
    id: number;
    name: string;
    position: Pos;
    constructor(id: number, name: string, position: Pos) {
        this.id = id;
        this.name = name;
        this.position = position;
    }
}
