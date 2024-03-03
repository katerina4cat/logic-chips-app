import { Component, ReactNode } from "react";
import { Modal } from "../ViewModel/Modal/Modal";
import cl from "./SignUp.module.scss";
import axios from "axios";
import { GoogleSignUp } from "./GoogleSignUp";

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

    login = async () => {
        const res = await axios.post("/api/users/login/email", {
            email: this.state.login,
            password: this.state.password,
        });
        if (res.status == 201) {
            localStorage.setItem("accessToken", res.data.accessToken);
        }
    };

    register = async () => {
        const res = await axios.post("/api/users/register", {
            email: this.state.login,
            nick: this.state.login,
            password: this.state.password,
        });
        if (res.status == 201) {
            localStorage.setItem("accessToken", res.data.accessToken);
        }
    };

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
                        <button onClick={this.login}>Войти</button>
                        <button onClick={this.register}>Регистрация</button>
                    </div>
                    <GoogleSignUp />
                </Modal>
            </div>
        );
    }
}
