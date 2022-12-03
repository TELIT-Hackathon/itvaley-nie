import { Router } from "express";
import User from "../Models/User.mjs";

export const userApi = new Router();
userApi.get('/me', (req, res) => {
    res.send(`GET data about me`);
});
userApi.get('/:id', (req, res) => {
    res.send(`GET data about ${req.params.id}`);
});
userApi.post('/login', (req, res) => {
    res.send(`GET data about ${req.params.id}`);
});
userApi.post('/register', async (req, res) => {
    const data = req.body;
    console.log(data);

    if(data.username && data.password){

        const newUser = new User({
            username: data.username,
            password: data.password,
            setupComplete: false
        });
        await newUser.save();
        
        res.send("OK");
    }else{
        res.status(406).send('Not Acceptable')
    }
});