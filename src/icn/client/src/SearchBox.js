import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import './SearchBox.css';

const Example = (props) => {
  return (
    <div className="SearchBox">
      <InputGroup>
        <Input placeholder="Search Images" />
        <InputGroupAddon addonType="prepend">Search</InputGroupAddon>
      </InputGroup>
      <br />
    </div>
  );
};

export default Example;