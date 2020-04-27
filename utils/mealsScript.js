const mealsModel = require('../models/meals')

exports.insertRooms = () => {
    for (let i = 0; i < 10; i++) {
        let roomNumber = `K-${i + 1}`
        let amount = (i%2)+1
        let meal = (i%3)? "Beef": "Chicken"
        let user = `User ${i+1}`
        let status = "reserved"
        new mealsModel({ roomNumber,amount , meal, user, status }).save().then(room => console.log(i, room._id)).catch(console.log)
    }
}

