import Router from "express";

import controller from "../controllers/saving";
import { authMiddleware } from "../middleware/authMiddleware";
import { roots } from "@shared/Roots";

export const savesRouter = Router();

savesRouter.post(roots.saves.createSave, authMiddleware, controller.createSave);

savesRouter.post(
    roots.saves.createSaves,
    authMiddleware,
    controller.createSaves
);

savesRouter.post(roots.saves.saveChip, authMiddleware, controller.saveChip);

savesRouter.post(roots.saves.deleteChip, authMiddleware, controller.deleteChip);

savesRouter.post(
    roots.saves.syncChanges,
    authMiddleware,
    controller.getSyncChanges
);
