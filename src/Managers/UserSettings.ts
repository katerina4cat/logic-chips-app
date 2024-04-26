import { action, makeObservable, observable } from "mobx";
import { IHotKeys, defaultHotKeys } from "../common/DefaultSettings";
import { changedHotKey, hotKeyItem } from "../common/hotKeyItem";
import { plainToClass } from "class-transformer";
import userManager from "./UserManager";
import { SaveInfo } from "../Structs/SaveInfo";
import { createSaves, saveChip } from "./Apis/Saves";

const settingsTitle = {
    syncSettings: "Sett:syncSettings",
    smartConnection: "Sett:smartConnect",
    hotKeys: "Sett:HotKeys",
};

export class UserSettings {
    @observable syncSettings: boolean;
    @observable smartConnection: boolean;
    @observable hotKeys: IHotKeys;
    constructor() {
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
                const saveInfo = SaveInfo.loadSave(key, true);
                saveInfo.Chips.forEach((chip) => {
                    if (!chip.sync) {
                        saveChip(key, {
                            color: chip.color,
                            chipStyle: chip.chipStyleType,
                            title: chip.name,
                            screenX: window.innerWidth,
                            screenY: window.innerHeight,
                            inputPins: chip.inputPins,
                            outputPins: chip.outputPins,
                            subChips: chip.SubChips,
                            buses: chip.Buses,
                            wires: chip.Wires,
                        });
                        chip.sync = true;
                    }
                });
                saveInfo.save();
            });
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
