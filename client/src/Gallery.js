import React, { Component } from 'react';
import {BrowseRouter as Router, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';
import {Button, Container, Row, Col} from 'reactstrap';

var imageTitles = [];
var imageURLs = [];

class Gallery extends Component {

  constructor(props) {
    super(props);
    this.state = {imgurls: []};

    var url = "http://172.30.15.25";
    var port = "3000";
    var route = "/api/imgs/";
    var request = url + ":" + port + route + this.props.location.search.slice(7);

    fetch(request)
    .then(results => {
      return results.json();
    }).then(data => {
    	imageTitles = data;
    	var len = imageTitles.length;
	  	for (var index = 0; index < len; index++){
	  		imageURLs.push(process.env.PUBLIC_URL + '/images/' + imageTitles[index]);
	  	}
	    console.log(imageURLs);
      console.log("hello");
    	this.setState({imgurls: imageURLs});
    })
    console.log(imageURLs);
    console.log(this.state.imgurls)
  }

  render(event) {
    console.log(this.state.imgurls);
    return (
      <div className= "gallery">
      	<h3>Gallery</h3>
      		<Row>
				{ this.state.imgurls.map(imageUrl =>
					<Col md='4' className= "Cards">
						<CardImg top width="100%"
							src={imageUrl}
							alt="Card image cap"
							key={imageUrl}/>
					</Col>
					)
				}
			</Row>
      </div>
    );
  }
}

export default Gallery;
