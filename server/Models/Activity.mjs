import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const ActivitySchema = new Schema({
    type: String, // 'comment'
    data: String // as JSON I guess
})

const Activity = mongoose.model('Activity', ActivitySchema)
export default Activity