import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './App.css';
import Gallery from './Gallery.js';
import HomePage from './HomePage.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/Gallery" component={Gallery} />
        </div>
      </Router>
    );
  }
}

/*
var url = "http://172.31.93.116";
var port = "3000";
//CHANGE THESE

var results = [];
function getTags(img){
  var route1 = "/api/tags/";
  var request1 = url + ":" + port + route1 + img;

  fetch(request1)
  //fetch("https://randomuser.me/api/?results=500")
  .then(results => {
    return results.json();
  }).then(data => {
    results = data;
    //console.log(results);
  })
  return results;
}

function getImgs(tag){
  var route2 = "/api/imgs/";
  var request2 = url + ":" + port + route2 + tag;

  var results;
  fetch(request2)
  //fetch("https://randomuser.me/api/?results=500")
  .then(results => {
    return results.json();
  }).then(data => {
    let results = data;
    //console.log(results);
  })
  return results;
}

var testtags = getTags("uclalsc_uars100_780_021.jpg");
var testimgs = getImgs("medicine chest");
console.log(testtags);

function getAllImgs(img){

}*/

export default App;
