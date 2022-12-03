import { Router } from "express"
import User from "../Models/User.mjs"

export const userApi = new Router()
userApi.get('/me', (req, res) => {
    res.send(req.user);
});
userApi.update('/me', (req, res) => {
    User.updateOne({id:req.user.id}, req.body)
    res.send("OK")
});
userApi.get('/:id', async (req, res) => {
    const user = await User.findOne({id:req.params.id})
    res.json(user)
});
userApi.post('/login', (req, res) => {
    res.send(`GET data about ${req.params.id}`)
});
userApi.post('/register', async (req, res) => {
    const data = req.body;
    console.log(data);

    const newUser = new User({
        username: data.username,
        password: data.password,
        name: {
            title: data.title,
            first: data.firstName,
            last: data.lastName
        },
        categories: [],
        role: data.role,
        location: data.location,

    });
    await newUser.save();
    
    res.send("OK");
});