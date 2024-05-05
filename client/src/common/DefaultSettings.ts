import { hotKeyItem } from "./hotKeyItem";

export const BusEndPosWidth: number = 8;
/**
 * DEBUG
 */
export const busID = false;
export interface IHotKeys {
    save: hotKeyItem;
    library: hotKeyItem;
    newChip: hotKeyItem;
    hideAllPin: hotKeyItem;
    hideChipPins: hotKeyItem;
    cancelAction: hotKeyItem;
    remove: hotKeyItem;
    addCount: hotKeyItem;
    reduceCount: hotKeyItem;
}
export const defaultHotKeys: IHotKeys = {
    save: new hotKeyItem(["KeyS"], undefined, true),
    library: new hotKeyItem(["KeyA"], undefined, true),
    newChip: new hotKeyItem(["KeyD"], undefined, true),
    hideAllPin: new hotKeyItem(["Tab"]),
    hideChipPins: new hotKeyItem(["KeyQ"]),
    cancelAction: new hotKeyItem(["Escape"]),
    remove: new hotKeyItem(["Backspace"]),
    addCount: new hotKeyItem(["ArrowUp", "ArrowRight"]),
    reduceCount: new hotKeyItem(["ArrowDown", "ArrowLeft"]),
};
export const hotkeyInfo: { [key in keyof IHotKeys]: { title: string } } = {
    save: {
        title: "Сохранение",
    },
    library: {
        title: "Список чипов",
    },
    newChip: {
        title: "Новый чип",
    },
    hideAllPin: {
        title: "Скрыть все описания пинов",
    },
    hideChipPins: {
        title: "Скрыть описания пинов дочерних чипов",
    },
    cancelAction: {
        title: "Отмена операции",
    },
    remove: {
        title: "Кнопка удаления",
    },
    addCount: {
        title: "Увеличение добавляемых чипов",
    },
    reduceCount: {
        title: "Уменьшение добавляемых чипов",
    },
};
