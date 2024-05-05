import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { initUser } from "./Apis/Authentification";

export const sender = axios.create({
    withCredentials: true,
    baseURL: import.meta.env.VITE_API_SERVER_URL,
});

export const sendPost = <RequestData = any, ResponseData = any>(
    url: string,
    data?: RequestData,
    config?: AxiosRequestConfig<any>
) =>
    sender.post<any, AxiosResponse<ResponseData>, RequestData>(
        url,
        data,
        config
    );
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
