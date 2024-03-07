/* global google */
import { Component, ReactNode } from "react";
import { SignUp } from "./Authorization/SignUp";
import UserManager from "./Managers/UserManager";
import { EditPage } from "./ViewModel/EditPage";
import { userInfo } from "./Managers/ApiManager";

export const debug = true;
interface RequiredProps {}

interface States {
    signIn: boolean;
}
export class App extends Component<RequiredProps, States> {
    state: Readonly<States> = { signIn: false };
    constructor(props: RequiredProps) {
        super(props);
        UserManager.listeners.push(this.callbackLogined);
        userInfo();
    }

    callbackLogined = () => {
        if (this.state.signIn != UserManager.signedIn)
            this.setState({ signIn: UserManager.signedIn });
    };

    render(): ReactNode {
        return (
            <>
                {this.state.signIn ? (
                    <EditPage saveName="newSave" />
                ) : (
                    <SignUp />
                )}
            </>
        );
    }
}

export default App;
