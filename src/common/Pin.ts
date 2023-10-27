import { ChipModel } from "./ChipModel";
import { Color, Colors, Pos, Wire, fixPos, fixPosY } from "./Wire";

export enum PinStates {
    "FLOATING" = -1,
    "LOW" = 0,
    "HIGH" = 1,
}

export class PinState {
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
            listener.InputPins.filter(
                (pin) => pin.State === pinState
            )[0].setState(this);
        });
    }
    constructor(value: PinStates = PinStates.FLOATING) {
        this._value = value;
    }
}

export class Pin {
    private _State: PinState = new PinState();
    public Wires: Wire[] = [];
    get State(): PinState {
        return this._State;
    }
    set State(value: PinState) {
        value.merge(this.State);
        this._State = value;
    }
    setState(value: PinState) {
        this._State = value;
    }
    Name = "Pin";
    ID: number;
    IsInput = false;
    Chip: ChipModel;
    SubChipID = 0;
    Position: Pos;
    Color: Color = Colors.red;
    constructor(
        IsInput: boolean,
        Chip: ChipModel,
        Name: string = "Pin",
        ID: number = -1,
        Position: Pos = { X: 0, Y: 0 }
    ) {
        this.IsInput = IsInput;
        this.Name = Name;
        this.Chip = Chip;
        this.ID = ID === -1 ? Date.now() : ID;
        this.Position = fixPos(Position);
        this._State.value = PinStates.FLOATING;
    }
    getColorWithState() {
        return `color-mix(in srgb, ${this.Color.color} ${
            this._State.value == 1 ? 100 : this._State.value == -1 ? 0 : 25
        }%, ${Colors.floating.color})`;
    }
}
