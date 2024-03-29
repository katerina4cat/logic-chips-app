/* global google */
import { ViewModel, view } from "@yoskutik/react-vvm";
import { action, makeObservable, observable } from "mobx";
import { MainMenu } from "./ViewModel/MainMenu/MainMenu";

export const debug = true;

export class AppViewModel extends ViewModel {
    @observable signIn = false;

    constructor() {
        super();
        makeObservable(this);
    }

    @observable currentPage = (<MainMenu />);
    @action setCurrentPage = (page: JSX.Element) => {
        this.currentPage = page;
    };
}

const App = view(AppViewModel)(({ viewModel }) => viewModel.currentPage);

export default App;
