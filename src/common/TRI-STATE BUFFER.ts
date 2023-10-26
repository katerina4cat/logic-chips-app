import { ChipModel } from "./ChipModel";
import { Pin } from "./Pin";
import { Pos } from "./Wire";

export class TRI_STATE_BUFFER extends ChipModel {
    constructor(chipID: number, Position: Array<Pos> = []) {
        super("TRI-STATE BUFFER", chipID, "#262626");
        this.IsBasedChip = true;
        this.InputPins = [
            new Pin(true, this, "Enabled", 0, 0.25),
            new Pin(true, this, "Data", 1, 0.75),
        ];
        this.OutputPins = [new Pin(false, this, "Out", 2, 0.5)];
        this.Position = Position;
    }
    override RefreshLogic() {
        this.OutputPins[0].State.forEach((states) => {
            states.value = this.InputPins[0].getPinStatus()
                ? this.InputPins[1].getPinStatus()
                : -1;
        });
        return true;
    }
}
