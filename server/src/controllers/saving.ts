import e, { NextFunction, Request, Response } from "express";
import saveService from "../service/savesService";
import { ApiError } from "../exceptions/errorService";
import { validationResult } from "express-validator";
import { ChipInfo } from "@shared/models/saves/ChipInfo";
import {
    clientDeleteChip,
    clientSaveChip,
    clientSyncChanges,
} from "@shared/models/saves/exchangeTypes";

class authentification {
    public createSave = async (
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
            if (
                await saveService.createSave(
                    (req.body as any).title,
                    (req.user as any).uuid
                )
            )
                res.status(200).send(true);
            else throw ApiError.RuntimeError("Произошла непредвиденная ошибка");
        } catch (err) {
            next(err);
        }
    };

    public createSaves = async (
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
            if (
                await saveService.createSaves(
                    (req.body as any).titles,
                    (req.user as any).uuid
                )
            )
                res.status(200).send(true);
            else throw ApiError.RuntimeError("Произошла непредвиденная ошибка");
        } catch (err) {
            next(err);
        }
    };

    public saveChip = async (
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
            const body = req.body as clientSaveChip;
            const sqlres = await saveService.saveChip(
                body.saveName,
                (req.user as any).uuid,
                body.chip
            );

            if (sqlres) res.status(400).send(sqlres);
            res.status(200).send(true);
        } catch (err) {
            next(err);
        }
    };

    public deleteChip = async (
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
            const body = req.body as clientDeleteChip;
            if (
                await saveService.deleteChip(
                    body.chipName,
                    body.saveName,
                    body.deletedAt,
                    (req.user as any).uuid
                )
            )
                res.status(200).send(true);
            else throw ApiError.RuntimeError("Произошла непредвиденная ошибка");
        } catch (err) {
            next(err);
        }
    };

    public getSyncChanges = async (
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
            const body = req.body as clientSyncChanges;
            res.status(200).send(
                await saveService.getSync(
                    (req.user as any).uuid,
                    body.lastLoadDateTime
                )
            );
        } catch (err) {
            next(err);
        }
    };
}
export default new authentification();
