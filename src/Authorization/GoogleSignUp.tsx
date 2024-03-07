import { GoogleLogin } from "@react-oauth/google";
import { loginByGoogle } from "../Managers/ApiManager";

export const GoogleSignUp = () => {
    return (
        <div
            style={{
                colorScheme: "light",
                position: "relative",
            }}
        >
            <GoogleLogin
                onSuccess={loginByGoogle}
                theme="filled_black"
                shape="pill"
            />
        </div>
    );
};
