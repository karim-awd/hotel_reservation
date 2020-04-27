const roomsModel = require('../models/rooms')


const single = "Single"
const double = "Double"
let stat = 1
let floor = 1
exports.insertRooms = () => {
    for (let i = 0; i < 16; i++) {
        let roomNumber = `K-${i + 1}`
        let bedNumber = (i%2)?  double : single 
        let view = (stat === 1 || stat === 2)? "Sea" : "Internal"
        new roomsModel({ roomNumber, view, floor, bedNumber }).save().then(room => console.log(i, room._id)).catch(console.log)
        stat += 1
        if (stat > 4){
            stat = 1
            floor +=1
        } 
    }
}

