import { ViewModel, view } from "@yoskutik/react-vvm";
import { action, makeObservable, observable } from "mobx";
import { MainMenuViewModel } from "../MainMenu";
import cl from "./NewGame.module.scss";
import { MainInfo } from "./Main";
import { EditPage } from "../../EditPage/EditPage";

interface RequiredProps {}

export class NewGameViewModel extends ViewModel<
    MainMenuViewModel,
    RequiredProps
> {
    constructor() {
        super();
        makeObservable(this);
    }
    @observable gameName = "";
    @observable errorName = true;
    @action setGameName = (value: string) => {
        this.errorName = false;
        if (!value) this.errorName = true;
        if (this.parent.saves.find((save) => save.title == value))
            this.errorName = true;
        this.gameName = value;
    };
    back = () => {
        this.parent.setCurrentInfo(<MainInfo />);
    };
    create = () => {
        if (!this.errorName)
            this.parent.parent.setCurrentPage(
                <EditPage saveName={this.gameName} />
            );
    };
}

export const NewGame = view(NewGameViewModel)<RequiredProps>(
    ({ viewModel }) => {
        return (
            <>
                <h1 style={{ textAlign: "center" }}>Новая игра</h1>
                <input
                    className={`${cl.NewGameTitle} ${
                        viewModel.errorName && cl.NewGameTitleError
                    }`}
                    placeholder="Название сохранения"
                    value={viewModel.gameName}
                    onChange={(e) => viewModel.setGameName(e.target.value)}
                />
                <button onClick={viewModel.create}>Создать</button>
                <button onClick={viewModel.back}>Назад</button>
            </>
        );
    }
);
