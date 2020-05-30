import React from 'react';
import PropTypes from 'prop-types';
// import { useParams } from 'react-router-dom';

class UserProfileView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
    };
  }

  componentDidMount() {
    const { match } = this.props;

    fetch(`/${match.params.userId}`)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          userData: result,
        });
      });
  }

  render() {
    const { userData } = this.state;

    // https://stackoverflow.com/questions/55359176/handling-undefined-null-properties-in-components-during-first-render
    if (userData === null) {
      console.log('HERE!');
      return (
        <div>
          <h2>Loading...</h2>
        </div>
      );
    }

    return (
      <div>
        <h2>Hi {userData.firstName}!</h2>
      </div>
    );
  }
}

// react-hooks
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
