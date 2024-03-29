import cl from "./SignUp.module.scss";
import { GoogleSignUp } from "./GoogleSignUp";
import { loginByEmail, registerByEmail } from "../Managers/ApiManager";
import { ViewModel, view } from "@yoskutik/react-vvm";
import { action, makeObservable, observable } from "mobx";
import { AccountViewModel } from "../ViewModel/MainMenu/Informations/Account";

interface RequiredProps {}

export class SignUpViewModel extends ViewModel<
    AccountViewModel,
    RequiredProps
> {
    constructor() {
        super();
        makeObservable(this);
    }
    @observable loginInfo = { login: "", password: "" };
    @action setValue = (key: "login" | "password", value: string) => {
        this.loginInfo[key] = value;
    };
}
export const SignUp = view(SignUpViewModel)(({ viewModel }) => {
    return (
        <>
            <div className={cl.Title}>Авторизация</div>
            <input
                value={viewModel.loginInfo.login}
                onChange={(e) => viewModel.setValue("login", e.target.value)}
                placeholder="Email"
                type="text"
            />
            <input
                value={viewModel.loginInfo.password}
                onChange={(e) => viewModel.setValue("password", e.target.value)}
                placeholder="Пароль"
                type="password"
            />
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: "40%",
                }}
            >
                <button
                    onClick={() =>
                        loginByEmail(
                            viewModel.loginInfo.login,
                            viewModel.loginInfo.password
                        )
                    }
                >
                    Войти
                </button>
                <button
                    onClick={() =>
                        registerByEmail(
                            viewModel.loginInfo.login,
                            viewModel.loginInfo.password
                        )
                    }
                >
                    Регистрация
                </button>
            </div>
            <GoogleSignUp />
        </>
    );
});
