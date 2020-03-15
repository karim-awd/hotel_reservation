
const passportJWT = require("passport-jwt")
const passport = require('passport')
const userModel = require('../models/user')
const {passportSecret} = require('./constants')

var ExtractJwt = passportJWT.ExtractJwt
var JwtStrategy = passportJWT.Strategy

var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
jwtOptions.secretOrKey = passportSecret

var strategy = new JwtStrategy(jwtOptions, async function (jwt_payload, next) {

    const user = await userModel.findOne({ mobile: jwt_payload.id.mobile })
    if (user) {
        next(null, user)
    } else {
        next(null, false)
    }
})


passport.serializeUser((user, done) => done(null, user.mobile))

passport.deserializeUser(async (mobile, done) => {
    try {
        let user = await userModel.findOne({ mobile })
        user ? done(null, user.name) : done(null, null)
    } catch (err) {
        done(err, null)
    }
})


module.exports = strategy 