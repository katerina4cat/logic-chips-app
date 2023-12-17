import { Color, Colors } from "../common/Colors";
import { removeElement } from "../common/RemoveElement";
import { Chip } from "./Chip";
import { Pos } from "../common/Pos";
import { Wire } from "./Wire";
import { State } from "../common/State";

export class Pin {
    id: number;
    name: string;
    position: Pos;
    color: Color = Colors.red;
    isInput: boolean;
    private _states: State[];
    totalState: State.States = State.States.UNDEFINED;
    updateObject?: () => void;
    updatePos?: () => void;
    get states() {
        return this._states;
    }
    chip: Chip;
    outWires: Wire[];
    inWires: Wire[];
    constructor(
        chip: Chip,
        input: boolean,
        id = Date.now(),
        name = "Pin",
        y = 0,
        hasDefaultState = false
    ) {
        this.id = id;
        this.isInput = input;
        this.name = name;
        this._states = [];
        this.chip = chip;
        this.outWires = [];
        this.inWires = [];
        this.position = new Pos(undefined, y);
        if (hasDefaultState) {
            this._states.push(new State(this));
            this._states[0].value = State.States.LOW;
        }
    }

    private getResultState() {
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

    refreshState() {
        this.totalState = this.getResultState();
        this.outWires.forEach((wire) => {
            if (wire.target != this) wire.target.refreshState();
        });
        if (this.updateObject) {
            this.updateObject();
            this.outWires.forEach((wire) => wire.updateColor());
        }
    }

    addState(state: State | State[]) {
        if (Array.isArray(state)) {
            state.forEach((oneState) => this.addState(oneState));
            return;
        }
        this._states.push(state);
        state.value = state.value;
        this.outWires.forEach((wire) => {
            if (wire.target != this) wire.target.addState(state);
        });
    }

    removeState(state: State | State[]) {
        if (Array.isArray(state)) {
            state.forEach((oneState) => this.removeState(oneState));
            return;
        }
        removeElement(this.states, state);
        this.refreshState();
        this.outWires.forEach((wire) => {
            if (wire.target != this) wire.target.removeState(state);
        });
    }
}
