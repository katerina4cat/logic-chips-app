import { ChipModel } from "./ChipModel";
import { PinInfo } from "./Pin";

export class AND extends ChipModel {
    constructor(chipID: number) {
        super({ Name: "AND", Colour: "#fcc", chipID: chipID });
        this.IsBasedChip = true;
        this.InputPins = [new PinInfo(true, this), new PinInfo(true, this)];
        this.InputPins[1].PositionY = 1;
        this.OutputPins = [new PinInfo(false, this)];
    }
    override StartChipLogic() {
        this.OutputPins[0].State =
            this.InputPins[0].State && this.InputPins[1].State;
        if (this.OutputPins[0].State === -1) this.OutputPins[0].State = 0;
        return true;
    }
}
