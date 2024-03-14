import { Color, Colors } from "../common/Colors";
import { removeElementByID } from "../common/RemoveElement";
import { Chip } from "./Chip";
import { Pos } from "../common/Pos";
import { State } from "../common/State";
import { action, computed, makeObservable, observable } from "mobx";

export type PinState = { id: number; value: State.States };

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
    @observable states: PinState[] = [];
    @computed get totalState() {
        let res = State.States.UNDEFINED;
        for (const state of this.states.map((x) => x.value)) {
            if (state == State.States.FLOATING) return State.States.FLOATING;
            else if (state != State.States.UNDEFINED) {
                if (res == State.States.UNDEFINED) res = state;
                else return State.States.FLOATING;
            }
        }
        return res;
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
        this.states = [];
        this.chip = chip;
        this.deltaPos = new Pos(undefined, y);
        this.canUpdatePropagate = canUpdatePropagate;
        if (deltaPos) this.deltaPos = deltaPos;
        if (hasDefaultState) {
            this.states.push({ id: this.id, value: State.States.LOW });
        }
    }

    /**
     * Добавляет состояние связанного пина в список
     * @param state Состояние связанного пина
     * @returns
     */
    @action addState(state: PinState | PinState[]) {
        if (Array.isArray(state)) this.states.push(...state);
        else this.states.push(state);
    }

    /**
     * Удаляет состояние из списка
     * @param state Состояние удаляемой связи
     * @returns
     */
    @action removeState(state: PinState | PinState[]) {
        if (Array.isArray(state)) {
            state.forEach((oneState) => this.removeState(oneState));
            return;
        }
        removeElementByID(this.states, state);
    }

    /**
     * Обновляет состояние связанного пина в списоке
     * @param state Состояние связанного пина
     * @returns
     */
    @action refreshState(state: PinState) {
        const founded = this.states.filter((sta) => sta.id == state.id)[0];
        if (founded) founded.value = state.value;
    }
}
