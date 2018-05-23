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


export default App;
