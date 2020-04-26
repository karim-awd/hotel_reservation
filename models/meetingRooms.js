const { Schema, model } = require('mongoose')

const meetingRoomSchema = new Schema({
    roomNumber: { type: String, required: true, unique: true },
    roomCapacity: { type: Number, required: true, unique: true },
    event: { type: String, required: false},
    reserved: { type: Boolean, default: false }
})

const meetingRoomModel = model('meetingRooms', meetingRoomSchema)


module.exports = meetingRoomModel