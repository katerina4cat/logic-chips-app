import { ChipModel } from "./ChipModel";
import { Pin } from "./Pin";
import { Pos } from "./Wire";

export class NOT extends ChipModel {
    constructor(chipID: number, Position: Array<Pos> = []) {
        super(
            "NOT",
            chipID,
            "#8c1f1a",
            undefined,
            undefined,
            undefined,
            undefined,
            Position
        );
        this.IsBasedChip = true;
        this.InputPins = [new Pin(true, this, "In", 0, { X: 0, Y: 0.5 })];
        this.OutputPins = [new Pin(false, this, "Out", 1, { X: 0, Y: 0.5 })];
    }
    override RefreshLogic() {
        this.OutputPins[0].State.value =
            this.InputPins[0].State.value == -1
                ? 1
                : this.InputPins[0].State.value
                ? 0
                : 1;
        return true;
    }
}
