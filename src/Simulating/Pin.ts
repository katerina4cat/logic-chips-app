import { Color, Colors, getColorWithState } from "../common/Colors";
import { removeElement } from "../common/RemoveElement";
import { Chip } from "./Chip";
import { Pos } from "../common/Pos";
import { Wire } from "./Wire";
import { State } from "../common/State";
import React, { createRef } from "react";

export class Pin {
    id: number;
    name: string;
    position: Pos;
    color: Color = Colors.red;
    isInput: boolean;
    private _states: State[];
    totalState: State.States = State.States.UNDEFINED;
    graphicalObject: React.RefObject<SVGCircleElement>;
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
        hasDefaultState = false,
        position?: Pos,
        defaultIsUndefined?: boolean
    ) {
        this.id = id;
        this.isInput = input;
        this.name = name;
        this._states = [];
        this.chip = chip;
        this.outWires = [];
        this.inWires = [];
        this.position = new Pos(undefined, y);
        if (position) this.position = position;
        this.graphicalObject = createRef();
        if (hasDefaultState) {
            this._states.push(new State(this));
            this._states[0].value = defaultIsUndefined
                ? State.States.UNDEFINED
                : State.States.LOW;
        }
    }

    /**
     * Получает результирующий результат от связанных состояний
     * @returns
     */
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

    /**
     * Обновнялет состояние пина, по цепочке обновляет связанные пины.
     */
    refreshState = () => {
        this.totalState = this.getResultState();
        if (this.graphicalObject.current)
            this.graphicalObject.current.style.backgroundColor =
                getColorWithState(this.totalState, this.color);

        this.outWires.forEach((wire) => {
            if (wire.target != this) {
                wire.target.refreshState();
                if (wire.target.chip.isBase) wire.target.chip.updateLogic();
            }
        });
        if (this.updateObject) {
            this.updateObject();
        }
        this.outWires.forEach((wire) => wire.updateColor());
    };

    /**
     * Добавляет состояние связанного пина в список
     * @param state Состояние связанного пина
     * @returns
     */
    addState(state: State | State[]) {
        if (Array.isArray(state)) {
            state.forEach((oneState) => this.addState(oneState));
            return;
        }
        this._states.push(state);
        this.refreshState();
        this.outWires.forEach((wire) => {
            if (wire.target != this) wire.target.addState(state);
        });
    }

    /**
     * Удаляет состояние из списка
     * @param state Состояние удаляемой связи
     * @returns
     */
    removeState(state: State | State[]) {
        if (Array.isArray(state)) {
            state.forEach((oneState) => this.removeState(oneState));
            return;
        }
        removeElement(this.states, state);
        this.refreshState();
        if (this.chip.isBase) this.chip.updateLogic();
        this.outWires.forEach((wire) => {
            if (wire.target != this) wire.target.removeState(state);
        });
    }

    /**
     * Удаляет все внешнии провода пина
     * @param allChipWire Все провода текущего редактируемого чипа, которые нужно удалить для корректного отображения.
     */
    removeAllWire(allChipWire: Wire[]) {
        while (
            (this.isInput ? this.inWires.length : this.outWires.length) > 0
        ) {
            removeElement(
                allChipWire,
                (this.isInput ? this.inWires : this.outWires)[0]
            );
            (this.isInput ? this.inWires : this.outWires)[0].deletingWire();
        }
    }
}
