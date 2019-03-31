const usersObj = require('../../store/store');
const itParam = require('mocha-param');
const assert = require('chai').assert;


describe('Default users', function(){

    it('assert usersObj.list is an array', function(){
     assert.typeOf(usersObj.list, 'array');
    });

    it('assert usersObj.list length is 3', function(){
     assert.equal(usersObj.list.length, 3, 'There are not 3 default user');
    });

    describe('Assert all default users in storage', function () {
      const params = [
                      {"_id":1, "name":"John Doe",        "role":"admin",       "email":"john@app.io"},
                      {"_id":2, "name":"Jaskaran Nixon",  "role":"user",        "email":"jaskaran@app.io"},
                      {"_id":3, "name":"Tyler Pitt",      "role":"accountant",  "email":"tyler@app.io"}
                    ];
      itParam(`assert current user`, params, async function (param) {
        const paramIndex = param._id-1;
        assert.equal(usersObj.list[paramIndex].name, param.name);
        assert.equal(usersObj.list[paramIndex].role, param.role);
        assert.equal(usersObj.list[paramIndex].email, param.email);
      });
    });
});
