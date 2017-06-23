var express = require( 'express' );
var router = express.Router();
var bodyParser = require( 'body-parser' );
var user = require( '../user' );
var path = require('path');

router.use( bodyParser.urlencoded( { extended: true } ) );
router.use( bodyParser.json() );

router.post('/', function(req, res){
  console.log( req.body);
  res.send('heres your shit');
});

module.exports = router;
