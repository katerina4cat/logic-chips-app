/* global google */
import { Component, ReactNode } from "react";
import { SignUp } from "./Authorization/SignUp";
import UserManager from "./Managers/UserManager";
import { EditPage } from "./ViewModel/EditPage";
import { userInfo } from "./Managers/ApiManager";
import React from "react";
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
