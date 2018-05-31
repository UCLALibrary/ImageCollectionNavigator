var express = require('express');
var router = express.Router();
//var sleep = require('sleep');

var mongodb = require('mongodb');
var fs = require('fs');

var query = require('./query.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//NOT USING THIS METHOD, CURRENTLY
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

router.get('/api/hello', (req, res) => {
  res.send({ express: query.testing("test string") });
});

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

router.get('/api/tags/:url', (req, res) => {
	var img = req.params["url"];
	console.log("the url param we got was " + img);
	//var obj = query.getTags(url);
    var tags = [];
	MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("imgs");
      var query = {"url" : img};
      //query for tags given an img
      dbo.collection("imgs").find(query).toArray(function(err, result) {
        if (err) throw err;
        if (result == [])
        	res.send([]);
        else
        	res.send(result[0]["tags"]);
      });
      db.close();
    });
});

router.get('/api/imgs/:tag', (req, res) => {
	var tag = req.params["tag"];
	console.log("the tag param we got was " + tag);

	MongoClient.connect(url, function(err, db) {
	    if (err) throw err;
	    var dbo = db.db("imgs");
	    var query = {};
	    //query for imgs given a tag
	    var urls = [];
	    dbo.collection("tags").find(query).toArray(function(err, result) {
	      if (err) throw err;
          if (tag in result[0])
	     	res.send(result[0][tag]);
	      else
	      	res.send([]);
	      //urls = result[0]["library"];
	      //console.log(urls);
	    });
	    db.close();
	  });

});

module.exports = router;