const request = require('./apiTestHelper.js').request;

const getAllUsers = () => request
.get('/users/')
.catch(err => err.response);

const user = {"user":"Akram"};

module.exports = {
  getAllUsers,
  user
};
