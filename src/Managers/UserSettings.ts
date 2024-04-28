import { action, makeObservable, observable } from "mobx";
import { IHotKeys, defaultHotKeys } from "../common/DefaultSettings";
import { changedHotKey, hotKeyItem } from "../common/hotKeyItem";
import { plainToClass } from "class-transformer";
import userManager from "./UserManager";
import { createSaves, saveChip } from "./Apis/Saves";
import { SaveManager } from "./SaveManager";

const settingsTitle = {
    syncSettings: "Sett:syncSettings",
    smartConnection: "Sett:smartConnect",
    cellCord: "Sett:cellCord",
    hotKeys: "Sett:HotKeys",
};

export class UserSettings {
    @observable syncSettings: boolean;
    @observable smartConnection: boolean;
    @observable cellCord: boolean;
    @observable cellSize: number = 10.0;
    @observable hotKeys: IHotKeys;
    constructor() {
        this.syncSettings = JSON.parse(
            localStorage.getItem(settingsTitle.syncSettings) || "false"
        );
        this.smartConnection = JSON.parse(
            localStorage.getItem(settingsTitle.smartConnection) || "false"
        );
        this.cellCord = JSON.parse(
            localStorage.getItem(settingsTitle.cellCord) || "false"
        );
        const parseResult = JSON.parse(
            localStorage.getItem(settingsTitle.hotKeys) || "false"
        );
        if (parseResult)
            Object.keys(parseResult).forEach(
                (key) =>
                    (parseResult[key] = plainToClass(
                        hotKeyItem,
                        parseResult[key]
                    ))
            );
        this.hotKeys = parseResult ? parseResult : defaultHotKeys;
        makeObservable(this);
        changedHotKey.current = () => {
            localStorage.setItem(
                settingsTitle.hotKeys,
                JSON.stringify(this.hotKeys)
            );
        };
    }
    get IsUserSync() {
        return userManager.signedIn && this.syncSettings;
    }
    @action setSync = (value: boolean) => {
        this.syncSettings = value;
        localStorage.setItem(
            settingsTitle.syncSettings,
            JSON.stringify(this.syncSettings)
        );
        if (this.IsUserSync) {
            const keys = Object.keys(localStorage)
                .filter((key) => key.startsWith("Save:"))
                .map((saveKey) => saveKey.slice(5));
            createSaves(keys).then((res) => console.log(res));
            keys.forEach((key) => {
                const saveInfo = SaveManager.loadSaveByName(key);
                saveInfo.Chips.forEach((chip) => {
                    if (!chip.sync) {
                        saveChip(key, chip);
                        chip.sync = true;
                    }
                });
                saveInfo.save();
            });
        }
    };
    @action setCellCord = (value: boolean) => {
        this.cellCord = value;
        localStorage.setItem(
            settingsTitle.cellCord,
            JSON.stringify(this.cellCord)
        );
    };
    @action setSmartConnection = (value: boolean) => {
        this.smartConnection = value;
        localStorage.setItem(
            settingsTitle.smartConnection,
            JSON.stringify(this.smartConnection)
        );
    };
    @action resetHotkey = (hotKeyName: keyof IHotKeys) => {
        this.hotKeys[hotKeyName] = defaultHotKeys[hotKeyName];
    };
    @action changedHotkey = (hotKeyName: keyof IHotKeys, value: hotKeyItem) => {
        this.hotKeys[hotKeyName] = value;
    };
}
