const { Schema, model } = require('mongoose')

const mealSchema = new Schema({
    user: { type: String, required: true },
    roomNumber: { type: String, required: true },
    order: { type: String, required: true },
    amount: { type: Number, default: 1 },
    status: { type: String, required: true }
})

const mealModel = model('meal', mealSchema)


module.exports = mealModel