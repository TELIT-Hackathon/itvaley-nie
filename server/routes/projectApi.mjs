import { Router } from "express";
import { protectedAsyncFunc } from "../helpers.mjs";
import Project from "../Models/Project.mjs";

export const projectApi = new Router();
projectApi.get('/', protectedAsyncFunc(async (req, res) => {
    const all = await Project.find({hidden: false}).exec()
    res.json(all)
}))

projectApi.post('/', protectedAsyncFunc(async (req, res) => {
    const data = req.body
    console.log(data)

    const newProject = new Project({
        title: data.title,
        description: data.description,
        categories: [],
        activities: [],
        studentsRequest: null,
        expertRequest: null,
        closedAt: null,
        createdBy: req.user.id
    })
    const project = await newProject.save()
    res.json(project)
}, true))


projectApi.get('/:id', protectedAsyncFunc(async (req, res) => {
    const project = await Project.findById(req.params.id).exec()
    res.json(project)
}))
projectApi.patch('/:id', protectedAsyncFunc(async (req, res) => {
    req.body.id = undefined
    await Project.updateOne({_id:req.params.id}, req.body).exec()
    res.send("OK")
}))
projectApi.delete('/:id', protectedAsyncFunc(async (req, res) => {
    await Project.deleteOne({_id:req.params.id}).exec()
    res.send("OK")
}))
