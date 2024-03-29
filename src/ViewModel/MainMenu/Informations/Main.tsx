import { ViewModel, view } from "@yoskutik/react-vvm";
import { makeObservable } from "mobx";
import { MainMenuViewModel } from "../MainMenu";
import { SavesInfo } from "./Saves";
import { NewGame } from "./NewGame";
import { Options } from "./Options";
import { Account } from "./Account";

interface RequiredProps {}

export class MainInfoViewModel extends ViewModel<
    MainMenuViewModel,
    RequiredProps
> {
    constructor() {
        super();
        makeObservable(this);
    }
    openSaves = () => {
        this.parent.setCurrentInfo(<SavesInfo />);
    };
    openCreating = () => {
        this.parent.setCurrentInfo(<NewGame />);
    };
    openSettings = () => {
        this.parent.setCurrentInfo(<Options />);
    };
    openAccount = () => {
        this.parent.setCurrentInfo(<Account />);
    };
}

export const MainInfo = view(MainInfoViewModel)<RequiredProps>(
    ({ viewModel }) => {
        return (
            <>
                <h1 style={{ textAlign: "center" }}>Меню</h1>
                <button onClick={viewModel.openCreating}>Новая игра</button>
                <button onClick={viewModel.openSaves}>Загрузить игру</button>
                <button onClick={viewModel.openSettings}>Настройки</button>
                <button onClick={viewModel.openAccount}>Аккаунт</button>
            </>
        );
    }
);
