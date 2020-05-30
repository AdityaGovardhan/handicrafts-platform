import React from 'react';
import PropTypes from 'prop-types';
import ItemGrid from '../components/ItemGrid';

const Home = (props) => {
  const { Items } = props;

  return (
    <div>
      <h2>Home</h2>
      <p>
        India has an extremely rich craft tradition, distinguished by great aesthetics.
      </p>
      <ItemGrid Items={Items} />
    </div>
  );
};

// what the heck is this
Home.propTypes = {
  Items: PropTypes.instanceOf(Object).isRequired,
};

export default Home;
