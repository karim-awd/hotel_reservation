const { Schema, model } = require('mongoose')

const roomSchema = new Schema({
    roomNumber: { type: String, required: true, unique: true },
    reserved: { type: Boolean, default: false }
})

const roomModel = model('rooms', roomSchema)


module.exports = roomModel