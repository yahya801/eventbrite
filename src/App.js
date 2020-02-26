import React, { Component } from "react";
import Header from './Mainpage/header';
import Home from './Mainpage/Home';
import Findform from './Mainpage/Findform'
import About from './Pages/about';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';




export class App extends Component {
  render() {
    return (
      <Router>
    <div className="App">
     <Header/>
      
    <Route exact path="/one">
  <About />
</Route>
    </div>
    </Router>
  );
}
}

export default App;
