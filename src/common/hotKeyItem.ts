export class hotKeyItem {
    keys: String[];
    altKey: boolean;
    ctrlKey: boolean;
    shiftKey: boolean;
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
    }
    event: () => void = () => {};
    testKey = (e: KeyboardEvent) => {
        if (
            e.altKey == this.altKey &&
            e.ctrlKey == this.ctrlKey &&
            e.shiftKey == e.shiftKey
        )
            for (const keyReq of this.keys) if (keyReq == e.key) return true;
        return false;
    };
}
