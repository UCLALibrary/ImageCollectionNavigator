import React, { Component } from 'react';
import {BrowseRouter as Router, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';
import {Button, Container, Row, Col} from 'reactstrap';
import './Gallery.css';

var imageTitles = [];
var imageURLs = [];
var all_tags = [];

var url = "http://172.30.14.28";
var port = "3000";
var tags_route = "/api/tags/";
var imgs_route = "/api/imgs/";

class Gallery extends Component {

  constructor(props) {
    super(props);
    this.state = {imgurls: []};

    var request = url + ":" + port + imgs_route + this.props.location.search.slice(7);

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
    //console.log(imageURLs);
    //console.log(this.state.imgurls)

  }


     getAllTags(img) {
      //this.state = {new_tags: []};
      console.log(img);
      var img_name = img.split('/')[2];
      var request = url + ":" + port + tags_route + img_name;
      
      fetch(request)
      .then(results => {
        return results.json();
      }).then(data => {
        //new_tags_str = data.join('-');
        //console.log(new_tags_str);
        console.log(data);

        for (var ind = 0; ind < data.length; ind++){
          var tag = data[ind];
          var request2 = url + ':' + port + imgs_route + tag;

          fetch(request2)
          .then(results => {
            return results.json();
          }).then(data2 => {
            //console.log(data2);
            var url_list = this.state.imgurls;
            for (var ind2 = 0; ind2 < data2.length; ind2++){
              var one_url = process.env.PUBLIC_URL + '/images/' + data2[ind2];
              if (!url_list.includes(one_url))
                url_list.unshift(one_url);
              this.setState({imgurls: url_list});
            }
          })

        }

      })

    }

  render(event) {
    console.log(this.state.imgurls);
    return (
      <div className= "gallery">
        <div className="top">
          <h1>Image Collection Navigation</h1>
          <p>Click on an image to find related images</p>
        </div>
      		<Row>
    				{ this.state.imgurls.map(imageUrl =>
    					<Col md='4' className= "Cards">
    						<CardImg width="100%"
    							src={imageUrl}
    							alt="Card image cap"
    							key={imageUrl}
                  onClick={(e) => this.getAllTags(imageUrl, e)}/>
    					</Col>
    					)
    				}
    			</Row>
      </div>
    );
  }
}

export default Gallery;
