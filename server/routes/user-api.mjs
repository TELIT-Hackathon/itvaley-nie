import { Router } from 'express'
import User from '../Models/User.mjs'
import Session from '../Models/Session.mjs'
import crypto from 'crypto'

export const userApi = new Router()

const hashPassword = password => crypto.createHash('sha256').update(password).digest('hex')
const generateToken = () => crypto.randomBytes(64).toString('hex')

userApi.get('/me', (req, res) => {
    res.send(`GET data about me`)
})

userApi.get('/:id', (req, res) => {
    res.send(`GET data about ${req.params.id}`)
})

userApi.post('/login', async (req, res) => {
    try {
        const username = req.body.username || ''
        const password = req.body.password || ''

        const user = await User.findOne({username: username})
        if(user && user.password === hashPassword(password)) {
            const token = generateToken()

            const session = new Session({user: user.id, token})
            await session.save()
            
            res.status(200).json({token})
        }
        else {
            throw
        }
    }
    catch(err) {
        res.status(500).send(err)
    }
})

userApi.post('/logout', (req, res) => {
    Session.findOne({user: req.user.id}).remove().exec()
    res.status(200).end()
})

userApi.post('/register', async (req, res) => {
    const data = req.body
    console.log(data)

    if(data.username && data.password){

        const newUser = new User({
            username: data.username,
            password: data.password,
            setupComplete: false
        })
        await newUser.save()
        
        res.send('OK')
    }else{
        res.status(406).send('Not Acceptable')
    }
})