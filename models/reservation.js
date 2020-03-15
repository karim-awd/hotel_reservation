const { Schema, model } = require('mongoose')

const reservationSchema = new Schema({
    user: { type: String, required: true },
    room: { type: String, required: true },
    time: { type: Date, default: Date.now() },
    staff: { type: String, required: true }
})

const reservationModel = model('reservation', reservationSchema)


module.exports = reservationModel