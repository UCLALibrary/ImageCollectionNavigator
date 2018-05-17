import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%"
            src="https://static1.squarespace.com/static/548748b1e4b083fc03ebf70e/t/57853ddf8419c25970a565f5/1468350483972/"
            alt="Card image cap" />
      </Card>
    </div>
  );
};

export default Example;
