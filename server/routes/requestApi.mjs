import { Router } from "express";
import { protectedAsyncFunc } from "../helpers.mjs";
import Request from "../Models/Request.mjs";
import Skill from "../Models/Skill.mjs";
import User from "../Models/User.mjs";

export const requestApi = new Router();
requestApi.get('/', protectedAsyncFunc(async (req, res) => {
    // without special preprocessing we can only use good old scanning
    const all = await Request.find().exec()
    const allButBetter= await all
        .filter(request => request.peopleNeeded.find(p => p.role === req.user.role))
        .map(async (request) => {
            const skills = request.peopleNeeded
                .filter(p => p.role === req.user.role)
                .flatMap(p => p.skills)
                .map(s => ({
                    ...s,
                    value: 1
                }))
            console.log(skills)
            const result = await Skill.find({id:skills.map(x=>x.id)}).exec()
            const related = result.flatMap(skill => {
                const origSkill = skills.find(x => x.id == skill.id)
                return skill.related.map(s => ({...s, level: origSkill.level}))
            })
            console.log(related)
            const merged = [
                ...skills,
                ...related,
            ]
            console.log(merged)
            return merged
        })

    res.json(allButBetter)
}, true))

requestApi.get('/mine', protectedAsyncFunc(async (req, res) => {
    await Request.find({createdBy:req.user.id}).exec()
},true))

requestApi.get('/test2', protectedAsyncFunc(async (req, res) => {
    // without special preprocessing we can only use good old scanning
    const all = [
        {   
            id: "1",
            peopleNeeded: [{
                role: 'student',
                skills: [{
                    id: "1",
                    level: 2,
                }],
                amount: 3
            }],
        }
    ]
    const ss = [
        {id: "1", name:"abcd", related:[{id: "2", value: 0.7}]},
        {id: "2", name:"abcde", related:[{id: "1", value: 0.2}]},
        {id: "3", name:"abcdef", related:[{id: "2", value: 0.9}]}
    ]

    req.user.skills.
    
    res.json()
}, true))

requestApi.get('/test', protectedAsyncFunc(async (req, res) => {
    // without special preprocessing we can only use good old scanning
    const all = [
        {   
            id: "1",
            peopleNeeded: [{
                role: 'student',
                skills: [{
                    id: "1",
                    level: 2,
                }],
                amount: 3
            }],
        }
    ]
    const ss = [
        {id: "1", name:"abcd", related:[{id: "2", value: 0.7}]},
        {id: "2", name:"abcde", related:[{id: "1", value: 0.2}]},
        {id: "3", name:"abcdef", related:[{id: "2", value: 0.9}]}
    ]

    const allButBetter = all
        .filter(request => request.peopleNeeded.find(p => p.role === req.user.role))
        .map((request) => {
            const skills = request.peopleNeeded
                .filter(p => p.role === req.user.role)
                .flatMap(p => p.skills)
                .map(s => ({
                    ...s,
                    value: 1
                }))
            console.log(skills)
            const result = skills.map(x=> ss.find(s => s.id === x.id))
            const related = result.flatMap(skill => {
                const origSkill = skills.find(x => x.id == skill.id)
                return skill.related.map(s => ({...s, level: origSkill.level}))
            })
            console.log(related)
            const merged = [
                ...skills,
                ...related,
            ]
            console.log(merged)
            return merged
        })
        .map(skill => {

        })


    res.json(allButBetter)
}, true))

requestApi.post('/', protectedAsyncFunc(async (req, res) => {
    const data = req.body
    console.log(data)

    const newRequest = new Request({
        title: data.title,
        description: data.description,
        activities: [],
        //skills: data.skills.map(skill => ({id: new ObjectId(/*skill.id*/), level: skill.level})),
        amount: data.amount,
        // interestedUsers: [ObjectId],
        closedAt: null,
        createdBy: req.user.id
    })
    const request = await newRequest.save()
    res.json(request)
}, true))

requestApi.get('/:id', protectedAsyncFunc(async (req, res) => {
    const request = await Request.findById(req.params.id).exec()
    const users = await User.find({id: request.interestedUsers.map(u => u.id)})

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