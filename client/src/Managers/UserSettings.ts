import { action, makeObservable, observable } from "mobx";
import { IHotKeys, defaultHotKeys } from "../common/DefaultSettings";
import { hotKeyItem } from "../common/hotKeyItem";
import userManager from "./UserManager";
import { SaveSettingsModel, saveManager } from "./SaveManager";

export class UserSettings {
    @observable settingsData: SaveSettingsModel;
    constructor() {
        makeObservable(this);
        this.settingsData = saveManager.settings;
    }
    get IsUserSyncSaves() {
        return userManager.signedIn && this.settingsData.syncSaves;
    }
    @action setSyncSaves = (value: boolean) => {
        this.settingsData.syncSaves = value;
        if (this.IsUserSyncSaves) {
            // TODO SEND ALL SAVES AFTER LAST SYNCTIME TO SERVER
        }
    };
    @action setSyncSettings = (value: boolean) => {
        this.settingsData.syncSettings = value;
        if (userManager.signedIn && this.settingsData.syncSettings) {
        }
    };
    @action resetHotkey = (hotKeyName: keyof IHotKeys) => {
        this.settingsData.hotKeys[hotKeyName] = defaultHotKeys[hotKeyName];
    };
    @action changedHotkey = (hotKeyName: keyof IHotKeys, value: hotKeyItem) => {
        this.settingsData.hotKeys[hotKeyName] = value;
    };
}
