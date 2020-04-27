const { Schema, model } = require('mongoose')

const roomSchema = new Schema({
    roomNumber: { type: String, required: true, unique: true },
    view: { type: String, required: true, unique: false },
    reserved: { type: Boolean, default: false },
    floor: { type: Number, required: true, unique: false },
    bedNumber: { type: String, required: true, unique: false }
})

const roomModel = model('rooms', roomSchema)


module.exports = roomModel