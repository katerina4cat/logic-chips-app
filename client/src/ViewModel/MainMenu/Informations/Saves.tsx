import { ViewModel, view } from "@yoskutik/react-vvm";
import { makeObservable } from "mobx";
import { MainMenuViewModel } from "../MainMenu";
import { MainInfo } from "./Main";
import { EditPage } from "../../EditPage/EditPage";
import { NewGame } from "./NewGame";
import { saveManager } from "../../../Managers/SaveManager";
import { SaveLoader } from "../../../Managers/SaveLoader";

interface RequiredProps {}

export class SavesInfoViewModel extends ViewModel<
    MainMenuViewModel,
    RequiredProps
> {
    constructor() {
        super();
        makeObservable(this);
    }
    back = () => {
        this.parent.setCurrentInfo(<MainInfo />);
    };
    loadGame = (saveLoader: SaveLoader) => {
        this.parent.parent.setCurrentPage(<EditPage saveLoader={saveLoader} />);
    };
    openCreating = () => {
        this.parent.setCurrentInfo(<NewGame />);
    };
}

export const SavesInfo = view(SavesInfoViewModel)<RequiredProps>(
    ({ viewModel }) => {
        return (
            <>
                <h1 style={{ textAlign: "center" }}>Сохранения</h1>
                {saveManager.saves.length === 0 && (
                    <>
                        <div>У вас нету ещё ни одного сохранения</div>
                        <button onClick={viewModel.openCreating}>
                            Создать игру
                        </button>
                    </>
                )}
                {saveManager.saves.map((saveInfo) => (
                    <button
                        key={saveInfo.saveName}
                        onClick={() =>
                            viewModel.loadGame(new SaveLoader(saveInfo))
                        }
                    >
                        <h3>{saveInfo.saveName}</h3>
                        <p>Чипов: {saveInfo.Chips.length}</p>
                    </button>
                ))}
                <button onClick={viewModel.back}>Назад</button>
            </>
        );
    }
);
