import { Router } from "express";

const baseRouter = new Router()
baseRouter.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.originalUrl}`);

    //TODO add login verify

    next();
})
