import Skill from './Models/Skill.mjs'
import cats from './cats.mjs'
import mongoose from 'mongoose'
import RandomUser from 'randomuser'

const client = new RandomUser()

client.getUsers({
    results: 10,
    gender: 'male'
}, data1 => {
    client.getUsers({
        results: 10,
        gender: 'female'
    }, data2 => {
        let data = [...data1, ...data2]
        
        data = data.map(u => ({
            
        }))

        console.log(data)
    })
})

// await mongoose.connect('mongodb+srv://admin:aJlXDjXh6dLBUhWV@cluster0.ijfjind.mongodb.net/test')

// const categories = []

// Object.keys(cats).forEach(name => {
//     const cat = new Skill()
//     cat.name = name
//     categories.push(cat)

//     cats[name].tags.forEach(name => {
//         const c = new Skill()
//         c.name = name
//         c.parent = cat.id
//         categories.push(c)
//     })
// })

// Skill.insertMany(categories).then(() => {
//     console.log('Data inserted')
// }).catch(error => console.log(error))