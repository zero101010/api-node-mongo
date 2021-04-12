let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server')
let should = chai.should();
chai.use(chaiHttp);

describe('Simple tests', () => {
    it('it should GET address', (done) => {
      chai.request(server)
          .get('/clients?address=quebec&page=4')
          .set({"x-access-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE4MTk0MzIzfQ.787WuSCdeaOHgvydzL7UYQs64gEEtcAQu2u5uSTFMYc"})
          .end((err, res) => {
                res.should.have.status(200);
                done();
          });
    });
    it('Login', (done) => {
        chai.request(server)
            .post('/login')
            .send({"user":"igor","password":"12345678"})
            .end((err, res) => {
                  res.should.have.status(200);
                  done();
            });
      });
})


