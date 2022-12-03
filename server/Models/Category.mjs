const CategorySchema = new Schema({
    name: String,
    parent: ObjectId,
})

const Category = mongoose.model('User', CategorySchema)
export default Category