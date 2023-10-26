import { ChipModel } from "./ChipModel";
import { Pin } from "./Pin";
import { Pos } from "./Wire";

export class TRI_STATE_BUFFER extends ChipModel {
    constructor(chipID: number, Position: Array<Pos> = []) {
        super(
            "TRI-STATE BUFFER",
            chipID,
            "#262626",
            undefined,
            undefined,
            undefined,
            undefined,
            Position
        );
        this.IsBasedChip = true;
        this.InputPins = [
            new Pin(true, this, "Enabled", 0, 0.25),
            new Pin(true, this, "Data", 1, 0.75),
        ];
        this.OutputPins = [new Pin(false, this, "Out", 2, 0.5)];
    }
    override RefreshLogic() {
        this.OutputPins[0].State.value = this.InputPins[0].State.value
            ? this.InputPins[1].State.value
            : -1;
        return true;
    }
}
