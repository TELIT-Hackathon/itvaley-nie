import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const CategorySchema = new Schema({
    name: String,
    parent: ObjectId,
})

const Category = mongoose.model('User', CategorySchema)
export default Category