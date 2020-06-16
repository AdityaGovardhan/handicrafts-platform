import React from 'react';
import PropTypes from 'prop-types';
// import { useParams } from 'react-router-dom';

class UserProfileView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    const { match } = this.props;

    fetch(`/${match.params.userid}`)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          data: result.name,
        });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <h2>{data}</h2>
        <p>
          India has an extremely rich craft tradition,  by great aesthetics and mixed art history.
        </p>
        <p>
          Crafts are an integral part of Indian Culture  nd Economic well-being of India.
        </p>
      </div>
    );
  }
}

// function UserProfileView() {
//   const { userid } = useParams();

//   return (
//     <div>
//       <h2>{userid}</h2>
//       <p>
//         India has an extremely rich craft tradition,  by great aesthetics and mixed art history.
//       </p>
//       <p>
//         Crafts are an integral part of Indian Culture  nd Economic well-being of India.
//       </p>
//     </div>
//   );
// }

// what the heck is this
UserProfileView.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};

export default UserProfileView;
