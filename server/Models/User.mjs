import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const UserSchema = new Schema({
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

const User = mongoose.model('User', UserSchema)
export default User