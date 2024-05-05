import { ViewModel, view } from "@yoskutik/react-vvm";
import { makeObservable } from "mobx";
import { MainMenuViewModel } from "../MainMenu";
import { MainInfo } from "./Main";
import { EditPage } from "../../EditPage/EditPage";
import { NewGame } from "./NewGame";

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
    loadGame = (saveName: string) => {
        this.parent.parent.setCurrentPage(<EditPage saveName={saveName} />);
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
                {viewModel.parent.saves.length === 0 && (
                    <>
                        <div>У вас нету ещё ни одного сохранения</div>
                        <button onClick={viewModel.openCreating}>
                            Создать игру
                        </button>
                    </>
                )}
                {viewModel.parent.saves.map((saveInfo) => (
                    <button
                        key={saveInfo.title}
                        onClick={() => viewModel.loadGame(saveInfo.title)}
                    >
                        <h3>{saveInfo.title}</h3>
                        <p>Чипов: {saveInfo.chips}</p>
                    </button>
                ))}
                <button onClick={viewModel.back}>Назад</button>
            </>
        );
    }
);
