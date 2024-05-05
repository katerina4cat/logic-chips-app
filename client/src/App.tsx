/* global google */
import { ViewModel, view } from "@yoskutik/react-vvm";
import { action, makeObservable, observable } from "mobx";
import { Loading } from "./ViewModel/Loading";

export const debug = true;

export class AppViewModel extends ViewModel {
    constructor() {
        super();
        makeObservable(this);
    }

    @observable currentPage = (<Loading />);
    @action setCurrentPage = (page: JSX.Element) => {
        this.currentPage = page;
    };
}

const App = view(AppViewModel)(({ viewModel }) => viewModel.currentPage);

export default App;
