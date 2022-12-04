import { Router } from "express";
import { protectedAsyncFunc } from "../helpers.mjs";
import Category from "../Models/Skill.mjs";
import newCats from "../newCats.mjs";

const parsedSkills = newCats.map(elem => {
    elem.id = elem.name
    return elem
})

export const skillsApi = new Router();
skillsApi.get('/', protectedFunc((req, res) => {
    res.json(parsedSkills)
}))