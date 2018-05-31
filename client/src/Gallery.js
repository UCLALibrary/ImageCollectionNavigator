import React, { Component } from 'react';
import {BrowseRouter as Router, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';
import {Button, Container, Row, Col} from 'reactstrap';

const imageUrls = [
	"https://www.koreaninamerica.com/wp-content/uploads/2016/10/header-blog-UCLA-tour-690x460.jpg",
	"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/The_University_of_California_UCLA.svg/1200px-The_University_of_California_UCLA.svg.png",
	"https://assets3.thrillist.com/v1/image/1296396/size/tmg-article_default_mobile.jpg",
	"http://waterandpower.org/Historical_DWP_Photo_Collection_LA_Public_Library/UCLA_34.jpg",
	"http://hauteliving.com/wp-content/uploads/2013/11/ucla-img.jpg",
	"http://waterandpower.org/Historical_DWP_Photo_Collection_LA_Public_Library/UCLA_Opening_Day_1929.jpg"
];

class Gallery extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  render(event) {

    var url = "http://172.31.93.116";
    var port = "3000";
    var route = "/api/imgs/";
    var request = url + ":" + port + route + this.props.location.search.slice(7);

    fetch(request)
    .then(results => {
      return results.json();
    }).then(data => {
      let results = data;
      console.log(results);
      this.setState({value: results});
      alert(results);
    })

    return (
      <div className= "gallery">
      	<h3>Gallery</h3>
      		<Row>
				{ this.event.state.map(imageUrl =>
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
