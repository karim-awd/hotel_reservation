// var router = require('../routes/user-routes');
// var assert = require('assert');

// describe('log-in function', function() {

//     it('Correct Mobile and correct Password', function() {
//       var result = router.post();
//       assert.equal(result, 2);
//     });
  
//     it('Correct Mobile and wrong Password', function() {
//       var result = increment(-10);
//       assert.equal(result, -9);
//     });
  
//     it('Worng Mobile and correct Password', function() {
//       assert.throws(function() {
//         increment("purple");
//       });
//     });
  
//   });

const chai= require( 'chai');
const chaiHttp = require('chai-http');
const app = require('../index');

chai.use(chaiHttp);
chai.should();

describe("Sign-up", () => {
    describe("POST /login", () => {
        // Test to get all students record
        it("should get all students record", (done) => {
             chai.request(app)
                 .post('/login')
                 .send({mobile: "01060305576", password: "12344"})
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     console.log(res.body)
                     done();
                  });
         });
    });
});
