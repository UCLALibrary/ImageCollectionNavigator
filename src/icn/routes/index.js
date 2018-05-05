var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var fs = require('fs');
var Promise = require("bluebird");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/images', function(req, res){
	//console.log("ROUTER.GET");
	var MongoClient = mongodb.MongoClient;

	var url = 'mongodb://localhost:27017/icn_db';

	MongoClient.connect(url, function(err, db){
		//console.log("MONGO CONNECT");
		if (err)
			console.log("Unable to connect to the server", err);
		else
			console.log("Connection Established");

		var collection = db.collection('imgs');

		collection.find().toArray(function(err, result){ //the {} in find is empty so we're querying for all
			console.log("RESULT IS " + JSON.stringify(result, null, 2));
			if (err)
				res.send(err);
			else if (result.length){
				res.render('images', {
					"images": result
				});
			}
			else 
				res.send('No documents found');

			db.close();
		});
	});
});



module.exports = router;