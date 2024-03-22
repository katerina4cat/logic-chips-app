import { Color, Colors } from "../common/Colors";
import { removeElementByID } from "../common/RemoveElement";
import { Chip } from "./Chip";
import { Pos } from "../common/Pos";
import { States } from "../common/State";
import { action, computed, makeObservable, observable } from "mobx";
import { Bus } from "./BaseChips/Bus";
import { PinState } from "../common/State";

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
        let res = States.UNDEFINED;
        for (const state of this.states) {
            if (state.state === States.FLOATING) return States.FLOATING;
            else if (state.state !== States.UNDEFINED) {
                if (res === States.UNDEFINED) res = state.state as States;
                else return States.FLOATING;
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
        this.chip = chip;
        this.deltaPos = deltaPos || new Pos(undefined, y);
        this.canUpdatePropagate = canUpdatePropagate;
        if (hasDefaultState) {
            this.addState(new PinState(this.id, States.LOW));
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
        this.states.forEach((fstate, i) => {
            if (fstate.id === state.id) {
                this.states[i].value = state.value;
            }
        });
    }
}

export class BusPin extends Pin {
    @observable distanceFromZero;
    constructor(
        chip: Bus,
        distance: number,
        input: boolean,
        id = Date.now(),
        name = "BPin",
        y = 0,
        hasDefaultState = false,
        deltaPos?: Pos,
        canUpdatePropagate = true
    ) {
        super(
            chip,
            input,
            id,
            name,
            y,
            hasDefaultState,
            deltaPos,
            canUpdatePropagate
        );
        this.distanceFromZero = distance;
    }
}
