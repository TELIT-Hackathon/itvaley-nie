import { Router } from "express";
import { protectedAsyncFunc } from "../helpers.mjs";
import Request from "../Models/Request.mjs";

export const requestApi = new Router();
requestApi.get('/', protectedAsyncFunc(async (req, res) => {
    const all = await Request.find({hidden: false}).exec()
    res.json(all)
}))
requestApi.post('/', protectedAsyncFunc(async (req, res) => {
    const data = req.body
    console.log(data)

    const newRequest = new Request({
        title: data.title,
        description: data.description,
        activities: [],
        categories: [], //TODO
        interestedUsers: [],
        closedAt: null,
        createdBy: req.user.id,
        isInProject: data.isInProject || false
    })
    const request = await newRequest.save()
    res.json(request)
}, true))

requestApi.get('/:id', protectedAsyncFunc(async (req, res) => {
    const request = await Request.findById(req.params.id).exec()
    res.json(request)
}))
requestApi.put('/:id', protectedAsyncFunc(async (req, res) => {
    req.body.id = undefined
    await Request.updateOne({_id:req.params.id}, req.body).exec()
    res.send("OK")
}, true))
requestApi.delete('/:id', protectedAsyncFunc(async (req, res) => {
    await Request.deleteOne({_id:req.params.id}).exec()
    res.send("OK")
}, true))