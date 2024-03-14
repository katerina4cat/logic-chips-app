/* global google */
import { SignUp } from "./Authorization/SignUp";
import { EditPage } from "./ViewModel/EditPage";
import { ViewModel, view } from "@yoskutik/react-vvm";
import { observable } from "mobx";

export const debug = true;

export class AppViewModel extends ViewModel {
    @observable signIn = true;
}

const App = view(AppViewModel)(({ viewModel }) => (
    <>{viewModel.signIn ? <EditPage saveName="newSave" /> : <SignUp />}</>
    // <>
    //     <Test />
    // </>
));

export default App;
