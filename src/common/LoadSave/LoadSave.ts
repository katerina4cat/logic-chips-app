import { chips } from "./chips";
import { AND } from "../Simulating/AND";
import { NOT } from "../Simulating/NOT";
import { TRI_STATE_BUFFER } from "../Simulating/TRI-STATE BUFFER";
import { ChipModel } from "../Simulating/ChipModel";
import { BUS } from "../Simulating/BUS";
import { InitilizeChipModel } from "./InitializeComponent";
import { Pos } from "../Simulating/Wire";

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
            return InitilizeChipModel(
                LoadChipInfo(chipName),
                chipID,
                { current: null },
                Points
            );
    }
}

interface LoadedPin {
    Name: string;
    ID: number;
    PositionY: number;
}

interface LoadedSubChip {
    Name: string;
    ID: number;
    Points: Array<Pos>;
}

interface LoadedWire {
    Source: { SubChipID: number; PinID: number; PinType: number };
    Target: { SubChipID: number; PinID: number; PinType: number };
    WirePoints: Array<Pos>;
    ColourThemeName: string;
}

export interface LoadedChipSave {
    Name: string;
    Colour: string;
    InputPins: Array<LoadedPin>;
    OutputPins: Array<LoadedPin>;
    SubChips: Array<LoadedSubChip>;
    Connections: Array<LoadedWire>;
}

export function LoadChipInfo(ChipName: string) {
    return chips[ChipName] as LoadedChipSave;
}
export function ChipHasInChip(ChipName: string, SubChipName: string) {
    if (chips[SubChipName]?.SubChips)
        for (const subChip of chips[SubChipName]?.SubChips) {
            if (subChip.Name == ChipName) return true;
            if (ChipHasInChip(ChipName, subChip.Name)) return true;
        }
    return false;
}
