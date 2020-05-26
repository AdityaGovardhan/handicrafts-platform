import React from 'react';
import { Container } from 'react-bootstrap';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import PropTypes from 'prop-types';
import ItemTileCard from './ItemTileCard';

const ItemGrid = ({ Items }) => ( // linting issue

  <Container>
    <GridList cellHeight={300} cols={3}>

      { Items.map((Item) => (
        <GridListTile>
          <ItemTileCard
            key={Item.id}
            name={Item.name}
            url={Item.url}
            description={Item.description}
          >
            <img src={Item.url} alt={Item.name} />
          </ItemTileCard>
        </GridListTile>
      ))}

    </GridList>
  </Container>

);

ItemGrid.propTypes = {
  Items: PropTypes.instanceOf(Object).isRequired,
};

export default ItemGrid;
