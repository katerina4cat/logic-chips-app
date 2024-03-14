import { Color, Colors } from "../common/Colors";
import { removeElement } from "../common/RemoveElement";
import { Chip } from "./Chip";
import { Pos } from "../common/Pos";
import { State } from "../common/State";
import { action, computed, makeObservable, observable } from "mobx";

export class Pin {
    id: number;
    @observable name: string;
    @computed get position() {
        return this.chip.position.adding(this.deltaPos);
    }
    @observable deltaPos = new Pos();
    @observable color: Color = Colors.red;
    @observable chip: Chip;
    isInput: boolean;
    canUpdatePropagate: boolean;
    @observable private _states: State[];
    @computed get totalState() {
        let res = new State(State.States.UNDEFINED);
        for (const state of this.states) {
            if (state.value == State.States.FLOATING)
                return new State(State.States.FLOATING);
            else if (state.value != State.States.UNDEFINED) {
                if (res.value == State.States.UNDEFINED)
                    res.value = state.value;
                else return new State(State.States.FLOATING);
            }
        }
        return res;
    }
    get states() {
        return this._states;
    }
    constructor(
        chip: Chip,
        input: boolean,
        id = Date.now(),
        name = "Pin",
        y = 0,
        hasDefaultState = false,
        deltaPos?: Pos,
        canUpdatePropagate = true
    ) {
        makeObservable(this);
        this.id = id;
        this.isInput = input;
        this.name = name;
        this._states = [];
        this.chip = chip;
        this.deltaPos = new Pos(undefined, y);
        this.canUpdatePropagate = canUpdatePropagate;
        if (deltaPos) this.deltaPos = deltaPos;
        if (hasDefaultState) {
            this._states.push(new State(State.States.LOW));
        }
    }

    /**
     * Добавляет состояние связанного пина в список
     * @param state Состояние связанного пина
     * @returns
     */
    @action addState(state: State | State[]) {
        if (Array.isArray(state)) this.states.push(...state);
        else this.states.push(state);
    }

    /**
     * Удаляет состояние из списка
     * @param state Состояние удаляемой связи
     * @returns
     */
    @action removeState(state: State | State[]) {
        if (Array.isArray(state)) {
            state.forEach((oneState) => this.removeState(oneState));
            return;
        }
        removeElement(this.states, state);
        // if (this.chip.isBase) this.chip.updateLogic();
    }
}
