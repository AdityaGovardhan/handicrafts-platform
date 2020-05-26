import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ItemTileCard = ({ name, description, url }) => (

  <Card style={{ width: '18rem' }}>
    <Card.Img style={{ width: '18rem', height: '7rem' }} variant="top" src={process.env.PUBLIC_URL + url} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>

    </Card.Body>
  </Card>
);

ItemTileCard.propTypes = {
  name: PropTypes.instanceOf(Object).isRequired,
  description: PropTypes.instanceOf(Object).isRequired,
  url: PropTypes.instanceOf(Object).isRequired,
};

export default ItemTileCard;
