import { ViewModel, view } from "@yoskutik/react-vvm";
import { makeObservable } from "mobx";
import cl from "./Loading.module.scss";
import { AppViewModel } from "../App";
import { MainMenu } from "./MainMenu/MainMenu";
import { lastEditSaves } from "../common/lastEditSaves";
import { EditPage } from "./EditPage/EditPage";

interface RequiredProps {}

export class LoadingViewModel extends ViewModel<AppViewModel, RequiredProps> {
    waitingLoad = {};
    constructor() {
        super();
        makeObservable(this);
        if (this.checkLoaded()) return;
    }

    checkRecoverySession = async () => {
        if ("Recovery:lastEdit" in localStorage) {
            const lastEditSave: lastEditSaves = JSON.parse(
                localStorage.getItem("Recovery:lastEdit") || ""
            );
            const userAnswer = true;
            //     confirm(`Последний раз вы вышли из редактора без сохранения
            // В сохранении: ${lastEditSave.saveName}
            // Редактируя чип: ${lastEditSave.chipInfo.name}
            // Возобновить редактирование?`);
            if (userAnswer) {
                this.parent.setCurrentPage(
                    <EditPage
                        saveName={lastEditSave.saveName}
                        chipInfo={lastEditSave.chipInfo}
                    />
                );
            } else {
                localStorage.removeItem("Recovery:lastEdit");
            }
        }
    };

    checkLoaded = () => {
        for (const result of Object.values(this.waitingLoad))
            if (!result) return false;
        this.parent.setCurrentPage(<MainMenu />);
        this.checkRecoverySession();
        return true;
    };
}

export const Loading = view(LoadingViewModel)<RequiredProps>(({}) => {
    return <div className={cl.Loading}>Loading...</div>;
});
