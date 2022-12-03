import { Router } from "express";
import { tagsApi } from "./routes/tags-api.mjs";

const baseRouter = new Router();
baseRouter.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.originalUrl}`);

    //TODO add login verify

    next();
});

baseRouter.use("/api/tags", tagsApi);
