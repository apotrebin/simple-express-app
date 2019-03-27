var express = require('express');
var router = express.Router();

const usersObj = require('../store/store');
// import {usersObj} from "../store/store";

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(usersObj);
  res.json(usersObj);
});

module.exports = router;
