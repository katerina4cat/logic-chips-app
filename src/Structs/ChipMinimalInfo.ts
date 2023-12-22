import { Pos } from "../common/Pos";
import { PinSaveInfo } from "./PinInfo";
import { WireSaveInfo } from "./WireSaveInfo";

export class ChipMinimalInfo {
    name: string;
    chipStyleType: number;
    color: string;
    inputPins: PinSaveInfo[];
    outputPins: PinSaveInfo[];
    Wires: WireSaveInfo[];
    SubChips: { name: string; id: number; position: Pos }[];
    constructor(
        name: string,
        chipStyleType: number = 1,
        color: string = "#909090",
        inputPins: PinSaveInfo[] = [],
        outputPins: PinSaveInfo[] = [],
        Wires: WireSaveInfo[] = [],
        SubChips: { name: string; id: number; position: Pos }[] = []
    ) {
        this.name = name;
        this.chipStyleType = chipStyleType;
        this.color = color;
        this.inputPins = inputPins;
        this.outputPins = outputPins;
        this.Wires = Wires;
        this.SubChips = SubChips;
    }
}
