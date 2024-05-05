import Router from "express";

import controller from "../controllers/authentification";
import { body } from "express-validator";
import { authMiddleware } from "../middleware/authMiddleware";
import { roots } from "@shared/Roots";

export const authRouter = Router();

authRouter.post(
    roots.auth.registerByEmail,
    body("email").isEmail().withMessage("Неправильно указан email адрес"),
    body("password")
        .isLength({ min: 4, max: 48 })
        .withMessage("Пароль должен содержать от 4 до 48 символов."),
    controller.register
);
authRouter.post(
    roots.auth.loginByEmail,
    body("email").isEmail(),
    body("password").isLength({ min: 4, max: 48 }),
    controller.loginEmail
);
authRouter.post(roots.auth.loginByGoogle, controller.loginGoogle);
authRouter.post(roots.auth.logout, controller.logout);
authRouter.get(roots.auth.userInfo, authMiddleware, controller.userInfo);
authRouter.get(roots.auth.refresh, controller.refresh);
