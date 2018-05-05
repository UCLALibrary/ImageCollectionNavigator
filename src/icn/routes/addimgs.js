var mongodb = require('mongodb');
var fs = require('fs');
var Promise = require("bluebird");

//router.get('/addimages', function(req, res){
 function main(){
    // Get a Mongo client to work with the Mongo server
    var MongoClient = mongodb.MongoClient;
 
    // Define where the MongoDB server is
    var url = "mongodb://localhost:27017/icn_db";
 
    // Connect to the server
    MongoClient.connect(url, function(err, db){
      if (err) {
        console.log("Unable to connect to the Server:", err);
      } else {
        console.log("Connected to Server");
 		
 		//console.time('tracked');
		//console.time('first');
		//function a (){
		
	        // Get the documents collection
	        var collection = db.db("imgs").collection('imgs');
	 		
	        //WRITE THE ALGORITHM HERE TO PARSE FILE AND ADD STUFF
	        var imgs_tags = []; 
	        //it'll look like this:
	        /*[
	        	{
	        		"url" : "",
	        		"tags" : ["",""]
	        	},
	        	{
	        		"url" : "",
	        		"tags" : ["",""]
	        	}
	        ]*/

	        //read in the file and store the data into imgs_tags
			fs.readFile('result.csv', 'utf8', function (err,data) {
				if (err) {
				  return console.log(err);
				}
				console.log("file was read");
				var lines = data.toString().split("\n");
				console.log("length of lines array is " + lines.length);

				for (var k = 0; k < lines.length; k++){
					if (lines[k] == "\r" || lines[k] == "\n" || lines[k] == "") //skip empty lines
						continue;

					var words = lines[k].toString().split(",");

					//get the url (first element)
					var url = words[0];
					var tags = [];

					//get the tags
					for (var j = 1; j < words.length; j++){
						tags.push(words[j].replace('\r',''));

					}

					var final_obj = {
						"url" : url,
						"tags" : tags
					}


					//console.log(JSON.stringify(final_obj, null, 2));

					//STRUCTURE TO ACCUMULATE ALL THE DATA, SO SKIP THIS
					imgs_tags.push(final_obj);

					//THE FOLLOWING IS COMMENTED BECAUSE INSTEAD OF PUSHING EACH ONE INTO THE DB ONCE WE GET IT
					//WE STORE INTO IMGS_TAGS TO PUSH LATER BECAUSE THIS WAS EXECUTING OUT OF ORDER 
					/*collection.insert(final_obj, function(err, result){
						if (err) {
				            console.log("OH NO IT WAS CLOSED " + err);
				        } else{
				        	console.log("pushed an object... I think???");
				        }
					});*/
				}
				console.log("end of loop");


				//CHECK IMGS_TAGS
				//console.log("beginning of imgs_tags");
				//console.log("length is " + imgs_tags.length);
				//console.log(JSON.stringify(imgs_tags, null, 2));
				//console.log("end of imgs_tags");

				//now push contents of imgs_tags to the DB
				for (i in imgs_tags){
					img_json = imgs_tags[i];
					console.log(JSON.stringify(img_json, null, 2));
					collection.insert(img_json, function(err, result){
						if (err) {
				            console.log("OH NO IT WAS CLOSED " + err);
				        } else{
				        	console.log("pushed an object... I think???");
				        }
					});
				}

				//Tried to query, but it doesnt give me what I want
				// var query_result = collection.find();
				// console.log("query result is:");
				// console.log(query_result);
				//printjson(query_result); //this throws a printjson undefined error
			}); 
			console.log("exited readfile");
		    //console.timeEnd('first');
		    //return Promise.resolve();
		//}


		/*console.log("starting a then b");
		a()
		    .then(function b (){
			})
		    .catch(Promise.TimeoutError, function(e) {
		        console.log('Something messed up yo', e);
		});	*/


		return 0;
		console.log("DB CLOSED!!!!!!!!!!!");
 		db.close();
	    //console.timeEnd('tracked');

		
      }
    });
}
main();
 //});