import { ChipModel } from "./ChipModel";
import { Pin } from "./Pin";
import { Pos } from "./Wire";

export class BUS extends ChipModel {
    constructor(chipID: number, Position: Array<Pos> = []) {
        super("BUS", chipID, "#fcc");
        this.IsBasedChip = false;
        this.InputPins = [new Pin(true, this, "In", 0)];
        this.OutputPins = [];
        this.OutputPins.push(this.InputPins[0]);
        this.Position = Position;
    }
    override RefreshLogic() {
        return true;
    }
}
