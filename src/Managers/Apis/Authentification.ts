import { AxiosResponse } from "axios";
import userManager from "../UserManager";
import { CredentialResponse } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { sender } from "../ApiManager";

export const initUser = (userData: AxiosResponse<any, any>) => {
    if (userData.status == 201) {
        localStorage.setItem("accessToken", userData.data.accessToken);
        userManager.init(userData.data);
        return true;
    }
    return false;
};

export const loginByGoogle = async (credentials: CredentialResponse) => {
    if (!credentials.credential) return false;
    const decodedCredetials: any = jwtDecode(credentials.credential);
    const result = await sender.post("/api/users/login/google", {
        googleID: decodedCredetials.sub,
        email: decodedCredetials.email,
        photo: decodedCredetials.picture,
        nick:
            decodedCredetials.given_name ||
            decodedCredetials.name ||
            decodedCredetials.email,
    });

    return initUser(result);
};

export const userInfo = async () => {
    try {
        const result = await sender.get("/api/users/info");
        if (result.status == 201) {
            userManager.init(result.data);
            return true;
        }
    } catch (err) {
        console.log(err);
    }
    userManager.initWithError();
    return false;
};

export const loginByEmail = async (email: string, password: string) => {
    const result = await sender.post("/api/users/login/email", {
        email: email,
        password: password,
    });
    return initUser(result);
};

export const registerByEmail = async (email: string, password: string) => {
    const result = await sender.post("/api/users/register", {
        email: email,
        nick: email,
        password: password,
    });
    return initUser(result);
};
