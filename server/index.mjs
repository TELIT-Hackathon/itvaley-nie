import { Router } from "express";
import express from "express";
import { tagsApi } from "./Routes/tags-api.mjs";

const baseRouter = new Router();
baseRouter.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.originalUrl}`);

    //TODO add login verify

    next();
});

baseRouter.use("/api/tags", tagsApi);


const app = express();
app.use('/',baseRouter);

const port = 8080;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
