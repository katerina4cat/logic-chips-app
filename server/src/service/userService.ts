import { databaseManager } from "../app";
import { userInfo } from "../databaseManager";
import { ApiError } from "../exceptions/errorService";
import tokenService from "./tokenService";

interface userData {
    photoUrl: string;
    email: string;
    nick: string;
    registered: Date;
    coins: number;
    donate: number;
}

export interface userDto {
    uuid: string;
    email: string;
}

class userService {
    public async registration(email: string, password: string, ip: number) {
        let result = await databaseManager.query<userInfo>(
            `CALL Registration("${email}","${password}","${email}");`
        );
        if (result && result[0].length == 1) {
            const userData = result[0][0] as userData;
            const tokens = tokenService.generateTokens({
                ...(result[0][0] as userDto),
            });
            if (
                !(await tokenService.saveNewToken(
                    result[0][0].uuid,
                    tokens.refreshToken,
                    ip
                ))
            )
                throw ApiError.BadRequest(
                    "Не удалось создать токены доступа пользователя."
                );
            return {
                userData,
                ...tokens,
            };
        }
        throw ApiError.BadRequest(
            `Пользователь с таким email адресом уже существует.`
        );
    }

    public async login(email: string, password: string, ip: number) {
        const result = await databaseManager.query<userInfo>(
            `CALL LoginByEmail("${email}","${password}");`
        );
        if (result && result[0].length == 1) {
            const userData = result[0][0] as userData;
            const tokens = tokenService.generateTokens({
                ...(result[0][0] as userDto),
            });
            if (
                !(await tokenService.saveNewToken(
                    result[0][0].uuid,
                    tokens.refreshToken,
                    ip
                ))
            )
                throw ApiError.BadRequest(
                    "Не удалось создать токены доступа пользователя."
                );
            return {
                userData,
                ...tokens,
            };
        }
        throw ApiError.BadRequest(`Не правильная связка email-пароль.`);
    }

    public async logout(refreshToken: string) {
        tokenService.removeToken(refreshToken);
    }

    public async refresh(refreshToken: string | undefined) {
        if (!refreshToken) throw ApiError.UnauthorizedError();
        const RuserData: any = tokenService.validateRefreshToken(refreshToken);
        const RtokenFromDB = databaseManager.query(
            `SELECT * FROM sessions WHERE refresh="${refreshToken}"`
        );
        if (!RuserData || !RtokenFromDB) throw ApiError.UnauthorizedError();

        const result = await databaseManager.query<userInfo>(
            `CALL UserByUuid("${RuserData.uuid}")`
        );
        const userData = result[0][0] as userData;
        const tokens = tokenService.generateTokens({
            ...(result[0][0] as userDto),
        });
        const tokenSaved = await tokenService.saveToken(
            refreshToken,
            tokens.refreshToken,
            RuserData.uuid
        );
        if (!tokenSaved) throw ApiError.UnauthorizedError();
        return {
            userData,
            ...tokens,
        };
    }

    public async userInfo(uuid: string) {
        const result = await databaseManager.query<userInfo>(
            `CALL UserByUuid("${uuid}")`
        );
        if (result && result[0].length == 1) {
            const userData = result[0][0] as userData;
            return {
                userData,
            };
        }
        throw ApiError.RuntimeError(`Не удалось найти пользователя.`);
    }

    public async loginByGoogle(
        email: string,
        googleID: string,
        nick: string,
        photo: string,
        ip: number
    ) {
        const result = await databaseManager.query<userInfo>(
            `CALL LoginByGoogle("${email}","${googleID}","${nick}","${photo}");`
        );
        if (result && result[0].length == 1) {
            const userData = result[0][0] as userData;
            const tokens = tokenService.generateTokens({
                ...(result[0][0] as userDto),
            });
            if (
                !(await tokenService.saveNewToken(
                    result[0][0].uuid,
                    tokens.refreshToken,
                    ip
                ))
            )
                throw ApiError.BadRequest(
                    "Не удалось создать токены доступа пользователя."
                );
            return {
                userData,
                ...tokens,
            };
        }
        throw "Не удалось связать пользователя гугл и аккаунт приложения";
    }

    // public async deletingUser(uuid: string) {
    //     const result = await databaseManager.query<userInfo>(
    //         `CALL RemoveUser("${uuid}");`
    //     );
    //     return result.length == 1 ? result[0] : undefined;
    // }
}
export default new userService();
