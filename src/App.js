import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NoMatch from './NoMatch';
import About from './pages/About';
import Layout from './components/Layout';
import NavigationBar from './components/NavigationBar';
import Jumbotron from './components/Jumbotron';
import ItemGrid from './components/ItemGrid';
import UserProfileView from './users/UserProfileView';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Items: [
        {
          id: 1, name: 'Leather Bags', category: 'Bags', description: 'Exotic leather bags from Spain', url: '/assets/cover_image5.jpg',
        },
        {
          id: 2, name: 'Jute Rugs', category: 'Rugs', description: 'Jute bags from East India', url: '/assets/cover_image3.jpg',
        },
        {
          id: 3, name: 'Woolen Sweathers', category: 'Clothing', description: 'Warm winter wear from Kashmir', url: '/assets/cover_image4.jpg',
        },
        {
          id: 11, name: 'Leather Bags', category: 'Bags', description: 'Exotic leather bags from Spain', url: '/assets/cover_image.jpg',
        },
        {
          id: 21, name: 'Jute Rugs', category: 'Rugs', description: 'Jute bags from East India', url: '/assets/cover_image3.jpg',
        },
        {
          id: 31, name: 'Woolen Sweathers', category: 'Clothing', description: 'Warm winter wear from Kashmir', url: '/assets/cover_image6.jpg',
        },
        {
          id: 12, name: 'Leather Bags', category: 'Bags', description: 'Exotic leather bags from Spain', url: '/assets/cover_image.jpg',
        },
        {
          id: 22, name: 'Jute Rugs', category: 'Rugs', description: 'Jute bags from East India', url: '/assets/cover_image7.jpg',
        },
        {
          id: 32, name: 'Woolen Sweathers', category: 'Clothing', description: 'Warm winter wear from Kashmir', url: '/assets/cover_image8.jpg',
        },
        {
          id: 13, name: 'Leather Bags', category: 'Bags', description: 'Exotic leather bags from Spain', url: '/assets/cover_image.jpg',
        },
        {
          id: 23, name: 'Jute Rugs', category: 'Rugs', description: 'Jute bags from East India', url: '/assets/cover_image9.jpg',
        },
        {
          id: 33, name: 'Woolen Sweathers', category: 'Clothing', description: 'Warm winter wear from Kashmir', url: '/assets/cover_image4.jpg',
        },
        {
          id: 14, name: 'Leather Bags', category: 'Bags', description: 'Exotic leather bags from Spain', url: '/assets/cover_image10.jpg',
        },
        {
          id: 24, name: 'Jute Rugs', category: 'Rugs', description: 'Jute bags from East India', url: '/assets/cover_image13.jpg',
        },
        {
          id: 34, name: 'Woolen Sweathers', category: 'Clothing', description: 'Warm winter wear from Kashmir', url: '/assets/cover_image11.jpg',
        },
        {
          id: 15, name: 'Leather Bags', category: 'Bags', description: 'Exotic leather bags from Spain', url: '/assets/cover_image12.jpg',
        },
        {
          id: 25, name: 'Jute Rugs', category: 'Rugs', description: 'Jute bags from East India', url: '/assets/cover_image3.jpg',
        },
        {
          id: 35, name: 'Woolen Sweathers', category: 'Clothing', description: 'Warm winter wear from Kashmir', url: '/assets/cover_image12.jpg',
        },
      ],
    };
  }


  render() {
    const { Items } = this.state;
    return (
      <>
        <NavigationBar />
        <Jumbotron />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/:userid" component={UserProfileView} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
          <ItemGrid Items={Items} />
        </Layout>
      </>

    );
  }
}

export default App;
