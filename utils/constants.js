exports.mongodbString = 'mongodb+srv://karim:ENGKMNO4@cluster0-maqxb.mongodb.net/test?retryWrites=true&w=majority'

exports.roles = ["USER", "STAFF", "ADMIN"]

exports.passportSecret = "SECRET!@#"

exports.generalApis = ['/login', '/signup']

exports.permissions = {
    USER: ['/available-rooms', '/all-rooms' , '/all-orders', '/reserve-table', '/avail-table', '/reserve-meeting', '/end-meeting', '/all-meeting-rooms', '/all-reservations', '/modify-reservation-status'],
    STAFF: ['/reserve-room', '/check-out', '/all-rooms', '/all-orders',,'/all-meeting-rooms', '/all-reservations', '/modify-reservation-status'],
    ADMIN: ['/reserve-room', '/check-out']
}
