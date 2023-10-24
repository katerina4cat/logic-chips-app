import { ChipModel } from "./ChipModel";
import { AND } from "./AND";
import { NOT } from "./NOT";
import { TRI_STATE_BUFFER } from "./TRI-STATE BUFFER";

export class CustomChip extends ChipModel {}

export function CreateBaseChip(chipName: string, chipID: number): ChipModel {
    switch (chipName) {
        case AND.name:
            return new AND(chipID);
        case NOT.name:
            return new NOT(chipID);
        case "TRI-STATE BUFFER":
            return new TRI_STATE_BUFFER(chipID);
        default:
            return ChipModel.FromJSON(chipName, chipID);
    }
}
