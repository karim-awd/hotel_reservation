exports.mongodbString = 'mongodb+srv://karim:ENGKMNO4@cluster0-maqxb.mongodb.net/test?retryWrites=true&w=majority'

exports.roles = ["USER", "STAFF", "ADMIN"]

exports.passportSecret = "SECRET!@#"

exports.generalApis = ['/login', '/signup']

exports.permissions = {
    USER: ['/all-user-reservations', '/reserve-room', '/check-out', '/all-rooms', '/all-orders'],
    STAFF: ['/all-user-reservations','/modify-order-status', '/available-rooms', '/reserve-room', '/check-out', '/all-rooms', '/all-orders','/all-meeting-rooms', '/all-reservations', '/modify-reservation-status', '/reserve-meeting', '/end-meeting'],
    ADMIN: ['/all-user-reservations', '/modify-order-status', '/available-rooms', '/reserve-room', '/check-out', '/all-rooms', '/all-orders','/all-meeting-rooms', '/all-reservations', '/modify-reservation-status', '/reserve-meeting', '/end-meeting']
}
