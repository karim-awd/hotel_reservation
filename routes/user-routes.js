const router = require('express').Router()
const { authMiddleware } = require('../modules/auth-module')
const passport = require('passport')
const roomModel = require('../models/rooms')
const tableModel = require('../models/tables')
const meetingModel = require('../models/meetingRooms')

router.post('/check-in', passport.authenticate('jwt', { session: false }), authMiddleware, async (req, res) => {
    try {
        const { roomNumber } = req.body
        roomModel.findOne({ roomNumber: roomNumber }).then(room => {
            if (!room) return res.status(404).send('Room not Found')
            if (room.reserved) return status(400).send("Room is reserved")
            roomModel.updateOne({ roomNumber: roomNumber }, { reserved: true }).then(({ nModified }) => {
                return nModified > 0 ? res.status(200).send("Reservation Done!") : res.sendStatus(500)
            })
        })
    } catch ({ message }) {
        res.status(500).send(message)
    }
})

router.post('/check-out', passport.authenticate('jwt', { session: false }), authMiddleware, async (req, res) => {
    try {
        const { roomNumber } = req.body
        roomModel.findOne({ roomNumber: roomNumber }).then(room => {
            if (!room) return res.status(404).send('Room not Found')
            if (!room.reserved) return status(400).send("Room is available")
            roomModel.updateOne({ roomNumber: roomNumber }, { reserved: false }).then(({ nModified }) => {
                return nModified > 0 ? res.status(200).send("Room is now avaiable!") : res.sendStatus(500)
            })
        })
    } catch ({ message }) {
        res.status(500).send(message)
    }
})

router.post('/available-rooms', passport.authenticate('jwt', { session: false }), authMiddleware, async (req, res) => {
    try {
        roomModel.find({ reserved: false }, { _id: 0, __v: 0 }).then(rooms => {
            return res.status(200).json(rooms)
        })
    } catch ({ message }) {
        res.status(500).send(message)
    }
})

router.post('/reserve-table', passport.authenticate('jwt', { session: false }), authMiddleware, async (req, res) => {
    try {
        const { tableNumber } = req.body
        tableModel.findOne({ tableNumber: tableNumber }).then(table => {
            if (!table) return res.status(404).send('Table not Found')
            if (table.reserved) return status(400).send("Table is reserved")
            tableModel.updateOne({ tableNumber: tableNumber }, { reserved: true }).then(({ nModified }) => {
                return nModified > 0 ? res.status(200).send("Reservation Done!") : res.sendStatus(500)
            })
        })
    } catch ({ message }) {
        res.status(500).send(message)
    }
})

router.post('/avail-table', passport.authenticate('jwt', { session: false }), authMiddleware, async (req, res) => {
    try {
        const { tableNumber } = req.body
        tableModel.findOne({ tableNumber: tableNumber }).then(table => {
            if (!table) return res.status(404).send('Table not Found')
            if (!table.reserved) return status(400).send("Table is available")
            tableModel.updateOne({ tableNumber: tableNumber }, { reserved: false }).then(({ nModified }) => {
                return nModified > 0 ? res.status(200).send("Table is now avaiable!") : res.sendStatus(500)
            })
        })
    } catch ({ message }) {
        res.status(500).send(message)
    }
})



router.post('/available-tables', passport.authenticate('jwt', { session: false }), authMiddleware, async (req, res) => {
    try {
        tableModel.find({ reserved: false }, { _id: 0, __v: 0 }).then(tables => {
            return res.status(200).json(tables)
        })
    } catch ({ message }) {
        res.status(500).send(message)
    }
})

router.post('/reserve-meeting', passport.authenticate('jwt', { session: false }), authMiddleware, async (req, res) => {
    try {
        let { roomNumber, event } = req.body
        meetingModel.findOne({ roomNumber: roomNumber }).then(room => {
            if (!room) return res.status(404).send('Meeting room not Found')
            if (room.reserved) return status(400).send("Meeting room is reserved")
            if (!event) event = room.event
            meetingModel.updateOne({ roomNumber: roomNumber }, { event: event, reserved: true }).then(({ nModified }) => {
                return nModified > 0 ? res.status(200).send("Reservation Done!") : res.sendStatus(500)
            })
        })
    } catch ({ message }) {
        res.status(500).send(message)
    }
})

router.post('/end-meeting', passport.authenticate('jwt', { session: false }), authMiddleware, async (req, res) => {
    try {
        const { roomNumber } = req.body
        meetingModel.findOne({ roomNumber: roomNumber }).then(room => {
            if (!room) return res.status(404).send('Meeting Room not Found')
            if (!room.reserved) return status(400).send("Meeting Room is available")
            meetingModel.updateOne({ roomNumber: roomNumber }, { event: "",reserved: false }).then(({ nModified }) => {
                return nModified > 0 ? res.status(200).send("Meeting Room is now avaiable!") : res.sendStatus(500)
            })
        })
    } catch ({ message }) {
        res.status(500).send(message)
    }
})

module.exports = router