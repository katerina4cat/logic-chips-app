import { ViewModel, view } from "@yoskutik/react-vvm";
import { action, makeObservable, observable, reaction } from "mobx";
import cl from "./MainMenu.module.scss";
import { MainInfo } from "./Informations/Main";
import { AppViewModel } from "../../App";
import { ChipInfo } from "../../Structs/ChipInfo";
import { int2hex } from "../../common/Colors";
import { Pos } from "../../common/Pos";
import { removeElementByField } from "../../common/RemoveElement";
import { getSyncChanges } from "../../Managers/Apis/Saves";
import userManager, { userSettings } from "../../Managers/UserManager";
import { SaveManager } from "../../Managers/SaveManager";

class Save {
    title: string;
    chips: number;
    created: Date;
    lastEdit: Date;
    constructor(
        title: string,
        chips: number,
        created: Date = new Date(0),
        lastEdit: Date = new Date(0)
    ) {
        this.title = title;
        this.chips = chips;
        this.created = created;
        this.lastEdit = lastEdit;
    }
}

export const checkSync = async () => {
    let lastSync = new Date(localStorage.getItem("lastSyncTime") || 0);
    // Проверка, что последняя синхронизация проводилась более 30 секунд назад
    if (new Date().getTime() - lastSync.getTime() < 30000) return;
    // Получение всех изменений с предыдущей синхронизации
    const allChanges = await getSyncChanges(lastSync);
    if (!allChanges) return;
    // Применение всех изменений, если они были получены и имеются
    allChanges.forEach((save) => {
        const saveInfo = SaveManager.loadSaveByName(save.saveName);
        if (save.created) saveInfo.created = save.created;
        save.deleting.forEach((deletingInfo) =>
            removeElementByField(saveInfo.Chips, deletingInfo, "name")
        );
        save.creatingChips.forEach((chipsInfo) => {
            const index = saveInfo.Chips.findIndex(
                (chip) => chip.name === chipsInfo.chipName
            );
            const loadedChipInfo = new ChipInfo(
                chipsInfo.chipName,
                chipsInfo.chipStyle,
                int2hex(chipsInfo.color),
                chipsInfo.inputPins,
                chipsInfo.outputPins,
                chipsInfo.wires,
                chipsInfo.subChips,
                chipsInfo.buses,
                new Pos(chipsInfo.screenX, chipsInfo.screenY),
                true
            );
            if (index === -1) saveInfo.Chips.push(loadedChipInfo);
            else saveInfo.Chips[index] = loadedChipInfo;
        });
        if (save.created) saveInfo.created = save.created;
        saveInfo.save();
    });
    // Сохранение времени последней синхронизации
    localStorage.setItem(
        "lastSyncTime",
        new Date(new Date().getTime()).toISOString()
    );
};

interface RequiredProps {}

export class MainMenuViewModel extends ViewModel<AppViewModel, RequiredProps> {
    constructor() {
        super();
        makeObservable(this);
        this.loadSavesInfo();
        reaction(
            () => userManager.loaded,
            (newState) => {
                if (newState) {
                    if (userSettings.IsUserSync) {
                        checkSync();
                        // Обновление информации для меню сохранений
                        this.loadSavesInfo();
                    }
                }
            }
        );
        reaction(
            () => userSettings.IsUserSync,
            (newState) => {
                if (newState) {
                    if (userSettings.IsUserSync) {
                        checkSync();
                        // Обновление информации для меню сохранений
                        this.loadSavesInfo();
                    }
                }
            }
        );
    }

    loadSavesInfo = async () => {
        const keys = Object.keys(localStorage)
            .filter((key) => key.startsWith("Save:"))
            .map((key) => key.slice(5));
        this.saves = keys.map((key) => {
            const saveInfo = SaveManager.loadSaveByName(key);
            return new Save(
                saveInfo.saveName,
                saveInfo.Chips.length,
                saveInfo.created,
                saveInfo.lastEdit
            );
        });
    };

    @observable saves: Save[] = [];
    @observable currentInfo = (<MainInfo />);
    @action setCurrentInfo = (info: JSX.Element) => {
        this.currentInfo = info;
    };
}

export const MainMenu = view(MainMenuViewModel)<RequiredProps>(
    ({ viewModel }) => {
        return (
            <div className={cl.MainMenu}>
                <div className={cl.ButtonList}>{viewModel.currentInfo}</div>
            </div>
        );
    }
);
