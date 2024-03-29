import { ViewModel, view } from "@yoskutik/react-vvm";
import { action, makeObservable, observable } from "mobx";
import { MainMenuViewModel } from "../MainMenu";
import { MainInfo } from "./Main";
import cl from "./Options.module.scss";
import UserManager, { userSettings } from "../../../Managers/UserManager";
import { HotKeys } from "./HotKeys";

interface RequiredProps {}

export class OptionsViewModel extends ViewModel<
    MainMenuViewModel,
    RequiredProps
> {
    constructor() {
        super();
        makeObservable(this);
    }
    @observable changeSync = false;
    @action setChangeSync = (value: boolean) =>
        localStorage.setItem("Sett:changeSync", value.toString());
    back = () => {
        this.parent.setCurrentInfo(<MainInfo />);
    };
    hotKeys = () => {
        this.parent.setCurrentInfo(<HotKeys />);
    };
}

export const Options = view(OptionsViewModel)<RequiredProps>(
    ({ viewModel }) => {
        return (
            <>
                <h1 style={{ textAlign: "center" }}>Настройки</h1>
                <div
                    className={`${cl.Option} ${
                        !UserManager.signedIn && cl.Disabled
                    }`}
                    onClick={() => {
                        if (UserManager.signedIn)
                            userSettings.setSync(!userSettings.syncSettings);
                    }}
                >
                    Синхронизация сохранений{" "}
                    <input
                        type="checkbox"
                        disabled
                        checked={userSettings.syncSettings}
                    />
                </div>
                <div
                    className={cl.Option}
                    onClick={(e) =>
                        userSettings.setSmartConnection(
                            !userSettings.smartConnection
                        )
                    }
                >
                    Умное подключение провода к пину{" "}
                    <input
                        type="checkbox"
                        checked={userSettings.smartConnection}
                    />
                </div>
                <button onClick={viewModel.hotKeys}>Горячие клавиши</button>
                <button onClick={viewModel.back}>Назад</button>
            </>
        );
    }
);
