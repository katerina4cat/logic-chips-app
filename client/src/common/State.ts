import { computed, makeObservable, observable } from "mobx";
import { Pin } from "../Simulating/Pin";

export enum States {
    "LOW" = 0,
    "HIGH" = 1,
    "FLOATING" = -2,
    "UNDEFINED" = -1,
}

export class PinState {
    id: number;
    @observable value: States;
    @observable pin?: Pin;
    constructor(id: number, value?: States, pin?: Pin) {
        this.id = id;
        this.value = value !== undefined ? value : States.UNDEFINED;
        this.pin = pin;
        makeObservable(this);
    }

    @computed get state() {
        return this.pin ? this.pin?.totalState : this.value;
    }
}
