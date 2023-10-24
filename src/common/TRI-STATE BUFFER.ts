import { ChipModel } from "./ChipModel";
import { PinInfo } from "./Pin";

export class TRI_STATE_BUFFER extends ChipModel {
    constructor(chipID: number) {
        super({ Name: "TRI-STATE BUFFER", Colour: "#ddd", chipID: chipID });
        this.IsBasedChip = true;
        this.InputPins = [
            new PinInfo(true, this, 0),
            new PinInfo(true, this, 1),
        ];
        this.OutputPins = [new PinInfo(false, this, 2)];
    }
    override RecurseState() {
        this.OutputPins[0].State = this.InputPins[0].State
            ? this.InputPins[1].State
            : -1;
        return true;
    }
}
