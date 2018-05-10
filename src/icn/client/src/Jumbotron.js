import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import SearchBox from './SearchBox.js';
import './Jumbotron.css';

const Example = (props) => {
  return (
    <div>
      <Jumbotron className="Jumbotron">
        <h1 className="header">Welcome to UCLA's Image Navigation Portal </h1>
        <p className="content">Explore 100 years of history and heritage through the eyes of images.</p>
        <hr className="subcontent" />
        <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
        <p className="buton">
          <Button color="primary">Explore Now</Button>
          <SearchBox/>
        </p>
        
      </Jumbotron>
    </div>
  );
};

export default Example;