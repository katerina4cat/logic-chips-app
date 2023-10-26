import { ChipModel } from "./ChipModel";
import { Pin } from "./Pin";
import { Pos } from "./Wire";

export class BUS extends ChipModel {
    constructor(chipID: number, Position: Array<Pos> = []) {
        super("BUS", chipID, "#fcc");
        this.InputPins = [new Pin(true, this, "", 0)];
        this.OutputPins = [new Pin(false, this, "", 1)];
        this.OutputPins[0].setState(this.InputPins[0].State);
        this.Position = Position;
    }
}
