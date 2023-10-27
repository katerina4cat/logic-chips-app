import { Pos, Position } from "./Wire";
import { chips } from "./chips";
import { AND } from "./AND";
import { NOT } from "./NOT";
import { TRI_STATE_BUFFER } from "./TRI-STATE BUFFER";
import { ChipModel, InitilizeChipModel } from "./ChipModel";
import { BUS } from "./BUS";

export function CreateChip(
    chipName: string,
    chipID: number,
    Points: Array<Position> = []
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
    Points: Array<Position>;
}

interface WireInfo {
    Source: { SubChipID: number; PinID: number };
    Target: { SubChipID: number; PinID: number };
    WirePoints: Array<Position>;
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
