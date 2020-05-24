import React,{ Component, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from "./Home";
import { Contact } from "./Contact";
import { NoMatch } from "./NoMatch";
import { About } from "./About";
import { Layout } from "./components/Layout"; 
import { NavigationBar } from "./components/NavigationBar";
import { Jumbotron } from './components/Jumbotron';
import { ItemTileCard } from './components/ItemTileCard';
import { ItemGrid } from './components/ItemGrid';
import { Login } from './pages/Login';


class App extends Component {

  state={
    Items:[
      {id: 1, name: "Leather Bags", category:"Bags" , description:"Exotic leather bags from Spain", url:"/assets/cover_image5.jpg" },
      {id: 2, name: "Jute Rugs", category:"Rugs" , description:"Jute bags from East India", url:"/assets/cover_image3.jpg" },
      {id: 3, name: "Woolen Sweathers", category:"Clothing" , description:"Warm winter wear from Kashmir", url:"/assets/cover_image4.jpg" },
      {id: 11, name: "Leather Bags", category:"Bags" , description:"Exotic leather bags from Spain", url:"/assets/cover_image.jpg" },
      {id: 21, name: "Jute Rugs", category:"Rugs" , description:"Jute bags from East India", url:"/assets/cover_image3.jpg" },
      {id: 31, name: "Woolen Sweathers", category:"Clothing" , description:"Warm winter wear from Kashmir", url:"/assets/cover_image6.jpg"},
      {id: 12, name: "Leather Bags", category:"Bags" , description:"Exotic leather bags from Spain", url:"/assets/cover_image.jpg" },
      {id: 22, name: "Jute Rugs", category:"Rugs" , description:"Jute bags from East India", url:"/assets/cover_image7.jpg" },
      {id: 32, name: "Woolen Sweathers", category:"Clothing" , description:"Warm winter wear from Kashmir", url:"/assets/cover_image8.jpg"},
      {id: 13, name: "Leather Bags", category:"Bags" , description:"Exotic leather bags from Spain", url:"/assets/cover_image.jpg" },
      {id: 23, name: "Jute Rugs", category:"Rugs" , description:"Jute bags from East India", url:"/assets/cover_image9.jpg" },
      {id: 33, name: "Woolen Sweathers", category:"Clothing" , description:"Warm winter wear from Kashmir", url:"/assets/cover_image4.jpg" },
      {id: 14, name: "Leather Bags", category:"Bags" , description:"Exotic leather bags from Spain", url:"/assets/cover_image10.jpg" },
      {id: 24, name: "Jute Rugs", category:"Rugs" , description:"Jute bags from East India", url:"/assets/cover_image13.jpg" },
      {id: 34, name: "Woolen Sweathers", category:"Clothing" , description:"Warm winter wear from Kashmir", url:"/assets/cover_image11.jpg"},
      {id: 15, name: "Leather Bags", category:"Bags" , description:"Exotic leather bags from Spain", url:"/assets/cover_image12.jpg" },
      {id: 25, name: "Jute Rugs", category:"Rugs" , description:"Jute bags from East India", url:"/assets/cover_image3.jpg" },
      {id: 35, name: "Woolen Sweathers", category:"Clothing" , description:"Warm winter wear from Kashmir", url:"/assets/cover_image15.jpg"},
    ]
  }

  render(){ return (
     <React.Fragment>
       <NavigationBar/>
       <Jumbotron></Jumbotron>
       <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Route component={NoMatch}></Route>
          </Switch>
        </Router>
 
        <ItemGrid Items={this.state.Items}></ItemGrid>
       </Layout>

       <Login></Login>
     </React.Fragment> 
     
  );
}
}

export default App;
