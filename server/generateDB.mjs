import Skill from './Models/Skill.mjs'
import cats from './cats.mjs'
import mongoose from 'mongoose'
import RandomUser from 'randomuser'
import newcats from './newCats.mjs'

const client = new RandomUser()

client.getUsers({
    results: 15,
    gender: 'male'
}, data1 => {
    client.getUsers({
        results: 15,
        gender: 'female'
    }, data2 => {
        let data = [...data1, ...data2]
        
        data = data.map(u => ({
            name: `${u.name.first} ${u.name.last}`,
            location: `${u.location.country} ${u.location.city}`,
            avatar: u.picture.medium,
            role: ['teacher', 'expert', 'student'][Math.floor(Math.random() * 3)],
            skills: Array.from(
                {length: Math.floor(Math.random() * 3) + 5},
                () => ({id: newcats[Math.floor(Math.random() * newcats.length)].name, level: Math.floor(Math.random() * 5) + 1})
            )
        }))

        console.log(JSON.stringify(data, null, 4))
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