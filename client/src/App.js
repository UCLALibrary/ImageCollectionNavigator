import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar.js';
import Jumbotron from './Jumbotron.js';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';
import {Button, Container, Row, Col} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Jumbotron/>

        <Container className="CardsContainer">
          <Row >
            <Col md='4' className= "Cards">
                <Card>
                  <CardImg top width="100%"
                            src="http://waterandpower.org/Historical_DWP_Photo_Collection_LA_Public_Library/UCLA_34.jpg"
                            alt="Card image cap" />
                </Card>
            </Col>
            <Col md='4' className= "Cards">
                <Card>
                  <CardImg top width="100%"
                            src="http://hauteliving.com/wp-content/uploads/2013/11/ucla-img.jpg"
                            alt="Card image cap" />
                </Card>
            </Col>
            <Col md='4' className= "Cards">
                <Card>
                  <CardImg top width="100%"
                            src="http://waterandpower.org/Historical_DWP_Photo_Collection_LA_Public_Library/UCLA_Opening_Day_1929.jpg"
                            alt="Card image cap" />
                </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
