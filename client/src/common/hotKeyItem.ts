import { action, makeObservable, observable } from "mobx";

export const changedHotKey = { current: () => {} };

export class hotKeyItem {
    @observable keys: String[];
    @observable altKey: boolean;
    @observable ctrlKey: boolean;
    @observable shiftKey: boolean;
    constructor(
        keys: String[],
        altKey?: boolean,
        ctrlKey?: boolean,
        shiftKey?: boolean
    ) {
        this.keys = keys;
        this.altKey = altKey || false;
        this.ctrlKey = ctrlKey || false;
        this.shiftKey = shiftKey || false;
        makeObservable(this);
    }
    @action setKeys = (value: String[]) => {
        this.keys = value;
        changedHotKey.current();
    };
    @action setAlt = (value: boolean) => {
        this.altKey = value;
        changedHotKey.current();
    };
    @action setCtrl = (value: boolean) => {
        this.ctrlKey = value;
        changedHotKey.current();
    };
    @action setShift = (value: boolean) => {
        this.shiftKey = value;
        changedHotKey.current();
    };
    event: () => void = () => {};
    testKey = (e: KeyboardEvent) => {
        if (
            e.altKey == this.altKey &&
            e.ctrlKey == this.ctrlKey &&
            e.shiftKey == this.shiftKey
        )
            for (const keyReq of this.keys) if (keyReq === e.code) return true;
        return false;
    };
}
