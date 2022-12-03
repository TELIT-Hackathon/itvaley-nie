import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const ProjectSchema = new Schema({
    title: String,
    description: String,
    categories: [ObjectId],
    studentsRequest: ObjectId,
    expertRequest: ObjectId,
    activities: [ObjectId],
    createdBy: ObjectId,
})

const Project = mongoose.model('Project', ProjectSchema)
export default Project