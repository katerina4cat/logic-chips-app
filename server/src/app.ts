import dotenv from "dotenv";
dotenv.config();

// Необходимое для запуска https сервера
import express from "express";
import { credentials } from "../env";

// Необходимые midleware в express
import cookieParser from "cookie-parser";
import cors from "cors";

// router для express
import { authRouter } from "./router/authRoots";
import { savesRouter } from "./router/savesRoots";

// Менеджеры
import DatabaseManager from "./databaseManager";
import { errorMiddleware } from "./middleware/errorMiddleware";

export const app = express();
export const databaseManager = new DatabaseManager();

app.use(
    cors({
        origin: "https://katerina4cat.ru:8443",
        credentials: true,
    })
);
app.use(express.json());
app.use(cookieParser());
app.use(authRouter);
app.use(savesRouter);
app.get("/", (req, res) => {
    res.redirect("https://katerina4cat.ru:8443");
});

app.use(errorMiddleware);

const httpsServer = require("https").createServer(credentials, app);
httpsServer.listen(443, () => {
    console.log("Server run on https://katerina4cat.ru");
});
