// process.env.NODE_ENV = 'test';

const usersHelper = require('./helpers/usersHelper');
const defaultUsers = require('../../store/store');
const chai = require('chai');
const should = chai.should();

describe('Default users', function(){


    it('users /GET', function() {
          const response = usersHelper.getAllUsers();

          console.log(response.body);
          response.should.have.status(200);
          response.body.list.should.be.a('array');
          response.body.list.length.should.be.eql(3);
          done();
    });


        it('test 1', function () {
            console.log("test 1");
        });


});
