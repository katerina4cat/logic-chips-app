import { ViewModel, view } from "@yoskutik/react-vvm";
import { action, makeObservable, observable } from "mobx";
import { MainMenuViewModel } from "../MainMenu";
import { MainInfo } from "./Main";
import userManager from "../../../Managers/UserManager";
import { SignUp } from "../../../Authorization/SignUp";

interface RequiredProps {}

export class AccountViewModel extends ViewModel<
    MainMenuViewModel,
    RequiredProps
> {
    constructor() {
        super();
        makeObservable(this);
    }
    @observable changeSync = false;
    @action setChangeSync = (value: boolean) =>
        localStorage.setItem("Sett:changeSync", value.toString());
    back = () => {
        this.parent.setCurrentInfo(<MainInfo />);
    };
}

export const Account = view(AccountViewModel)<RequiredProps>(
    ({ viewModel }) => {
        return (
            <>
                <h1 style={{ textAlign: "center" }}>Аккаунт</h1>
                {userManager.signedIn ? (
                    <>
                        <div>
                            <img src={userManager.photoUrl} alt="Аватар" />
                            {userManager.nick}
                        </div>
                        <div>
                            Зарегестрирован с:{" "}
                            {userManager.registered.getDate()}.
                            {userManager.registered.getMonth()}.
                            {userManager.registered.getFullYear()}
                        </div>
                        <button onClick={userManager.logOut}>Выйти</button>
                    </>
                ) : (
                    <SignUp />
                )}
                <button onClick={viewModel.back}>Назад</button>
            </>
        );
    }
);
