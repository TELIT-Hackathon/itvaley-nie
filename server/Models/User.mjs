import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const UserSchema = new Schema({
    username: {type:String, unique: true},
    password: String,
    name: {
        title: String,
        first: String,
        last: String,
    },
    skills: [{
        id: ObjectId,
        level: Number
    }],
    role: String, // 'student' | 'teacher' | 'expert'
    location: String,
    picture: {
        large: String,
        medium: String,
        thumbnail: String,
    },
    contacts: [ObjectId]
})

const User = mongoose.model('User', UserSchema)
export default User