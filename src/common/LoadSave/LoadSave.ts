import { Pos } from "../Simulating/Wire";
import { chips } from "./chips";
import { AND } from "../Simulating/AND";
import { NOT } from "../Simulating/NOT";
import { TRI_STATE_BUFFER } from "../Simulating/TRI-STATE BUFFER";
import { ChipModel } from "../Simulating/ChipModel";
import { BUS } from "../Simulating/BUS";
import { InitilizeChipModel } from "./InitializeComponent";

export function CreateChip(
    chipName: string,
    chipID: number,
    Points: Array<Pos> = []
): ChipModel {
    switch (chipName) {
        case AND.name:
            return new AND(chipID, Points);
        case BUS.name:
            return new BUS(chipID, Points);
        case NOT.name:
            return new NOT(chipID, Points);
        case "TRI-STATE BUFFER":
            return new TRI_STATE_BUFFER(chipID, Points);
        default:
            return InitilizeChipModel(LoadChipInfo(chipName), chipID, Points);
    }
}

interface PinInfo {
    Name: string;
    ID: number;
    PositionY: number;
}

interface ChipInfo {
    Name: string;
    ID: number;
    Points: Array<Pos>;
}

interface WireInfo {
    Source: { SubChipID: number; PinID: number };
    Target: { SubChipID: number; PinID: number };
    WirePoints: Array<Pos>;
    ColourThemeName: string;
}

export interface ChipSaveStruct {
    Name: string;
    Colour: string;
    InputPins: Array<PinInfo>;
    OutputPins: Array<PinInfo>;
    SubChips: Array<ChipInfo>;
    Connections: Array<WireInfo>;
}

export function LoadChipInfo(ChipName: string) {
    return chips[ChipName] as ChipSaveStruct;
}
export function ChipHasInChip(ChipName: string, SubChipName: string) {
    if (chips[SubChipName]?.SubChips)
        for (const subChip of chips[SubChipName]?.SubChips) {
            if (subChip.Name == ChipName) return true;
            if (ChipHasInChip(ChipName, subChip.Name)) return true;
        }
    return false;
}
