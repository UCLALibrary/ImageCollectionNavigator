//THIS FILE IS NOT BEING USED. WE COPY AND PASTED THE CODE WITHIN THE FUNCTIONS HERE
//OVER TO THE ROUTES IN INDEX.JS. THE FUNCTIONS HERE ALSO DO NOT ACCOUNT FOR THE CASE
//WHERE A TAG OR IMG DOESNT EXIST WITHIN OUR DATA, BUT THE ROUTES IN INDEX DO

/* now this file's throwing me an error so I'll just comment it all out
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

//module.exports makes contents accessible by other files that require this file
module.exports = {
  testing: function (str) {
    return str;
  },

  getTags: (img) => {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("imgs");
      var query = {"url" : img};
      //query for tags given an img
      var tags = [];
      dbo.collection("imgs").find(query).toArray(function(err, result) {
        if (err) throw err;
        var tags = result[0]["tags"];
        console.log(tags);
        return "tags";
      });
      db.close();
    });
  },

  getImgs: function(tag) {
    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("imgs");
    var query = {};
    //query for imgs given a tag
    var urls = [];
    dbo.collection("tags").find(query).toArray(function(err, result) {
      if (err) throw err;
      //urls = result[0]["library"];
      //console.log(urls);
      return urls;
    });
    db.close();
  });
  }
};



function getTags(img) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("imgs");
    var query = {"url" : img};
    //query for tags given an img
    var tags = [];
    dbo.collection("imgs").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result)
      if (result == []) //the image is not in our collection
        return []
      tags = result[0]["tags"];
      console.log(tags);
      return tags;
    });
    db.close();
  });
}

function getImgs(tag){
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("imgs");
    var query = {};
    //query for imgs given a tag
    var urls = [];
    dbo.collection("tags").find(query).toArray(function(err, result) {
      if (err) throw err;
      urls = result[0]["library"];
      console.log(urls);
      return urls;
    });
    db.close();
  });
}

//to test the functions:
//getTags("uclalsc_uars100_780_021.jpg");
//getImgs("library");

getTags("fdsa");
//getImgs("library");
*/