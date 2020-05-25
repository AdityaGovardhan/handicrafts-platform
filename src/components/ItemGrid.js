import React from 'react';
// import { Row, Col, Container } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
// import styled from 'styled-components';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { ItemTileCard } from './ItemTileCard';

export const ItemGrid = (props) => ( // linting issue

  <Container>
    <GridList cellHeight={300} cols={3}>

      {props.Items.map((Item) => (
        <GridListTile>
          <ItemTileCard
            key={Item.id}
            name={Item.name}
            url={Item.url}
            description={Item.description}
          >
            {/* <img src={Item.url} alt={Item.name} /> */}
          </ItemTileCard>
        </GridListTile>
      ))}

    </GridList>
  </Container>

);
