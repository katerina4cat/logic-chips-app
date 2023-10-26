import { ChipModel } from "./ChipModel";
import { Pin, PinStates } from "./Pin";
import { Pos } from "./Wire";

export class BUS extends ChipModel {
    constructor(chipID: number, Position: Array<Pos> = []) {
        super(
            "BUS",
            chipID,
            "#fcc",
            undefined,
            undefined,
            undefined,
            undefined,
            Position
        );
        this.IsBasedChip = true;
        this.InputPins = [new Pin(true, this, "", 0)];
        this.OutputPins = [new Pin(false, this, "", 1)];
    }
    override RefreshLogic() {
        const states = this.InputPins.filter(
            (pin) => pin.State.value != PinStates.FLOATING
        );
        console.log(states);
        this.OutputPins[0].State.value =
            states.length == 1 ? states[0].State.value : PinStates.FLOATING;
    }
}
