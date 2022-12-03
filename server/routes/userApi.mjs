import { Router } from 'express'
import User from '../Models/User.mjs'
import Session from '../Models/Session.mjs'
import crypto from 'crypto'
import { protectedAsyncFunc, protectedFunc } from '../helpers.mjs'

export const userApi = new Router()

const hashPassword = password => crypto.createHash('sha256').update(password).digest('hex')
const generateToken = () => crypto.randomBytes(64).toString('hex')

// 
userApi.get('/all', protectedAsyncFunc(async (req, res) => {
    res.json(await User.find().exec());
})); //Yaa
userApi.get('/me', protectedFunc((req, res) => {
    res.json(req.user);
}, true)); //Yaa
userApi.put('/me', protectedAsyncFunc(async (req, res) => {
    req.body.id = undefined
    req.body._id = undefined
    await User.updateOne({id:req.user.id}, req.body).exec()
    res.send("OK")
}, true)); //Yaa
userApi.get('/contacts', protectedAsyncFunc(async (req, res) => {
    console.log(req.user.contacts)
    const contacts = await User.find({_id: req.user.contacts}).exec()
    res.json(contacts)
}, true)); //Yaa
userApi.get('/:id', protectedAsyncFunc(async (req, res) => {
    const user = await User.findById(req.params.id).exec()
    res.json(user)
})); //Yaa


userApi.post('/login', protectedAsyncFunc(async (req, res) => {
    const username = req.body.username || ''
    const password = req.body.password || ''

    const user = await User.findOne({username: username}).exec()
    if(user && user.password === hashPassword(password)) {
        const token = generateToken()

        const session = new Session({user: user.id, token})
        await session.save()
        
        res.json({token})
    }
    else {
        throw new Error("wrong data")
    }
})) //Yaa
userApi.post('/logout', protectedFunc((req, res) => {
    Session.findOne({user: req.user.id}).remove().exec()
    res.send("OK")
}, true)) //Yaa
userApi.post('/register', protectedAsyncFunc(async (req, res) => {
    const data = req.body
    console.log(data)

    const newUser = new User({
        username: data.username,
        password: hashPassword(data.password),
        name: {
            title: data.title,
            first: data.firstName,
            last: data.lastName
        },
        categories: [],
        role: data.role,
        location: data.location,
        picture:{
            large: "",
            medium: "",
            thumbnail: ""
        }
    })
    await newUser.save()
    
    res.send("OK")
})) //Yaa