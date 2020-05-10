//During the test the env variable is set to test
process.env.NODE_ENV = 'test'

let mongoose = require("mongoose")
let User = require('../models/user')

//Require the dev-dependencies
let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../index')
let should = chai.should()
let token


chai.use(chaiHttp)

describe('Users', () => {
    beforeEach((done) => {
        User.remove({}, (err) => { 
           done()           
        })        
    })

    describe('/POST login', () => {
        it('User without signing up So log in should Fail', () => {
            let user = {
              mobile: "01060305576",
              password: "12344"
            }
            chai.request(server)
              .post('/login')
              .send(user)
              .then((res, body) => {
                  res.should.have.status(404)
              })
        })
    })

    describe('/POST signup', () => {
        it('Sign Up for user', () => {
            let user = {
                "name": "STAFF3",
                "password": "12344",
                "role": "STAFF",
                "mobile": "01060305576"
            }
            chai.request(server)
              .post('/signup')
              .send(user)
              .then((res, body) => {
                  res.should.have.status(200)
              })
        })
  
    })

})

/*
  * Test the /POST route
  */
 describe('/POST login', () => {
    it('User Not Found So log in should Fail', () => {
        let user = {
          mobile: "11111111111",
          password: "123444"
        }
        chai.request(server)
          .post('/login')
          .send(user)
          .then((res, body) => {
              res.should.have.status(404)
          })
    })

})


describe('/POST login', () => {
    it('User with wrong password So log in should Fail', () => {
        let user = {
          mobile: "01060305576",
          password: "123444"
        }
        chai.request(server)
          .post('/login')
          .send(user)
          .then((res, body) => {
              res.should.have.status(401)
          })
    })
})

describe('/POST login', () => {
    it('signed up user with correct info So log in should succeed', async () => {
        let user = {
          mobile: "01060305576",
          password: "12344"
        }
        await chai.request(server)
          .post('/login')
          .send(user)
          .then((res, body) => {
              res.should.have.status(200)
              token = 'Bearer ' + res.body.token
          })
    })
})

describe('/POST signup', () => {
    it('Sign Up for existing user should fail', () => {
        let user = {
            "name": "STAFF3",
            "password": "12344",
            "role": "STAFF",
            "mobile": "01060305576"
        }
        chai.request(server)
          .post('/signup')
          .send(user)
          .then((res, body) => {
              res.should.have.status(400)
          })
    })

})

describe('/POST all-rooms', () => {
    it('getting all hotel rooms', async () => {
        await chai.request(server)
          .post('/all-rooms')
          .set('Authorization', token)
          .send()
          .then((res, body) => {
              res.should.have.status(200)
          })
    })
})

describe('/POST available-rooms', () => {
    it('getting available rooms only', async () => {
        await chai.request(server)
          .post('/available-rooms')
          .set('Authorization', token)
          .send()
          .then((res, body) => {
              res.should.have.status(200)
          })
    })
})

describe('/POST all-orders', () => {
    it('getting orders', async () => {
        await chai.request(server)
          .post('/all-orders')
          .set('Authorization', token)
          .send()
          .then((res, body) => {
              res.should.have.status(200)
          })
    })
})

describe('/POST all-meeting-rooms', () => {
    it('getting all hotel meeting rooms', async () => {
        await chai.request(server)
          .post('/all-meeting-rooms')
          .set('Authorization', token)
          .send()
          .then((res, body) => {
              res.should.have.status(200)
          })
    })
})

describe('/POST all-reservations', () => {
    it('getting all hotel reservations', async () => {
        await chai.request(server)
          .post('/all-reservations')
          .set('Authorization', token)
          .send()
          .then((res, body) => {
              res.should.have.status(200)
          })
    })
})