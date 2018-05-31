import React, { Component } from 'react';
import {BrowseRouter as Router, Route, Link} from 'react-router-dom';
import logo from './logo.svg';

import './App.css';
import NavBar from './NavBar.js';
import Jumbotron from './Jumbotron.js';
import Gallery from './Gallery.js';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';
import {Button, Container, Row, Col} from 'reactstrap';

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Jumbotron/>

        <Container className="CardsContainer">
          <Row>
            <Col md='4' className= "Cards">
              <Link to='/Gallery'>
                <Card>
                  <CardImg top width="100%"
                            src="http://waterandpower.org/Historical_DWP_Photo_Collection_LA_Public_Library/UCLA_34.jpg"
                            alt="Card image cap" />
                </Card>
              </Link>
            </Col>

            <Col md='4' className= "Cards">
              <Link to='/Gallery'>
                <Card>
                  <CardImg top width="100%"
                            src="http://hauteliving.com/wp-content/uploads/2013/11/ucla-img.jpg"
                            alt="Card image cap" />
                </Card>
              </Link>
            </Col>

            <Col md='4' className= "Cards">
              <Link to='/Gallery'>
                <Card>
                  <CardImg top width="100%"
                            src="http://waterandpower.org/Historical_DWP_Photo_Collection_LA_Public_Library/UCLA_Opening_Day_1929.jpg"
                            alt="Card image cap" />
                </Card>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomePage;
