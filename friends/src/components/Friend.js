import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const Friend = (props) => {
  return (
    <div>
      <Card body className='reactstrap-card'>
        <CardTitle className='title'>{props.name}</CardTitle>
        <CardText>{props.age}</CardText>
        <CardText>{props.email}</CardText>
        <Button>Say Hi</Button>
      </Card>
    </div>
  );
};

export default Friend;