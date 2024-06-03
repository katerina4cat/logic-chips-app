import { ChipInfo } from "@shared/models/saves/ChipInfo";
import { IHotKeys, defaultHotKeys } from "../common/DefaultSettings";
import { makeObservable, observable, reaction, toJS } from "mobx";
import { hotKeyItemFromInfo } from "../common/hotKeyItem";

const localStorageNames = {
    settings: "LogicChips:Settings",
    saves: "LogicChipsSaves:",
};

class SaveManager {
    @observable
    settings: SaveSettingsModel;
    @observable
    saves: SaveWorkSpacesModel[] = [];
    constructor() {
        const settingsData = localStorage.getItem(localStorageNames.settings);
        this.settings = settingsData
            ? JSON.parse(settingsData)
            : {
                  syncSaves: false,
                  smartConnection: false,
                  syncSettings: false,
                  hotKeys: defaultHotKeys,
                  lasSyncTime: new Date(0),
              };
        for (const key of Object.keys(this.settings.hotKeys))
            this.settings.hotKeys[key as keyof IHotKeys] = hotKeyItemFromInfo(
                this.settings.hotKeys[key as keyof IHotKeys]
            );

        Object.keys(localStorage)
            .filter((key) => key.startsWith(localStorageNames.saves))
            .forEach((key) => {
                const savesData = localStorage.getItem(key);
                if (savesData) this.saves.push(JSON.parse(savesData));
                else alert("Не удалось загрузить сохранение: " + key);
            });
        makeObservable(this);

        reaction(
            () => toJS(this.settings),
            (newSettings) => {
                localStorage.setItem(
                    localStorageNames.settings,
                    JSON.stringify(newSettings)
                );
            }
        );
    }

    saveSaving = (save: SaveWorkSpacesModel) =>
        localStorage.setItem(
            localStorageNames.saves + save.saveName,
            JSON.stringify(save)
        );
}

export interface SaveWorkSpacesModel {
    saveName: string;
    lastEdit: Date;
    created: Date;
    Wheels: string[][];
    Chips: ChipInfo[];
}

export interface SaveSettingsModel {
    syncSaves: boolean;
    syncSettings: boolean;
    smartConnection: boolean;
    hotKeys: IHotKeys;
    lasSyncTime: Date;
}

export const saveManager = new SaveManager();
