const CategorySchema = new Schema({
    username: String,
    password: String,
    name: {
        title: String,
        first: String,
        last: String,
    },
    categories: [ObjectId],
    role: String, // 'student' | 'teacher' | 'expert'
    location: String,
    picture: {
        large: String,
        medium: String,
        thumbnail: String,
    },
})

const Category = mongoose.model('User', CategorySchema)
export default Category