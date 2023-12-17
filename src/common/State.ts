import { Pin } from "../Simulating/Pin";

export class State {
    private _value: State.States = State.States.UNDEFINED;
    listener: Pin;
    constructor(listener: Pin, defaultState?: State.States) {
        this.listener = listener;
        if (defaultState != undefined) this.value = defaultState;
    }
    set value(value: State.States) {
        this._value = value;
        this.listener.refreshState();
    }
    get value() {
        return this._value;
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
