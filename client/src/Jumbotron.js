import React, {Component} from 'react';
import {BrowseRouter as Router, Route, Link} from 'react-router-dom';
import { Jumbotron, Button } from 'reactstrap';
import SearchBox from './SearchBox.js';
import './Jumbotron.css';

class Jumbo extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
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
          <form>
            <label>
              Name:
              <input type="text"
                value={this.state.value}
                onChange={this.handleChange} />
            </label>
            <Link to={{
              pathname: '/Gallery',
              search: '?query=' + this.state.value
            }}>
              <input type="submit" value="Submit"/>
            </Link>
          </form>
        </Jumbotron>
      </div>
    );
  }
};

export default Jumbo;
