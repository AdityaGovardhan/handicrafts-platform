import React from 'react';
import { Card, Button } from 'react-bootstrap';

export const ItemTileCard = (props) => (

  <Card style={{ width: '18rem' }}>
    <Card.Img style={{ width: '18rem', height: '7rem' }} variant="top" src={process.env.PUBLIC_URL + props.url} />
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Card.Text>
        {props.description}

      </Card.Text>
      <Button variant="primary">Go somewhere</Button>

    </Card.Body>
  </Card>
);
