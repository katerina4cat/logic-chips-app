import { ViewModel, view } from "@yoskutik/react-vvm";
import { makeObservable } from "mobx";
import { MainMenuViewModel } from "../MainMenu";
import { MainInfo } from "./Main";
import cl from "./Options.module.scss";
import UserManager, { userSettings } from "../../../Managers/UserManager";
import { HotKeys } from "./HotKeys";

interface RequiredProps {
    backOther?: JSX.Element;
}

export class OptionsViewModel extends ViewModel<
    MainMenuViewModel,
    RequiredProps
> {
    constructor() {
        super();
        makeObservable(this);
    }
    back = () => {
        this.parent.setCurrentInfo(
            this.viewProps.backOther ? this.viewProps.backOther : <MainInfo />
        );
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
                            userSettings.setSyncSaves(!userSettings.syncSaves);
                    }}
                >
                    Синхронизация сохранений{" "}
                    <input type="checkbox" checked={userSettings.syncSaves} />
                </div>

                <div
                    className={`${cl.Option} ${
                        !UserManager.signedIn && cl.Disabled
                    }`}
                    onClick={() => {
                        if (UserManager.signedIn)
                            userSettings.setSyncSettings(
                                !userSettings.syncSettings
                            );
                    }}
                    style={{ textDecoration: "line-through" }}
                >
                    Синхронизация настроек{" "}
                    <input
                        type="checkbox"
                        checked={userSettings.syncSettings}
                    />
                </div>
                <div
                    className={cl.Option}
                    onClick={() =>
                        userSettings.setSmartConnection(
                            !userSettings.smartConnection
                        )
                    }
                    style={{ textDecoration: "line-through" }}
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
