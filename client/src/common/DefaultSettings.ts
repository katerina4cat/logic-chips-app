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
    escAction: hotKeyItem;
    remove: hotKeyItem;
    increaseCount: hotKeyItem;
    decreaseCount: hotKeyItem;
}
export const defaultHotKeys: IHotKeys = {
    save: new hotKeyItem(["KeyS"], undefined, true),
    library: new hotKeyItem(["KeyA"], undefined, true),
    newChip: new hotKeyItem(["KeyD"], undefined, true),
    hideAllPin: new hotKeyItem(["Tab"]),
    hideChipPins: new hotKeyItem(["KeyQ"]),
    escAction: new hotKeyItem(["Escape"]),
    remove: new hotKeyItem(["Backspace"]),
    increaseCount: new hotKeyItem(["ArrowUp", "ArrowRight"]),
    decreaseCount: new hotKeyItem(["ArrowDown", "ArrowLeft"]),
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
    escAction: {
        title: "Отмена операции",
    },
    remove: {
        title: "Кнопка удаления",
    },
    increaseCount: {
        title: "Увеличение добавляемых чипов",
    },
    decreaseCount: {
        title: "Уменьшение добавляемых чипов",
    },
};
