import { ViewModel, view } from "@yoskutik/react-vvm";
import { makeObservable } from "mobx";
import cl from "./Loading.module.scss";
import { AppViewModel } from "../App";
import { MainMenu } from "./MainMenu/MainMenu";

interface RequiredProps {}

export class LoadingViewModel extends ViewModel<AppViewModel, RequiredProps> {
    waitingLoad = {};
    constructor() {
        super();
        makeObservable(this);
        if (this.checkLoaded()) return;
    }
    checkLoaded = () => {
        for (const result of Object.values(this.waitingLoad))
            if (!result) return false;
        this.parent.setCurrentPage(<MainMenu />);
        return true;
    };
}

export const Loading = view(LoadingViewModel)<RequiredProps>(({}) => {
    return <div className={cl.Loading}>Loading...</div>;
});
