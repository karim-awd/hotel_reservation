const express = require('express')
const authRoutes = require('./routes/auth-routes')
const userRoutes = require('./routes/user-routes')
const mongoose = require('mongoose')
const { mongodbString } = require('./utils/constants')
const bodyParser = require('body-parser')
const passport = require('passport')
const strategy = require('./utils/passport-setup')

const app = express()

mongoose.connect(mongodbString, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('mongodb connected'))

app.use(bodyParser.json())
app.use(passport.initialize())
app.use(bodyParser.urlencoded({ extended: true }))
passport.use(strategy) // JWT strategy starts here! 
app.use(authRoutes)
app.use(userRoutes)

app.listen(3000, () => console.log('listening  on port 3000'))