import { Component, ReactNode } from "react";
import { Modal } from "../ViewModel/Modal/Modal";
import cl from "./SignUp.module.scss";
import { GoogleSignUp } from "./GoogleSignUp";
import { loginByEmail, registerByEmail } from "../Managers/ApiManager";

interface RequiredProps {}

interface States {
    login: string;
    password: string;
}

export class SignUp extends Component<RequiredProps, States> {
    state: Readonly<States> = {
        login: "",
        password: "",
    };

    constructor(props: RequiredProps) {
        super(props);
    }

    render(): ReactNode {
        return (
            <div>
                <Modal enabled setEnabled={() => {}} className={cl.SignUp}>
                    <div className={cl.Title}>Авторизация</div>
                    <input
                        value={this.state.login}
                        onChange={(e) =>
                            this.setState({ login: e.target.value })
                        }
                        placeholder="Email"
                        type="text"
                    />
                    <input
                        value={this.state.password}
                        onChange={(e) =>
                            this.setState({ password: e.target.value })
                        }
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
                                    this.state.login,
                                    this.state.password
                                )
                            }
                        >
                            Войти
                        </button>
                        <button
                            onClick={() =>
                                registerByEmail(
                                    this.state.login,
                                    this.state.password
                                )
                            }
                        >
                            Регистрация
                        </button>
                    </div>
                    <GoogleSignUp />
                </Modal>
            </div>
        );
    }
}
