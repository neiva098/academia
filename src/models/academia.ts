import * as mongoose from 'mongoose'

mongoose.set('useFindAndModify', false)

const userSchema = new mongoose.Schema({}, { strict: false })


export const userModel = mongoose.model('users', userSchema)
