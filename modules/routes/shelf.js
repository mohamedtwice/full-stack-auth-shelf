var express = require( 'express' );
var router = express.Router();
var bodyParser = require( 'body-parser' );
var user = require( '../user' );
var path = require('path');
var mongoose = require( 'mongoose' );

router.use( bodyParser.urlencoded( { extended: true } ) );
router.use( bodyParser.json() );

//rent Schema
var shelfSchema = new mongoose.Schema({
  name: String,
  itemName: String,
  description: String,
  imgUrl: String
}); //end Schema

var shelfModel = mongoose.model('shelfModel' , shelfSchema);


router.post('/', function(req, res){
  // console.log(res);
  res.send('heres your shit');

  var itemToAdd = {
    name: req.body.name,
    itemName: req.body.itemName,
    description: req.body.description,
    imgUrl: req.body.imgUrl
  };

  var NewItem = shelfModel(itemToAdd);
  NewItem.save();
console.log(NewItem);
});

router.get('/', function(req, res){
  console.log('get hit');
  shelfModel.find().then(function(data){
      console.log(data);
      res.send(data);
  }); //end model
}); //end get

module.exports = router;
