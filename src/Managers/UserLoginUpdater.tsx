import { Component, ReactNode } from "react";

interface RequiredProps {}

interface States {
    athrized: boolean;
}

export class UserLoginUpdater extends Component<RequiredProps, States> {
    state: Readonly<States> = { athrized: false };
    constructor(props: RequiredProps) {
        super(props);
    }

    render(): ReactNode {
        return <div></div>;
    }
}
