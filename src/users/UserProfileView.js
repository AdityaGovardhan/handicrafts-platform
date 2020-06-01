import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Card, Row, Col,
} from 'react-bootstrap';
// import { useParams } from 'react-router-dom';

// let count = 0; // DEBUG

class UserProfileView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    // console.log(`HERE2 ${match.params.userId}`); // DEBUG

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

    // DEBUG
    // count += 1;
    // console.log(count);
    // console.log(this.state);
    // console.log(this.props);

    // https://stackoverflow.com/questions/55359176/handling-undefined-null-properties-in-components-during-first-render
    if (userData === null) {
      // console.log('HERE!'); // DEBUG
      return (
        <div>
          <h2>Loading...</h2>
        </div>
      );
    }

    // console.log(userData); // DEBUG
    return (
      <Container>
        <Row>
          <Col>
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/${userData.userId}.jpg`} />
          </Col>
          <Col>
            <Card border="light">
              <Card.Body>
                <Card.Title><h1>{`${userData.firstName} ${userData.lastName}`}</h1></Card.Title>
                <Card.Subtitle>{`${userData.emailId}`}</Card.Subtitle>
              </Card.Body>
              <Card.Body>
                <Card.Text>
                  I love Handicrafts!
                  {/* TODO: take user description message */}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
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
