import { Router } from "express";
import { protectedAsyncFunc } from "../helpers.mjs";
import Request from "../Models/Request.mjs";
import Skill from "../Models/Skill.mjs";

export const requestApi = new Router();
requestApi.get('/', protectedAsyncFunc(async (req, res) => {
    // without special preprocessing we can only use good old scanning
    const all = await Request.find().exec()
    const d0 = all
        .map((request) => request.peopleNeeded)
        .reduce((prev, curr) => {
            curr.value = 1
            let res;
            if (res = prev.find(r => r.id == curr.id && r.level < curr.level)){
                res.level = curr.level
            }else{
                prev.append(curr)
            }
        }, []);
    const skillsD0 = await Skill.find({id:d0.map(x=>x.id)}).exec()
    console.log(skillsD0)
    const d1 = skillsD0
        .flatMap(skill => {
            const origSkill = d0.find(x => x.id == skill.id)
            return skill.related.map(s => ({...s, level: origSkill.level}))
        })
        .reduce((prev, curr) => {
            let res;
            if (res = prev.find(r => r.id == curr.id && (r.level < curr.level || r.value < curr.value))){
                if(r.level < curr.level){
                    res.level = curr.level
                }
                if(r.value < curr.value){
                    res.value = curr.value
                }
            }else{
                prev.append(curr)
            }
        }, []);
    const skillsD1 = await Skill.find({id:d1.map(x=>x.id)}).exec()
    console.log(skillsD1)

    res.json(all)
}, true))
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
        createdBy: req.user.id
    })
    const request = await newRequest.save()
    res.json(request)
}, true))

requestApi.get('/:id', protectedAsyncFunc(async (req, res) => {
    const request = await Request.findById(req.params.id).exec()
    res.json(request)
}))
requestApi.patch('/:id', protectedAsyncFunc(async (req, res) => {
    req.body.id = undefined
    await Request.updateOne({_id:req.params.id}, req.body).exec()
    res.send("OK")
}, true))
requestApi.delete('/:id', protectedAsyncFunc(async (req, res) => {
    await Request.deleteOne({_id:req.params.id}).exec()
    res.send("OK")
}, true))