import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .jumbotron{
        background: url(${`${process.env.PUBLIC_URL}/assets/cover_image_jumbo.jpg`}) no-repeat fixed bottom;
        background-size: cover;
        color: #ffffff;
        height: 280px;
        position: relative;
        z-index=-3;
        opacity: 0.9;  
    }
    .overlay {
        background-color :#000;
        size: 200px;
        opacity: 0.9;
        position: absolute:
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

const Jumbotron = () => (

  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay" />
      <Container>
        <h1> Explore. Experience. Evolve. </h1>
        <p> The Most Exotic Handicraft from across the world</p>
      </Container>
    </Jumbo>
  </Styles>

);

export default Jumbotron;
