var mongodb = require('mongodb');
var fs = require('fs');
var Promise = require("bluebird");

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
		
	        // Get the imgs collection
	        var collection = db.db("imgs").collection('imgs');
	 		
	        var imgs_tags = []; 
	        //this is a per-image list that contains url and all the tags for that image
	        //we'll use it to get all the tags corresponding to a particular image
	        //it'll look like this:
	        /*[
	        	{
	        		"url" : "",
	        		"tags" : ["",""]
	        	},
	        	{
	        		"url" : "",
	        		"tags" : ["",...,""]
	        	}
	        ]*/

	        // Get the imgs collection
	        var collection2 = db.db("imgs").collection('tags');

	        var tags_imgs = {};
	        //this is a per-tag list that contains all the images corresponding to the tag
	        //we'll use it to get all the images corresponding to a particular tag
	        //it'll look like this
	        /*{
				"tag" : ["url",...,"url"],
				"tag" : ["url",...,"url"]
			}*/

	        //read in the file and store the data into imgs_tags
			fs.readFile('result.csv', 'utf8', function (err,data) {
				if (err) {
				  return console.log(err);
				}
				console.log("file was read");
				var lines = data.toString().split("\n");
				console.log("found  " + lines.length + " images represented in the input data");

				for (var k = 0; k < lines.length; k++){
					if (lines[k] == "\r" || lines[k] == "\n" || lines[k] == "") //skip empty lines
						continue;

					var words = lines[k].toString().split(",");

					//get the url (first element)
					var url = words[0];
					var tags = [];

					//get the tags
					for (var j = 1; j < words.length; j++){
						//for imgs_tags:
						var tag = words[j].replace('\r','') 
						tags.push(tag);
						//for tags_imgs:
						if (tags_imgs[tag] == null)
							tags_imgs[tag] = [url];
						else
							tags_imgs[tag].push(url);
					}


					var final_obj = {
						"url" : url,
						"tags" : tags
					}


					//console.log(JSON.stringify(final_obj, null, 2));

					//STRUCTURE TO ACCUMULATE ALL THE DATA
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

				//CHECK TAGS_IMGS
				//TODO: RUN THIS AND SEE IF IT WORKS
				console.log("beginning of tags_imgs");
				var count = Object.keys(tags_imgs).length;
				console.log("length is " + count);
				console.log(tags_imgs);
				console.log("end of tags_imgs");
				//push contents of tags_imgs to the DB
				collection2.insert(tags_imgs, function(err, result){
					if (err) {
			            console.log("failed to push tags_imgs: " + err);
						console.log(tags_imgs);
			        } else{
			        	console.log("pushed tags_imgs object");
			        }
				});

				//first delete contents of the imgs collection
				collection.remove({});
				//now push contents of imgs_tags to the DB
				for (i in imgs_tags){
					img_json = imgs_tags[i];
					//console.log(JSON.stringify(img_json, null, 2));
					collection.insert(img_json, function(err, result){
						if (err) {
				            console.log("OH NO IT WAS CLOSED " + err);
				        } else{
				        	console.log("pushed an imgs_tags element");
				        }
					});
				}

			}); 
			console.log("exited readfile");
		//}


		return 0;
		console.log("DB CLOSED!!!!!!!!!!!");
 		db.close();
      }
    });
}
main();