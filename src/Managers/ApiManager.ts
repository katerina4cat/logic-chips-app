import { CredentialResponse } from "@react-oauth/google";
import axios, { AxiosError, AxiosResponse } from "axios";
import { jwtDecode } from "jwt-decode";
import UserManager from "./UserManager";

const sender = axios.create({
    withCredentials: true,
    baseURL: import.meta.env.VITE_API_SERVER_URL,
});
sender.interceptors.request.use((config) => {
    if (localStorage.getItem("accessToken") != null)
        config.headers.Authorization = `Bearer ${localStorage.getItem(
            "accessToken"
        )}`;
    return config;
});

sender.interceptors.response.use(
    (config) => config,
    async (err) => {
        if (err)
            if (err.response?.status == 401) {
                try {
                    const res = await axios.get(
                        import.meta.env.VITE_API_SERVER_URL +
                            "/api/users/refresh",
                        {
                            withCredentials: true,
                        }
                    );
                    initUser(res);
                    localStorage.setItem("accessToken", res.data.accessToken);
                    return sender.request(err.config);
                } catch (err) {
                    console.log("Не авторизован");
                }
            }
    }
);

const initUser = (userData: AxiosResponse<any, any>) => {
    if (userData.status == 201) {
        localStorage.setItem("accessToken", userData.data.accessToken);
        UserManager.init(userData.data);
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
    const result = await sender.get("/api/users/info");
    if (result.status == 201) {
        UserManager.init(result.data);
        return true;
    }
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
