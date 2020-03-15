const router = require('express').Router()
const { authMiddleware } = require('../modules/auth-module')
const passport = require('passport')
const roomModel = require('../models/rooms')

router.post('/check-in', passport.authenticate('jwt', { session: false }), authMiddleware, async (req, res) => {
    try {
        const { room } = req.body
        roomModel.findOne({ _id: room }).then(room => {
            if (!room) return res.status(404).send('Room not Found')
            if (room.reserved) return status(400).send("Room is reserved")
            roomModel.updateOne({ _id: room }, { reserved: true }).then(({ nModified }) => {
                return nModified > 0 ? res.status(200).send("Reservation Done!") : res.sendStatus(500)
            })
        })
    } catch ({ message }) {
        res.status(500).send(message)
    }
})

router.post('/check-out', passport.authenticate('jwt', { session: false }), authMiddleware, async (req, res) => {
    try {
        const { room } = req.body
        roomModel.findOne({ _id: room }).then(room => {
            if (!room) return res.status(404).send('Room not Found')
            if (!room.reserved) return status(400).send("Room is available")
            roomModel.updateOne({ _id: room }, { reserved: false }).then(({ nModified }) => {
                return nModified > 0 ? res.status(200).send("Room is now avaiable!") : res.sendStatus(500)
            })
        })
    } catch ({ message }) {
        res.status(500).send(message)
    }
})

module.exports = router