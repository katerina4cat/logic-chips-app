import { ChipModel } from "./ChipModel";

export enum PinState {
    "FLOATING" = -1,
    "LOW" = 0,
    "HIGH" = 1,
}

export class PinInfo {
    public State: PinState = PinState.FLOATING;
    PinID: number = Date.now();
    ID: number;
    Name = "Pin";
    PositionY: number = 0;
    IsInput = false;
    Chip: ChipModel;
    ColourThemeName = "Red";
    PinType = 1;
    SubChipID = 0;
    constructor(IsInput: boolean, Chip: ChipModel, PinID?: number) {
        this.IsInput = IsInput;
        this.Chip = Chip;
        if (PinID) this.PinID = PinID;
        this.ID = this.PinID;
    }
}
