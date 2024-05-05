import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { loginByGoogle } from "../Managers/Apis/Authentification";

export const GoogleSignUp = () => {
    return (
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
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
        </GoogleOAuthProvider>
    );
};
