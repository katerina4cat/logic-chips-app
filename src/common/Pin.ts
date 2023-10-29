import { ChipModel } from "./ChipModel";
import { Color, Colors, Pos, Wire, fixPosY } from "./Wire";

export enum PinStates {
    "FLOATING" = -1,
    "LOW" = 0,
    "HIGH" = 1,
}

export class PinState {
    private _value: PinStates;
    public id: number;
    public listeners: Array<ChipModel> = [];
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
    //Убрать у this слушателей, которые есть в state
    removeListeners(state: PinState) {
        console.log(this.listeners);
        console.log(state.listeners);
        this.listeners = this.listeners.filter(
            (chip) => !state.listeners.includes(chip)
        );
        console.log(this.listeners);
    }
    merge(pinState: PinState) {
        pinState.listeners.forEach((listener) => {
            this.addListener(listener);
            listener.InputPins.filter(
                (pin) => pin.State === pinState
            )[0].setState(this);
        });
    }
    constructor(value: PinStates = PinStates.FLOATING, id: number = -1) {
        this._value = value;
        this.id = id;
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
        this._State = new PinState(undefined, this.ID);
        this.Position = { X: Position.X, Y: fixPosY(Position.Y) };
    }
    getColorWithState() {
        return `color-mix(in srgb, ${this.Color.color} ${
            this._State.value == 1 ? 100 : this._State.value == -1 ? 0 : 25
        }%, ${Colors.floating.color})`;
    }
}
