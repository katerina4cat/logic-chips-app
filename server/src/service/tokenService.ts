import jwt from "jsonwebtoken";
import { databaseManager } from "../app";
import { sessionInfo } from "../databaseManager";
import { ApiError } from "../exceptions/errorService";

class tokenService {
    public generateTokens = (payload: any) => {
        if (
            !process.env.ACCESS_SECRET_KEY ||
            !process.env.REFRESH_SECRET_KEY ||
            !process.env.ACCESS_TIME ||
            !process.env.REFRESH_TIME
        )
            throw "Не указаны секретные ключи в .env";
        const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET_KEY, {
            expiresIn: process.env.ACCESS_TIME,
        });
        const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET_KEY, {
            expiresIn: process.env.REFRESH_TIME,
        });
        return { accessToken, refreshToken };
    };

    public saveNewToken = async (
        uuid: string,
        refreshToken: string,
        ip: number
    ) => {
        this.checkAllToken(uuid);
        return Boolean(
            (
                await databaseManager.query(
                    `CALL AddSession("${uuid}","${refreshToken}",${ip});`
                )
            )[0][0].result
        );
    };

    public removeToken = async (refreshToken: string) => {
        const result = await databaseManager.query(
            `CALL RemoveSession("${refreshToken}");`
        );
        if (result && result[0].length == 1) return;

        throw ApiError.BadRequest(`Произошла ошибка при выходе с аккаунта.`);
    };

    public saveToken = async (
        oldRefreshToken: string,
        refreshToken: string,
        uuid: string
    ) => {
        this.checkAllToken(uuid);
        const res = await databaseManager.query(
            `CALL UpdateSession("${oldRefreshToken}","${refreshToken}");`
        );
        if (res && res[0].length == 1) return true;
        return false;
    };

    public validateAcessToken = (token: string) => {
        if (
            !process.env.ACCESS_SECRET_KEY ||
            !process.env.REFRESH_SECRET_KEY ||
            !process.env.ACCESS_TIME ||
            !process.env.REFRESH_TIME
        )
            throw "Не указаны секретные ключи в .env";
        try {
            return jwt.verify(token, process.env.ACCESS_SECRET_KEY);
        } catch {
            return null;
        }
    };
    public validateRefreshToken = (token: string) => {
        if (
            !process.env.ACCESS_SECRET_KEY ||
            !process.env.REFRESH_SECRET_KEY ||
            !process.env.ACCESS_TIME ||
            !process.env.REFRESH_TIME
        )
            throw "Не указаны секретные ключи в .env";
        try {
            return jwt.verify(token, process.env.REFRESH_SECRET_KEY);
        } catch {
            return null;
        }
    };

    public checkAllToken = async (uuid: string) => {
        databaseManager
            .query<sessionInfo>(`CALL GetSessions("${uuid}");`)
            .then((rows) => {
                for (let row of rows) {
                    //TODO
                }
            });
    };
}

export default new tokenService();
