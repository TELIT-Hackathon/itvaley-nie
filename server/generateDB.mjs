import User from './Models/Category.mjs'
import Category from './Models/Category.mjs'
import cats from './cats.mjs'
import mongoose from 'mongoose'

// const client = new RandomUser()

// client.getUsers({
//     results: 2,
//     gender: 'male'
// }, data => {
//     console.log(data)
// })

await mongoose.connect('mongodb+srv://admin:aJlXDjXh6dLBUhWV@cluster0.ijfjind.mongodb.net/test')

const categories = []

Object.keys(cats).forEach(name => {
    const cat = new Category()
    cat.name = name
    categories.push(cat)

    cats[name].tags.forEach(name => {
        const c = new Category()
        c.name = name
        c.parent = cat.id
        categories.push(c)
    })
})

Category.insertMany(categories).then(() => {
    console.log('Data inserted')
}).catch(error => console.log(error))