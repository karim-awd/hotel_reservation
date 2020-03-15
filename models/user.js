const { Schema, model } = require('mongoose')
const { roles } = require('../utils/constants')


const userSchema = new Schema({
    name: { type: String, required: true },
    mobile: { type: String, required: true, unique: true },
    role: { type: [String], enum: [...roles], default: "USER" },
    password: { type: String, required: true },
}, { toJSON: true })

const userModel = model('users', userSchema)


module.exports = userModel