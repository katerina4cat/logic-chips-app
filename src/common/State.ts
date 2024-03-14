import { makeObservable, observable } from "mobx";

export class State {
    @observable value: State.States = State.States.UNDEFINED;
    constructor(defaultState?: State.States) {
        if (defaultState != undefined) this.value = defaultState;
        makeObservable(this);
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
