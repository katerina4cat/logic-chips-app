import { Color, Colors } from "../ViewModel/Colors";
import { Chip } from "./Chip";
import { Wire } from "./Wire";

export class Pin {
    id: number;
    name: string;
    position: Pos;
    color: Color = Colors.red;
    private _states: State[];
    get states() {
        return this._states;
    }
    chip: Chip;
    wires: Wire[];
    constructor(
        chip: Chip,
        id = Date.now(),
        name = "Pin",
        y = 0,
        hasDefaultState = false
    ) {
        this.id = id;
        this.name = name;
        this._states = [];
        this.chip = chip;
        this.wires = [];
        this.position = new Pos(undefined, y);
        if (hasDefaultState) {
            this._states.push(new State());
            this._states[0].value = State.States.LOW;
        }
    }

    getResultState() {
        let res = State.States.UNDEFINED;
        for (const state of this.states) {
            if (
                state.value == State.States.FLOATING ||
                res == State.States.FLOATING
            )
                res = State.States.FLOATING;
            else if (state.value != State.States.UNDEFINED) {
                if (res == State.States.UNDEFINED) res = state.value;
                else res = State.States.FLOATING;
            }
        }
        return res;
    }

    addState(state: State | State[]) {
        if (Array.isArray(state)) {
            state.forEach((oneState) => this.addState(oneState));
            return;
        }
        this._states.push(state);
        if (this.chip.isBase) state.addListener(this.chip.updateLogic);
        this.wires.forEach((wire) => {
            if (wire.target != this) wire.target.addState(state);
        });
    }

    removeState(state: State | State[]) {
        if (Array.isArray(state)) {
            state.forEach((oneState) => this.removeState(oneState));
            return;
        }
        const indexIn = this.states.indexOf(state);
        if (indexIn != -1) this.states.slice(indexIn, 1);
        else console.log("Ошибка при удалении связей -> Pin.ts:33");
        this.wires.forEach((wire) => {
            if (wire.target != this) wire.target.removeState(state);
        });
    }
}

export class Pos {
    x: number;
    y: number;
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}
export class State {
    private _value: State.States = State.States.UNDEFINED;
    private listeners: (() => void)[] = [];
    set value(value: State.States) {
        this._value = value;
        this.listeners.forEach((listener) => listener());
    }
    get value() {
        return this._value;
    }
    addListener(listener: () => void) {
        this.listeners.push(listener);
    }
    removeListener(listener: () => void) {
        const indexIn = this.listeners.indexOf(listener);
        if (indexIn != -1) this.listeners.splice(indexIn, 1);
    }
}

export namespace State {
    export enum States {
        "LOW" = 0,
        "HIGH" = 1,
        "FLOATING" = -2,
        "UNDEFINED" = -1,
    }
}
