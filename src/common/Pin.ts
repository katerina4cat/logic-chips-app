import { ChipModel } from "./ChipModel";

export enum PinStates {
    "FLOATING" = -1,
    "LOW" = 0,
    "HIGH" = 1,
}
export class PinState {
    public value: PinStates;
    constructor(value: PinStates = PinStates.FLOATING) {
        this.value = value;
    }
}

export class Pin {
    State: PinState = new PinState();
    Name = "Pin";
    ID: number;
    IsInput = false;
    Chip: ChipModel;
    SubChipID = 0;
    PositionY: number;
    constructor(
        IsInput: boolean,
        Chip: ChipModel,
        Name: string = "Pin",
        ID: number = -1,
        PositionY: number = 0,
        pinStatus: PinStates = PinStates.FLOATING
    ) {
        this.IsInput = IsInput;
        this.Name = Name;
        this.Chip = Chip;
        this.ID = ID === -1 ? Date.now() : ID;
        this.PositionY = PositionY;
        this.State.value = pinStatus;
    }
}
