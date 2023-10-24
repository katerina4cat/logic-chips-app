import { ChipModel } from "./ChipModel";
import { AND } from "./AND";
import { NOT } from "./NOT";

export class CustomChip extends ChipModel {}

export function CreateBaseChip(chipName: string, chipID: number): ChipModel {
    switch (chipName) {
        case AND.name:
            return new AND(chipID);
        case NOT.name:
            return new NOT(chipID);
        default:
            return CustomChip.FromJSON(chipName, chipID);
    }
}
