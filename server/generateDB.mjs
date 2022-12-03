import mongoose from 'mongoose'
import RandomUser from 'randomuser'
const client = new RandomUser()

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

client.getUsers({ results: 2, gender: 'male' }, data => {
    console.log(data)
})





// await mongoose.connect('mongodb://127.0.0.1:27017/hk22')

// const test = new User()
// test.username = 'ArianaGrande'
// test.save(err => {
//     if(!err) console.log('Success!')
// })