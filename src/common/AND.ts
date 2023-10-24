import { ChipModel } from "./ChipModel";
import { Pin } from "./Pin";

export class AND extends ChipModel {
    constructor(chipID: number) {
        super("AND", chipID, "#fcc");
        this.IsBasedChip = true;
        this.InputPins = [
            new Pin(true, this, "A", 0, 0.25, 0),
            new Pin(true, this, "B", 1, 0.75, 0),
        ];
        this.OutputPins = [new Pin(false, this, "Out", 2, 0.5)];
    }
    override RefreshLogic() {
        console.log(this.InputPins.map((e) => e.State.value));
        this.OutputPins[0].State.value =
            this.InputPins[0].State.value && this.InputPins[1].State.value;
        if (this.OutputPins[0].State.value === -1)
            this.OutputPins[0].State.value = 0;
        this.RefreshedLogic = true;
        return true;
    }
}
