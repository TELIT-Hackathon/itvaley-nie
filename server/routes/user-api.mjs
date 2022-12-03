import { Router } from "express";

export const userApi = new Router();
userApi.get('/me', (req, res) => {
    res.send(`GET data about me`);
});
userApi.get('/:id', (req, res) => {
    res.send(`GET data about ${req.params.id}`);
});
userApi.post('/login', (req, res) => {
    res.send(`GET data about ${req.params.id}`);
});
userApi.post('/register', (req, res) => {
    const data = req.body;
    console.log(data);

    res.send("OK")
});