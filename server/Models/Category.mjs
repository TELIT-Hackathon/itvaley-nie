import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const CategorySchema = new Schema({
    name: String,
})

const Category = mongoose.model('Category', CategorySchema)
export default Category