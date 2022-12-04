import { Router } from "express";
import { protectedAsyncFunc } from "../helpers.mjs";
import Category from "../Models/Skill.mjs";

export const skillsApi = new Router();
skillsApi.get('/', protectedAsyncFunc(async (req, res) => {
    const all = await Category.find().exec()
    console.log(all.length)
    res.json(all)
}))