import { ChipModel, ChipModelRequiredProps } from "./ChipModel";
import { Pin } from "./Pin";

export class NOT extends ChipModel {
    constructor(props: ChipModelRequiredProps) {
        super(props);
        this.setConfigsChip(
            "NOT",
            props.chipID,
            "#8c1f1a",
            undefined,
            undefined,
            undefined,
            undefined,
            props.Position
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
