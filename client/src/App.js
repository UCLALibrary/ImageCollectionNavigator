import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar.js';
import Jumbotron from './Jumbotron.js';
import Card from './Card.js';
import {Button, Container, Row, Col} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Jumbotron/>

        <Container className="CardsContainer">
          <Row >
            <Col md='4' className= "Cards"> <Card/> </Col>
            <Col md='4' className= "Cards"> <Card/> </Col>
            <Col md='4' className= "Cards"> <Card/> </Col>
          </Row>
        </Container>

        
        <Container>
          <Row className="footer">
            <Col lg ='11'> </Col>
            <Col lg='1'className="ViewIcon"> <img src={logo} className="View-Changer"/> </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
