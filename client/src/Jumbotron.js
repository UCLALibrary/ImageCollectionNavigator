import React, {Component} from 'react';
import {BrowseRouter as Router, Route, Link} from 'react-router-dom';
import { Jumbotron, Button } from 'reactstrap';
import SearchBox from './SearchBox.js';
import './Jumbotron.css';

// const Example = (props) => {
class Jumbo1 extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});

  }

  handleSubmit(event) {
    var url = "http://172.31.93.116";
    var port = "3000";

    var route2 = "/api/imgs/";

    var request2 = url + ":" + port + route2 + this.state.value;
    // alert('request url is: ' + request2);

    fetch(request2)
    .then(results => {
      return results.json();
    }).then(data => {
      let results = data;
      //alert('results are: ' + results);
      console.log(results);
    })
    // alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render () {
    return (
      <div>
        <Jumbotron className="Jumbotron">
          <h1 className="header">Explore our journey</h1>
          <p className="content">
              In spirit of UCLAs centennial campaign, this visualization
              takes you through our 100 year history.
              The interactive display finds and groups together related
              images powered by machine learning algorithms.</p>
          <hr className="subcontent" />
          <p className="buton">

          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text"
                value={this.state.value}
                onChange={this.handleChange} />
            </label>
              <input type="submit" value="Submit" />
          </form>
          </p>
        </Jumbotron>
      </div>
    );
  }
};

export default Jumbo1;