# ImageCollectionNavigator
This is the main repo for the BuildUCLA web team's project to build an experimental interface for the UCLA University Archives photos, in time for the 2018-2019 UCLA Centennial Campaign.


------------------
To start the node server:

$ cd ImageCollectionNavigator/src/icn

$ npm start


Note: you will have to change the url and port variables in ImageCollectionNavigator/client/src/Gallery.js to wherever you're hosting the server (your ip address, probably, and whatever port the node server is running on) 

------------------
To start MongoDB:

$ cd ImageCollectionNavigator/src/icn

$ mongod --dbpath <Path to ImageCollectionNavigator/src/icn/data>

------------------
To push data into Mongo:

$ cd ImageCollectionNavigator/src/icn/routes

$ node addimgs

------------------
To start React:

$ cd ImageCollectionNavigator/client

$ npm start