import { ViewModel, view } from "@yoskutik/react-vvm";
import { action, makeObservable, observable, reaction } from "mobx";
import cl from "./MainMenu.module.scss";
import { MainInfo } from "./Informations/Main";
import { AppViewModel } from "../../App";
import userManager, { userSettings } from "../../Managers/UserManager";
import { SaveManager } from "../../Managers/SaveManager";
import { syncManager } from "../../Managers/SyncManager";

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

interface RequiredProps {}

export class MainMenuViewModel extends ViewModel<AppViewModel, RequiredProps> {
    constructor() {
        super();
        makeObservable(this);
        this.loadSavesInfo();
        reaction(
            () => userManager.loaded,
            async (newState) => {
                if (newState) {
                    if (userSettings.IsUserSync) {
                        await syncManager.checkSync();
                        // Обновление информации для меню сохранений
                        this.loadSavesInfo();
                    }
                }
            }
        );
        reaction(
            () => userSettings.IsUserSync,
            async (newState) => {
                if (newState) {
                    if (userSettings.IsUserSync) {
                        await syncManager.checkSync();
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
