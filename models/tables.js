const { Schema, model } = require('mongoose')

const tableSchema = new Schema({
    tableNumber: { type: String, required: true, unique: true },
    reserved: { type: Boolean, default: false }
})

const tableModel = model('tables', tableSchema)


module.exports = tableModel