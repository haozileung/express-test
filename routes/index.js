var express = require('express');
var router = express.Router();
var request = require('request');
/* GET home page. */
router.get('/', function (req, res, next) {
  request({ url: 'http://localhost:8080/admin/user', json: true }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.render('index', { title: "test", content: body });
    }
  });

});

module.exports = router;