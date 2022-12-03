import { Router } from "express";

export const userApi = new Router();
userApi.get('/me', (req, res) => {
    res.send(`GET data about me`);
});
userApi.get('/:id', (req, res) => {
    res.send(`GET data about ${req.params.id}`);
});