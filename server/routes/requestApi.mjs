import { Router } from "express";
import { protectedAsyncFunc } from "../helpers.mjs";
import Request from "../Models/Request.mjs";
import Skill from "../Models/Skill.mjs";
import User from "../Models/User.mjs";
import newCats from "../newCats.mjs";

const parsedSkills = newCats.map(elem => {
    elem.id = elem.name
    return elem
})

const matching = (hisSkills, wantedSkills) => {
    // skill - id, level
    const result = wantedSkills.map(skill => {
        const matchedSkill = hisSkills.find(s => s.id === skill.id)
        if(matchedSkill){
            return 1 - 0.25 * Math.abs(matchedSkill.level - skill.level);
        }else{
            // resolve skill and get related
            const resolvedSkills = hisSkills.map(janevjem => {
                const life = parsedSkills.find(sk => sk.id === janevjem.id)
                life.level = janevjem.level
                return life
            })
            const mappedSkills = resolvedSkills.map(janevjem => Math.max(...janevjem.rel.map(
                s2 => {
                    if(skill.id === s2.id){
                        return (1 - 0.25 * Math.abs(skill.level - janevjem.level)) * s2.value
                    }
                    return 0;
                }
            )))
            console.log(mappedSkills)
            return Math.max(...mappedSkills)
        }
    })
    return result.reduce((a, b) => a + b, 0) / result.length;
}

console.log(matching(
    [{id:"Typescript", level:2}, {id:"React", level:2}, {id:"Flask", level:1}],
    [{id:"HTML-CSS", level:5}, {id:"Python", level:3}]
))

export const requestApi = new Router();
requestApi.get('/', protectedAsyncFunc(async (req, res) => {
    // without special preprocessing we can only use good old scanning
    const all = await Request.find().exec()
    const allButBetter = all
        .filter(request => request.peopleNeeded.find(p => p.role === req.user.role))
        .map((request) => {
            console.log(request)
            const skills = request.peopleNeeded
                .filter(p => p.role === req.user.role)
                .map(p => p.skills)
                .map(skills => matching(req.user.skills,skills))
            const bestMatch = Math.max(...skills)
            request.score = bestMatch;
            return request
        })
        .sort((r1,r2) => r2.score - r1.score)

    res.json(allButBetter)
}, true))

requestApi.get('/mine', protectedAsyncFunc(async (req, res) => {
    const mine = await Request.find({createdBy:req.user.id}).exec()
    res.json(mine)
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


    res.json(allButBetter)
}, true))

requestApi.post('/', protectedAsyncFunc(async (req, res) => {
    const data = req.body
    console.log(data)

    const newRequest = new Request({
        title: data.title,
        description: data.description,
        peopleNeeded: data.peopleNeeded ?? [],
        interestedUsers: [],
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