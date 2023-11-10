import { Pos } from "../Simulating/Wire";
import { chips } from "./chips";
import { AND } from "../Simulating/AND";
import { NOT } from "../Simulating/NOT";
import { TRI_STATE_BUFFER } from "../Simulating/TRI-STATE BUFFER";
import { BUS } from "../Simulating/BUS";
import { InitilizeChipModel } from "./InitializeComponent";

export function CreateChip(props: {
    chipName: string;
    chipID: number;
    Points?: Array<Pos>;
    isEditChip?: boolean;
}) {
    switch (props.chipName) {
        case AND.name:
            return (
                <AND
                    VisiblePinTitles={undefined}
                    VisibleAllPinTitles={undefined}
                    chipID={props.chipID}
                    Position={props.Points == undefined ? [] : props.Points}
                />
            );
        case BUS.name:
            return (
                <BUS
                    VisiblePinTitles={undefined}
                    VisibleAllPinTitles={undefined}
                    chipID={props.chipID}
                    Position={props.Points == undefined ? [] : props.Points}
                />
            );
        case NOT.name:
            return (
                <NOT
                    VisiblePinTitles={undefined}
                    VisibleAllPinTitles={undefined}
                    chipID={props.chipID}
                    Position={props.Points == undefined ? [] : props.Points}
                />
            );
        case "TRI-STATE BUFFER":
            return (
                <TRI_STATE_BUFFER
                    VisiblePinTitles={undefined}
                    VisibleAllPinTitles={undefined}
                    chipID={props.chipID}
                    Position={props.Points == undefined ? [] : props.Points}
                />
            );
        default:
            return InitilizeChipModel(
                LoadChipInfo(props.chipName),
                props.chipID,
                props.isEditChip == undefined ? false : props.isEditChip
            );
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
