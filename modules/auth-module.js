const { generalApis, permissions } = require('../utils/constants')
const passport = require('passport')

exports.authMiddleware = (req, res, next) => {
    if (!req.user) return res.status(401).send("you are unauthorized!")
    const { role } = req.user
    let userPermissions = []
    role.forEach(userRole => {
        userPermissions.push(...permissions[userRole])
    })
    if(userPermissions.includes(req.url)) return next()
    res.status(401).send("you are unauthorized to access this api")
}