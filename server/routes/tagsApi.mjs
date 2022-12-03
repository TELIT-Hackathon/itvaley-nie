import { Router } from "express";
import Category from "../Models/Category.mjs";

export const tagsApi = new Router();
tagsApi.get('/', async (req, res) => {
    res.json(await Category.find())
});
tagsApi.get('/:id', async (req, res) => {
    res.json(await Category.findOne({_id:req.params.id}))
});