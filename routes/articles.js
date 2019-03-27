var express = require('express');
var router = express.Router();

/* GET atricles listing. */
router.get('/', function(req, res, next) {
  res.json({
    "total":1,
    "articles":[
      {
        "_id":1,
        "header":"Title 1",
        "dates":["2019/06/20"],
        "img":["../public/images/articles/1/title.jpg"]
    },
    {
      "_id":2,
      "header":"Title 2",
      "dates":["2018/06/01"],
      "img":["../public/images/articles/2/title.jpg"]
    }
  ]
      });
});

module.exports = router;
