import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import SearchBox from './SearchBox.js';
import './Jumbotron.css';

const Example = (props) => {
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
          <SearchBox/>
          <Button color="primary">Search</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Example;
