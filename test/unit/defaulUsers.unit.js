const usersObj = require('../../store/store');
const assert = require('chai').assert;


describe('Default users', function(){

    it('assert usersObj.list is an array', function(){
     assert.typeOf(usersObj.list, 'array');
     assert.equal(usersObj.list.length, 3, 'There are not 3 default user');
    });

    it('assert usersObj.list length is 3  ', function(){
     assert.equal(usersObj.list.length, 3, 'There are not 3 default user');
    });

});
