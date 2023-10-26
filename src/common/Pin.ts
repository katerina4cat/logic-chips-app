import { ChipModel } from "./ChipModel";
import { Color, Colors } from "./Wire";

export enum PinStates {
    "ERORR" = -2,
    "FLOATING" = -1,
    "LOW" = 0,
    "HIGH" = 1,
}

let StateIDS = 0;

export class PinState {
    private id = StateIDS;
    private _value: PinStates;
    private listeners: Array<ChipModel> = [];
    set value(value: PinStates) {
        const changed = this._value != value;
        this._value = value;
        if (changed)
            this.listeners.forEach((listener) => listener.RefreshLogic());
    }
    get value() {
        return this._value;
    }
    addListener(listener: ChipModel) {
        this.listeners.push(listener);
    }
    merge(pinState: PinState) {
        pinState.listeners.forEach((listener) => {
            this.addListener(listener);
        });
    }
    constructor(value: PinStates = PinStates.FLOATING) {
        StateIDS++;
        this._value = value;
    }
}

export class Pin {
    private _State: PinState[] = [new PinState()];
    get State(): PinState[] {
        return this._State;
    }
    set State(value: PinState[]) {
        value.forEach((pinState) => {
            this._State.forEach((thisPinState) => pinState.merge(thisPinState));
            this._State.push(pinState);
        });
    }
    setState(value: PinState[]) {
        this._State = value;
    }
    Name = "Pin";
    ID: number;
    IsInput = false;
    Chip: ChipModel;
    SubChipID = 0;
    PositionY: number;
    Color: Color = Colors.red;
    constructor(
        IsInput: boolean,
        Chip: ChipModel,
        Name: string = "Pin",
        ID: number = -1,
        PositionY: number = 0
    ) {
        this.IsInput = IsInput;
        this.Name = Name;
        this.Chip = Chip;
        this.ID = ID === -1 ? Date.now() : ID;
        this.PositionY = PositionY;
        this._State[0].value = PinStates.FLOATING;
    }
    getPinStatus() {
        const EnabledStates = this._State.filter(
            (state) =>
                state.value == PinStates.LOW || state.value == PinStates.HIGH
        );
        return EnabledStates.length > 2
            ? PinStates.ERORR
            : EnabledStates.length == 0
            ? PinStates.FLOATING
            : EnabledStates[0].value;
    }
    getColorWithState() {
        const stateToDisplay = this.IsInput
            ? this.getPinStatus()
            : this.getPinStatus();
        return `color-mix(in srgb, ${
            stateToDisplay == PinStates.ERORR ? Colors.error : this.Color.color
        } ${
            stateToDisplay == -2 || stateToDisplay == 1
                ? 100
                : stateToDisplay == -1
                ? 0
                : 25
        }%, ${Colors.floating.color})`;
    }
}
