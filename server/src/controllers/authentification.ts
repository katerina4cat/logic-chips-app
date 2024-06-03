import e, { NextFunction, Request, Response } from "express";
import userService from "../service/userService";
import { ApiError } from "../exceptions/errorService";
import { validationResult } from "express-validator";

const ipToNumber = (ip: string): number => {
    const octets = ip.split(".").map(Number);
    return (
        ((octets[0] << 24) |
            (octets[1] << 16) |
            (octets[2] << 8) |
            octets[3]) >>>
        0
    );
};

interface IFields {
    [key: string]: string;
}

class authentification {
    public register = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty())
                return next(
                    ApiError.BadRequest("Ошибка запроса", errors.array())
                );
            const { email, password } = req.body as IFields;
            const result = await userService.registration(
                email,
                password,
                req.ip ? ipToNumber(req.ip) : 1
            );
            res.cookie("refreshToken", result.refreshToken, {
                maxAge: Number(process.env.REFRESH_TIME_MS),
                httpOnly: true,
                secure: false,
            });
            res.status(201).json({
                ...result.userData,
                accessToken: result.accessToken,
            });
        } catch (err) {
            next(err);
        }
    };

    public loginEmail = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty())
                return next(
                    ApiError.BadRequest("Ошибка запроса", errors.array())
                );
            const { email, password } = req.body as IFields;
            const result = await userService.login(
                email,
                password,
                req.ip ? ipToNumber(req.ip) : 1
            );
            res.cookie("refreshToken", result.refreshToken, {
                maxAge: Number(process.env.REFRESH_TIME_MS),
                httpOnly: true,
                secure: false,
            });
            res.status(201).json({
                ...result.userData,
                accessToken: result.accessToken,
            });
        } catch (err) {
            next(err);
        }
    };

    public logout = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { refreshToken } = req.cookies;
            await userService.logout(refreshToken);
            res.clearCookie("refreshToken");
            res.status(200).send();
        } catch (err) {
            next(err);
        }
    };

    public loginGoogle = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const { email, googleID, nick, photo } = req.body as IFields;
            if (!email || !googleID || !nick)
                throw ApiError.UnauthorizedError();
            const result = await userService.loginByGoogle(
                email,
                googleID,
                nick,
                photo,
                req.ip ? ipToNumber(req.ip) : 1
            );
            res.cookie("refreshToken", result.refreshToken, {
                maxAge: Number(process.env.REFRESH_TIME_MS),
                httpOnly: true,
                secure: false,
            });
            res.status(201).json({
                ...result.userData,
                accessToken: result.accessToken,
            });
        } catch (err) {
            next(err);
        }
    };

    public userInfo = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            if (!req.user) throw ApiError.UnauthorizedError();
            const result = await userService.userInfo((req.user as any).uuid);
            res.status(201).json({
                ...result.userData,
            });
        } catch (err) {
            next(err);
        }
    };

    public refresh = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const { refreshToken } = req.cookies;
            const result = await userService.refresh(refreshToken);
            res.status(200).json({
                ...result.userData,
                accessToken: result.accessToken,
            });
        } catch (err) {
            next(err);
        }
    };
}
export default new authentification();
