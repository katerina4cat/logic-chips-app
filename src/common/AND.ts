import { ChipModel } from "./ChipModel";
import { Pin } from "./Pin";
import { Pos } from "./Wire";

export class AND extends ChipModel {
    constructor(chipID: number, Position: Array<Pos> = []) {
        super("AND", chipID, "#267ab2");
        this.IsBasedChip = true;
        this.InputPins = [
            new Pin(true, this, "A", 0, 0.25),
            new Pin(true, this, "B", 1, 0.75),
        ];
        this.OutputPins = [new Pin(false, this, "Out", 2, 0.5)];
        this.Position = Position;
    }
    override RefreshLogic() {
        this.OutputPins[0].State.forEach((states) => {
            const value =
                this.InputPins[0].getPinStatus() &&
                this.InputPins[1].getPinStatus();
            if (this.OutputPins[0].getPinStatus() === -1) states.value = 0;
            else if (this.OutputPins[0].getPinStatus() === -2)
                states.value = -2;
            else states.value = value;
        });
        return true;
    }
}
