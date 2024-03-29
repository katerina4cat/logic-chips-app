import { action, makeObservable, observable } from "mobx";
import { IHotKeys, defaultHotKeys } from "../common/DefaultSettings";
import { changedHotKey, hotKeyItem } from "../common/hotKeyItem";
import { plainToClass } from "class-transformer";

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
    @action setSync = (value: boolean) => {
        this.syncSettings = value;
        localStorage.setItem(
            settingsTitle.syncSettings,
            JSON.stringify(this.syncSettings)
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
