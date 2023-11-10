import { ChipModel, ChipModelRequiredProps } from "./ChipModel";
import { Pin, PinStates } from "./Pin";

export class BUS extends ChipModel {
    constructor(props: ChipModelRequiredProps) {
        super(props);
        this.setConfigsChip(
            "BUS",
            props.chipID,
            "#fcc",
            undefined,
            undefined,
            undefined,
            undefined,
            props.Position
        );
        this.IsBasedChip = true;
        this.InputPins = [new Pin(true, this, "", 0)];
        this.OutputPins = [new Pin(false, this, "", 1)];
    }
    override RefreshLogic() {
        const states = this.InputPins.filter(
            (pin) => pin.State.value != PinStates.FLOATING
        );
        this.OutputPins[0].State.value =
            states.length == 1 ? states[0].State.value : PinStates.FLOATING;
    }
}
