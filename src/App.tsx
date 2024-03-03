/* global google */
import { Component, ReactNode } from "react";
import { SignUp } from "./Authorization/SignUp";

export const debug = true;
interface RequiredProps {}

interface States {
    signIn: boolean;
}
export class App extends Component<RequiredProps, States> {
    state: Readonly<States> = { signIn: false };
    constructor(props: RequiredProps) {
        super(props);
    }

    render(): ReactNode {
        return (
            <>
                <SignUp />
                {/* <EditPage saveName="newSave" /> */}
            </>
        );
    }
}

export default App;
