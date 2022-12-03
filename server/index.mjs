import { Router } from "express";
import express from "express";
import { tagsApi } from "./Routes/tags-api.mjs";
import { processUser } from "./login.mjs";
import mongoose from "mongoose";
import { userApi } from "./Routes/user-api.mjs";

const app = express();
app.use(express.json()) // for parsing application/json

const baseRouter = new Router();
baseRouter.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.originalUrl}`);

    const user = processUser(req);
    req.user = user;

    next();
});

baseRouter.use("/api/tags", tagsApi);
baseRouter.use("/api/user", userApi);

//let db = await mongoose.connect('mongodb://10.234.7.83:27017/hk22');

app.use('/',baseRouter);

const port = 8080;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
