import { ChipModel } from "./ChipModel";
import { Color, Colors, Pos, Wire } from "./Wire";

export enum PinStates {
    "FLOATING" = -1,
    "LOW" = 0,
    "HIGH" = 1,
}
let StatesID = 0;

export class PinState {
    private _value: PinStates;
    private listeners: Array<ChipModel> = [];
    ID: number;

    set value(value: PinStates) {
        const changed = this._value != value;
        this._value = value;
        if (changed) this.refreshListeners();
    }
    get value() {
        return this._value;
    }

    /**
     * Заставляет всех слушателей просчитать свою логику
     */
    refreshListeners() {
        this.listeners.forEach((listener) => listener.RefreshLogic());
    }

    /**
     * Добавляет слушателя о изменении состояния. В основном слушатели это базовые чипы
     * @param listener Слушатель
     */
    addListener(listener: ChipModel) {
        this.listeners.push(listener);
    }
    /**
     * Удаляет из текущего состояния всех слушателей, которые имеются в **state**
     * @param state
     */
    removeListeners(state: PinState) {
        this.listeners = this.listeners.filter(
            (chip) => !state.listeners.includes(chip)
        );
    }
    /**
     * Удаляет из текущего состояния слушателя
     * @param state
     */
    removeListener(listener: ChipModel) {
        this.listeners = this.listeners.filter((chip) => listener != chip);
    }

    /**
     ** this<=**pinState**
     ** Добавляет всех listener'ов из **pinState**
     ** Заменяет listener'у значение пина на новое
     * @param pinState Состояние, которое удаляется
     */
    merge(pinState: PinState) {
        pinState.listeners.forEach((listener) => {
            this.addListener(listener);
            listener.InputPins.filter(
                (pin) => pin.State == pinState
            )[0]?.setState(this);
        });
    }

    /**
     * Отображает всех слушателей этого состояния
     */
    drawListeners() {
        this.listeners.forEach((listener) => console.log(this.ID, listener));
    }
    constructor(value: PinStates = PinStates.FLOATING) {
        this._value = value;
        this.ID = StatesID;
        StatesID++;
    }
}

let PinID = -1;
export class Pin {
    private _State: PinState = new PinState();
    get State(): PinState {
        return this._State;
    }
    set State(value: PinState) {
        value.merge(this.State);
        this._State = value;
    }
    /**
     * Устанавливает пину состояние, не объеденяя его с текущим
     * @param value
     */
    setState(value: PinState) {
        this._State = value;
    }

    /**
     * Перепривязывает все пины у текущего.
     */
    ReLinkPins(prevPin?: Pin) {
        this.Wires.forEach((wire) => {
            if (wire.Source == this) {
                wire.State = this.State;
                wire.Target.setState(this.State);
                if (wire.Target.Chip.IsBasedChip) {
                    if (prevPin) {
                        prevPin?.State.removeListener(wire.Target.Chip);
                        this.State.addListener(wire.Target.Chip);
                    }
                } else wire.Target.ReLinkPins(prevPin);
            }
        });
    }
    public ID: number;
    public Name = "Pin";
    public Chip: ChipModel;
    public Wires: Wire[] = [];

    public IsInput = false;
    public Position: Pos;
    public Color: Color = Colors.red;
    constructor(
        IsInput: boolean,
        Chip: ChipModel,
        Name: string = "Pin",
        ID?: number,
        Position: Pos = new Pos()
    ) {
        this.IsInput = IsInput;
        this.Name = Name;
        this.Chip = Chip;
        this.ID = ID !== undefined ? ID : PinID;
        this.Position = new Pos(Position.x, Position.y).fixPosY();
        this._State.value = PinStates.FLOATING;
        if (ID == undefined) PinID--;
    }
    /**
     *
     * @returns Текущий цвет, исходя из состояния чипа включен/выключен/неопределён
     */
    getColorWithState() {
        return `color-mix(in srgb, ${this.Color.color} ${
            this._State.value == 1 ? 100 : this._State.value == -1 ? 0 : 25
        }%, ${Colors.floating.color})`;
    }
}
