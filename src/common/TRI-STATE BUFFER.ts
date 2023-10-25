import { ChipModel } from "./ChipModel";
import { Pin } from "./Pin";

export class TRI_STATE_BUFFER extends ChipModel {
    constructor(chipID: number) {
        super("TRI-STATE BUFFER", chipID, "#ddd");
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
        this.RefreshedLogic = true;
        return true;
    }
}
