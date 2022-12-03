import { Router } from "express";

export const tagsApi = new Router();
tagsApi.get('/', (req, res) => {
    res.send('GET all tags');
});
tagsApi.get('/:id', (req, res) => {
    res.send(`GET tag by id ${req.params.id}`);
});