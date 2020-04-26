const router = require('express').Router()
const userModel = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { passportSecret } = require('../utils/constants')

router.post('/signup', (req, res) => {
    try {
        const user = req.body
        user.password = bcrypt.hashSync(user.password, 10)
        new userModel(user).save().then(user => res.sendStatus(200)).catch(({ message }) => res.status(400).send(message))
    } catch ({ message }) {
        res.status(500).send(message)
    }
})

router.post('/login', async (req, res) => {
    try {
        const { mobile, password } = req.body
        const user = await userModel.findOne({ mobile })
        if (!user) return res.status(404).send("User not found")
        if (bcrypt.compareSync(password, user.password)) {
            let token = jwt.sign({ id: { mobile: user.mobile } }, passportSecret)
            res.status(200).json({ name: user.name, token })
        } else {
            res.status(401).send("Wrong username or password")
        }
    } catch ({message}) {
        res.status(500).send(message)
    }
})

module.exports = router