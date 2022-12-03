import { Router } from "express";
import { protectedAsyncFunc } from "../helpers.mjs";
import Category from "../Models/Category.mjs";

export const tagsApi = new Router();
tagsApi.get('/', protectedAsyncFunc(async (req, res) => {
    const all = await Category.find().exec()
    console.log(all.length)
    res.json(all)
}))
tagsApi.get("/categories", protectedAsyncFunc(async (req, res) => {
    const categories = await Category.find({"parent": undefined}).exec();
    console.log(categories.length)
    res.json(categories);
}))
tagsApi.get("/category/:id", protectedAsyncFunc(async (req, res) => {
    const tags = await Category.find({"parent": req.params.id}).exec();
    console.log(tags.length)
    res.json(tags);
}))

tagsApi.get('/:id', protectedAsyncFunc(async (req, res) => {
    res.json(await Category.findOne({_id:req.params.id}).exec())
}))