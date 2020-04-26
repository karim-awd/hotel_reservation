const roomsModel = require('../models/meetingRooms')

exports.insertRooms = () => {
    for (let i = 0; i < 10; i++) {
        let roomNumber = `MR-${i + 1}`
        let roomCapacity = i*10 + 10
        let event = `A group meeting for ${roomCapacity} people`
        new roomsModel({ roomNumber, roomCapacity, event }).save().then(room => console.log(i, room._id)).catch(console.log)
    }
}

