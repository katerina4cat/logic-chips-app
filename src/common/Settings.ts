import { hotKeyItem } from "./hotKeyItem";

export const BusEndPosWidth: number = 8;
/**
 * DEBUG
 */
export const busID = false;
export const manyBusSpace = 12;
export const hotkeys = {
    save: new hotKeyItem(["s", "S", "ы", "Ы"], undefined, true),
    library: new hotKeyItem(["a", "A", "ф", "Ф"], undefined, true),
    newChip: new hotKeyItem(["d", "D", "в", "В"], undefined, true),
    hideAllPin: new hotKeyItem(["Tab"]),
    hideChipPins: new hotKeyItem(["q", "Q", "й", "Й"]),
    cancelAction: new hotKeyItem(["Escape"]),
    remove: new hotKeyItem(["Backspace"]),
    addCount: new hotKeyItem(["ArrowUp", "ArrowRight"]),
    reduceCount: new hotKeyItem(["ArrowDown", "ArrowLeft"]),
};
