import { Pos } from "../common/Pos";
import { AND, Chip, NOT, TRI_STATE_BUFFER } from "./Chip";

export function loadChipByName(
    chipName: string,
    position: Pos = new Pos(),
    chipID: number = Date.now()
) {
    switch (chipName) {
        case "AND":
            return new AND(chipID, position);
        case "NOT":
            return new NOT(chipID, position);
        case "TRI-STATE BUFFER":
            return new TRI_STATE_BUFFER(chipID, position);
        default:
            return new Chip();
    }
}
