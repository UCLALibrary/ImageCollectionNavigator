import React, { Component } from 'react';
import {BrowseRouter as Router, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';
import {Button, Container, Row, Col} from 'reactstrap';

var imageTitles = [];
var new_tags_str = "";

var url = "http://172.30.15.25";
var port = "3000";

var imgs_route = "/api/imgs/";
var tags_route = "/api/tags/";

class Gallery extends Component {

  constructor(props) {
    super(props);
    this.state = {imgurls: []};
    var tags = this.props.location.search.slice(7).split('-');
    
    console.log(this.props.location.search.slice(7));
    console.log(tags);

    var imageURLs = [];

    for (var ind= 0; ind < tags.length; ind++) {
      var request = url + ":" + port + imgs_route + tags[ind];
      // console.log(request);
      fetch(request)
        .then(results => {
          return results.json();
        }).then(data => {
          imageTitles = data;
          var len = imageTitles.length;
          for (var index = 0; index < len; index++) {
            var url = process.env.PUBLIC_URL + '/images/' + imageTitles[index]
            if (!imageURLs.includes(url))
              imageURLs.push(url);
              console.log(imageURLs);
          }
          console.log(imageURLs);
          this.setState({imgurls: imageURLs});
        })
    }
  }

  getAllTags(img) {
    this.state = {new_tags: []};
    console.log(img);
    var img_name = img.split('/')[2];
    var request = url + ":" + port + tags_route + img_name;

    fetch(request)
    .then(results => {
      return results.json();
    }).then(data => {
      new_tags_str = data.join('-');
      console.log(new_tags_str);

    })

  }

  render(event) {
    console.log(this.state.imgurls);
    return (
      <div className= "gallery">
      	<h3>Gallery</h3>
      		<Row>
				{ this.state.imgurls.map(imageUrl =>
					<Col md='4' className= "Cards">
						<Link to={{
              pathname: '/Gallery',
              search: '?query=' + {new_tags_str}}}>
                <CardImg width="100%"
    							src={imageUrl}
    							alt="Card image cap"
    							key={imageUrl}
                  onClick={(e) => this.getAllTags(imageUrl, e)}
                />
            </Link>
					</Col>
					)
				}
			</Row>
      </div>
    );
  }
}

export default Gallery;
