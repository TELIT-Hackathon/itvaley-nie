import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const ProjectSchema = new Schema({
    studentsRequest: ObjectId,
    expertRequest: ObjectId
})

const Project = mongoose.model('Project', ProjectSchema)
export default Project