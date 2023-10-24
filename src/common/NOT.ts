import { ChipModel } from "./ChipModel";
import { Pin } from "./Pin";

export class NOT extends ChipModel {
    constructor(chipID: number) {
        super("NOT", chipID, "#fff");
        this.IsBasedChip = true;
        this.InputPins = [new Pin(true, this, "In", 0, 0.5, 0)];
        this.OutputPins = [new Pin(false, this, "Out", 1, 0.5, 0)];
    }
    override RefreshLogic() {
        this.OutputPins[0].State.value = this.InputPins[0].State.value ? 0 : 1;
        this.RefreshedLogic = true;
        return true;
    }
}
