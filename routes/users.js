var express = require('express');
var router = express.Router();
const usersObj = require('../store/store');

/* USERS */
router.get('/', function(req, res, next) {
  res.json(usersObj);
});

router.post('/', function(req, res) {
  var username = req.body.username;
  var role = req.body.role;
  var email = req.body.email;

  let newUser = {
    "_id":usersObj.list.length+1,
    "username": username,
    "role":role,
    "email":email
  };
  usersObj.list.push(newUser);
  res.send(`${JSON.stringify(newUser)}`);
});

router.delete('/', function(req, res) {
  var _id = req.body._id;
  delete usersObj.list[_id-1];
  res.send(`User with id: ${_id} was deleted!}`);
});

router.get('/:id', function(req, res) {
  let indexOfUser = parseInt(req.params.id, 10)-1;
  let currentUser = usersObj.list[indexOfUser];
  console.log("length of array is: " + usersObj.list.length);
  console.log("Index is: " + indexOfUser + " end user is: " + currentUser);
  res.send(`${JSON.stringify(currentUser)}`);
});

router.put('/', function(req, res) {
  var _id = req.body._id;
  var username = req.body.username;
  var role = req.body.role;
  var email = req.body.email;
  delete usersObj.list[_id-1];

  let newUser = {
    "_id":usersObj.list.length+1,
    "username": username,
    "role":role,
    "email":email
  };
  usersObj.list.push(newUser);

  res.send(`User with id: ${_id} was updated!}`);
});

module.exports = router;
