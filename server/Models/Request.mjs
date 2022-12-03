import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const RequestSchema = new Schema({
    title: String,
    description: String,
    createdBy: ObjectId,
    categories: [ObjectId],
    interestedUsers: [ObjectId],
    activities: [ObjectId],
    closedAt: Date
})

const Request = mongoose.model('Request', RequestSchema)
export default Request