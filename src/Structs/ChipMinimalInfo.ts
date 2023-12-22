import { Pos } from "../common/Pos";
import { PinSaveInfo } from "./PinInfo";
import { WireSaveInfo } from "./WireSaveInfo";

export class ChipMinimalInfo {
    name: string;
    chipStyleType: number;
    color: string;
    position: Pos;
    inputPins: PinSaveInfo[];
    outputPins: PinSaveInfo[];
    Wires: WireSaveInfo[];
    SubChips: { name: string; id: number }[];
    constructor(
        name: string,
        chipStyleType: number = 1,
        color: string = "#909090",
        position: Pos = new Pos(),
        inputPins: PinSaveInfo[] = [],
        outputPins: PinSaveInfo[] = [],
        Wires: WireSaveInfo[] = [],
        SubChips: { name: string; id: number }[] = []
    ) {
        this.name = name;
        this.chipStyleType = chipStyleType;
        this.color = color;
        this.position = position;
        this.inputPins = inputPins;
        this.outputPins = outputPins;
        this.Wires = Wires;
        this.SubChips = SubChips;
    }
}
