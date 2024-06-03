import { ViewModel, view } from "@yoskutik/react-vvm";
import { action, makeObservable, observable, reaction } from "mobx";
import cl from "./MainMenu.module.scss";
import { MainInfo } from "./Informations/Main";
import { AppViewModel } from "../../App";
import userManager, { userSettings } from "../../Managers/UserManager";
import { syncManager } from "../../Managers/SyncManager";

interface RequiredProps {
    startInfo?: JSX.Element;
}

export class MainMenuViewModel extends ViewModel<AppViewModel, RequiredProps> {
    constructor() {
        super();
        makeObservable(this);
        reaction(
            () => userManager.loaded,
            async (newState) => {
                if (newState) {
                    if (userSettings.IsUserSyncSaves) {
                        await syncManager.checkSync();
                    }
                }
            }
        );
        reaction(
            () => userSettings.IsUserSyncSaves,
            async (newState) => {
                if (newState) {
                    if (userSettings.IsUserSyncSaves) {
                        await syncManager.checkSync();
                    }
                }
            }
        );
    }

    @observable currentInfo = this.viewProps.startInfo ? (
        this.viewProps.startInfo
    ) : (
        <MainInfo />
    );
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
