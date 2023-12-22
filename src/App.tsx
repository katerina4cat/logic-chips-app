import { EditPage } from "./ViewModel/EditPage";

export const debug = true;

import { Component, ReactNode } from "react";

interface RequiredProps {}

interface States {}

export class App extends Component<RequiredProps, States> {
    state: Readonly<States> = {};
    constructor(props: RequiredProps) {
        super(props);
    }

    render(): ReactNode {
        return (
            <>
                <EditPage saveName="newSave" />
            </>
        );
    }
}

export default App;
