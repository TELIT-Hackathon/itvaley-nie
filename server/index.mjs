import { Router } from "express";
import express from "express";
import { tagsApi } from "./Routes/tags-api.mjs";
import { processUser } from "./login.mjs";

const baseRouter = new Router();
baseRouter.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.originalUrl}`);

    const user = processUser(req);
    req.user = user;

    next();
});

baseRouter.use("/api/tags", tagsApi);


const app = express();
app.use('/',baseRouter);

const port = 8080;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
