const { Schema, model } = require('mongoose')

const reservationSchema = new Schema({
    user: { type: String, required: true },
    roomNumber: { type: String, required: true },
    fromDate: { type: Date, default: Date.now() },
    toDate: { type: Date},
    checkedIn: { type: Boolean, default: false },
    staff: { type: String, required: true }
})

const reservationModel = model('reservation', reservationSchema)


module.exports = reservationModel