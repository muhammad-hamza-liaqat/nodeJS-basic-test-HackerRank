var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('<p>HTML Data</p>');
});



module.exports = router;