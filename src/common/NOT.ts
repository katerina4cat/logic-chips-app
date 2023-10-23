import { ChipModel } from "./ChipModel";
import { PinInfo } from "./Pin";

export class NOT extends ChipModel {
    constructor(chipID: number) {
        super({ Name: "NOT", Colour: "#ddd", chipID: chipID });
        this.IsBasedChip = true;
        this.InputPins = [new PinInfo(true, this)];
        this.OutputPins = [new PinInfo(false, this)];
    }
    override StartChipLogic() {
        this.OutputPins[0].State = this.InputPins[0].State ? 0 : 1;
        return true;
    }
}
