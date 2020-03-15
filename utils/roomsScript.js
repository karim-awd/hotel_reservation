const roomsModel = require('../models/rooms')

exports.insertRooms = () => {
    for (let i = 0; i < 10; i++) {
        let roomNumber = `K-${i + 1}`
        new roomsModel({ roomNumber }).save().then(room => console.log(i, room._id)).catch(console.log)
    }
}

