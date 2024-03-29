import { ViewModel, view } from "@yoskutik/react-vvm";
import { action, makeObservable, observable } from "mobx";
import cl from "./MainMenu.module.scss";
import { MainInfo } from "./Informations/Main";
import { AppViewModel } from "../../App";
import { SaveInfo } from "../../Structs/SaveInfo";

class Save {
    title: string;
    chips: number;
    lastEdit: Date;
    constructor(title: string, chips: number, lastEdit: Date = new Date()) {
        this.title = title;
        this.chips = chips;
        this.lastEdit = lastEdit;
    }
}

interface RequiredProps {}

export class MainMenuViewModel extends ViewModel<AppViewModel, RequiredProps> {
    constructor() {
        super();
        makeObservable(this);
        const keys = Object.keys(localStorage).filter((key) =>
            key.startsWith("Save:")
        );
        this.saves = keys.map((key) => {
            const saveInfo = SaveInfo.loadSave(key.slice(5));
            return new Save(
                saveInfo.saveName,
                saveInfo.Chips.length - saveInfo.defaultChips
            );
        });
    }
    @observable saves: Save[];
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
