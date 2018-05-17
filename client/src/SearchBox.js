import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import './SearchBox.css';

const Example = (props) => {
  return (
    <div className="SearchBox">
      <InputGroup>
        <Input placeholder="Enter tags here" />
       </InputGroup>
      <br />
    </div>
  );
};

export default Example;
