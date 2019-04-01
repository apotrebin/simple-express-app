process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const server = require('../../app');
const should = chai.should();
const assert = require('chai').assert;
const defaultUsers = require('../../store/store');

describe('Default users', function(){

    it('users /GET', function(done){
      chai.request(server)
          .get('/users')
          .end((err, res) => {
              res.should.have.status(200);
              res.body.list.should.be.a('array');
              res.body.list.length.should.be.eql(3);
      done();
      });
    });

    it('add new user /POST', function(done){
      const newUser = {"_id": defaultUsers.list.length+1,
          "username": "Akram",
          "role":"admin",
          "email":"akram@email.com"};

      chai.request(server)
          .post('/users/')
          .send(newUser)
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.have.property("username");
              res.body.should.have.property("role");
              res.body.should.have.property("email");
              assert(defaultUsers.list.length, 4);
              done();
          });
    });

    it('delete user /DELETE', function(done){
      chai.request(server)
          .delete('/users/2')
          .end((err, res) => {
              res.should.have.status(200);
              // res.body.should.have.string("User with id: 2 was deleted!");
              done();
          });
    });
});
