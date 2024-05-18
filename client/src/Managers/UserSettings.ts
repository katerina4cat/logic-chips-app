import { action, makeObservable, observable } from "mobx";
import { IHotKeys, defaultHotKeys } from "../common/DefaultSettings";
import { changedHotKey, hotKeyItem } from "../common/hotKeyItem";
import { plainToClass } from "class-transformer";
import userManager from "./UserManager";
import { saveChip } from "./Apis/Saves";
import { SaveManager } from "./SaveManager";

const settingsTitle = {
    syncSaves: "Sett:syncSaves",
    syncSettings: "Sett:syncSettings",
    smartConnection: "Sett:smartConnect",
    cellCord: "Sett:cellCord",
    hotKeys: "Sett:HotKeys",
};

export class UserSettings {
    @observable syncSaves: boolean;
    @observable syncSettings: boolean;
    @observable smartConnection: boolean;
    @observable hotKeys: IHotKeys;
    constructor() {
        this.syncSaves = JSON.parse(
            localStorage.getItem(settingsTitle.syncSaves) || "false"
        );
        this.syncSettings = JSON.parse(
            localStorage.getItem(settingsTitle.syncSettings) || "false"
        );
        this.smartConnection = JSON.parse(
            localStorage.getItem(settingsTitle.smartConnection) || "false"
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
        return userManager.signedIn && this.syncSaves;
    }
    @action setSyncSaves = (value: boolean) => {
        this.syncSaves = value;
        localStorage.setItem(
            settingsTitle.syncSaves,
            JSON.stringify(this.syncSaves)
        );
        if (this.IsUserSync) {
            const keys = Object.keys(localStorage)
                .filter((key) => key.startsWith("Save:"))
                .map((saveKey) => saveKey.slice(5));
            keys.forEach((key) => {
                const saveInfo = SaveManager.loadSaveByName(key);
                saveInfo.Chips.forEach((chip) => {
                    saveChip(key, chip);
                });
                saveInfo.save();
            });
        }
    };
    @action setSyncSettings = (value: boolean) => {
        this.syncSettings = value;
        localStorage.setItem(
            settingsTitle.syncSettings,
            JSON.stringify(this.syncSettings)
        );
        if (userManager.signedIn && this.syncSettings) {
        }
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
