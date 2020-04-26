const tablesModel = require('../models/tables')

exports.insertTables = () => {
    for (let i = 0; i < 10; i++) {
        let tableNumber = `RT-${i + 1}`
        new tablesModel({ tableNumber }).save().then(table => console.log(i, table._id)).catch(console.log)
    }
}


