import { ChipModel } from "./ChipModel";
import { Pin } from "./Pin";
import { Pos } from "./Wire";

export class AND extends ChipModel {
    constructor(chipID: number, Position: Array<Pos> = []) {
        super(
            "AND",
            chipID,
            "#267ab2",
            undefined,
            undefined,
            undefined,
            undefined,
            Position
        );
        this.IsBasedChip = true;
        this.InputPins = [
            new Pin(true, this, "A", 0, { X: 0, Y: 0.25 }),
            new Pin(true, this, "B", 1, { X: 0, Y: 0.75 }),
        ];
        this.OutputPins = [new Pin(false, this, "Out", 2, { X: 0, Y: 0.5 })];
    }
    override ReLink(InputPin: Pin) {
        this.RefreshLogic();
        return true;
    }
    override RefreshLogic() {
        this.OutputPins[0].State.value =
            this.InputPins[0].State.value && this.InputPins[1].State.value;

        if (
            this.OutputPins[0].State.value === -1 ||
            this.InputPins[0].State.value == -1 ||
            this.InputPins[1].State.value == -1
        )
            this.OutputPins[0].State.value = 0;
        this.RefreshedLogic = true;
        return true;
    }
}
