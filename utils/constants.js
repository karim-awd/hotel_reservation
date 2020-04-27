exports.mongodbString = 'mongodb+srv://karim:ENGKMNO4@cluster0-maqxb.mongodb.net/test?retryWrites=true&w=majority'

exports.roles = ["USER", "STAFF", "ADMIN"]

exports.passportSecret = "SECRET!@#"

exports.generalApis = ['/login', '/signup']

exports.permissions = {
    USER: [],
    STAFF: ['/modify-order-status','/reserve-room', '/check-out', '/all-rooms', '/all-orders','/all-meeting-rooms', '/all-reservations', '/modify-reservation-status', '/reserve-meeting', '/end-meeting'],
    ADMIN: ['/modify-order-status','/reserve-room', '/check-out', '/all-rooms', '/all-orders','/all-meeting-rooms', '/all-reservations', '/modify-reservation-status', '/reserve-meeting', '/end-meeting']
}
