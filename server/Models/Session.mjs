import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const SessionSchema = new Schema({
    user: ObjectId,
    token: String,
})

const Session = mongoose.model('Session', SessionSchema)
export default Session