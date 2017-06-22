var express  = require('express');
var router = express.Router();
var path = require('path');

//base url hit
router.get('/', function(req, res){
  console.log('base url hit');
  res.sendFile(path.resolve('public/views/index.html'));
});


module.exports = router;
