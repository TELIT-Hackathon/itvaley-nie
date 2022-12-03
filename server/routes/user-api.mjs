import { Router } from 'express'
import User from '../Models/User.mjs'
import Session from '../Models/Session.mjs'
import crypto from 'crypto'

export const userApi = new Router()

const hashPassword = password => crypto.createHash('sha256').update(password).digest('hex')
const generateToken = () => crypto.randomBytes(64).toString('hex')

userApi.get('/me', (req, res) => {
    res.send(req.user);
});
userApi.put('/me', (req, res) => {
    User.updateOne({id:req.user.id}, req.body)
    res.send("OK")
});
userApi.get('/:id', async (req, res) => {
    const user = await User.findOne({id:req.params.id})
    res.json(user)
});
userApi.post('/login', async (req, res) => {
    try {
        const username = req.body.username || ''
        const password = req.body.password || ''

        const user = await User.findOne({username: username})
        if(user && user.password === hashPassword(password)) {
            const token = generateToken()

            const session = new Session({user: user.id, token})
            await session.save()
            
            res.json({token})
        }
        else {
            res.status(406).send("Invalid")
        }
    }
    catch(err) {
        res.status(500).send(err)
    }
})
userApi.post('/logout', (req, res) => {
    Session.findOne({user: req.user.id}).remove().exec()
    res.end()
})
userApi.post('/register', async (req, res) => {
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
});