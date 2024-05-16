import { Pin } from "../Pin";
import { Pos } from "../../common/Pos";
import { Chip } from "../Chip";
import { ChipTypes } from "@shared/models/saves/ChipInfo";

export class EIGHT_SEGMENT extends Chip {
    isBase = true;
    constructor(id = Date.now(), position?: Pos) {
        super(undefined, id, "8 SEGMENT", "#242529", position);
        this.chipType = ChipTypes.EightSegment;
        this.input = [
            new Pin(this, true, 0, "A"),
            new Pin(this, true, 1, "B"),
            new Pin(this, true, 2, "C"),
            new Pin(this, true, 3, "D"),
            new Pin(this, true, 4, "E"),
            new Pin(this, true, 5, "F"),
            new Pin(this, true, 6, "G"),
            new Pin(this, true, 7, "DP"),
        ];
    }

    override updatedOutputs() {}
}
