import { Router } from "express";
import { protectedAsyncFunc } from "../helpers.mjs";
import Category from "../Models/Category.mjs";

export const tagsApi = new Router();
tagsApi.get('/', protectedAsyncFunc(async (req, res) => {
    const all = await Category.find().exec()
    console.log(all.length)
    res.json(all)
}))