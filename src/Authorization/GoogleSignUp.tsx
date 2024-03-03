import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const GoogleSignUp = () => {
    return (
        <div
            style={{
                colorScheme: "light",
                position: "relative",
            }}
        >
            <GoogleLogin
                onSuccess={async (e) => {
                    if (!e.credential) return;
                    const decodedCredetials: any = jwtDecode(e.credential);
                    const res = await axios.post("/api/users/login/google", {
                        googleID: decodedCredetials.sub,
                        email: decodedCredetials.email,
                        photo: decodedCredetials.picture,
                        nick:
                            decodedCredetials.given_name ||
                            decodedCredetials.name ||
                            decodedCredetials.email,
                    });
                    if (res.status == 201) {
                        localStorage.setItem(
                            "accessToken",
                            res.data.accessToken
                        );
                    }
                }}
                theme="filled_black"
                shape="pill"
            />
        </div>
    );
};
