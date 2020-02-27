import React, { Component } from "react";
import Header from './Mainpage/header';
import Menu from './Mainpage/menu';
import Home from './Mainpage/home';
import FindForm from './Mainpage/findform';
import TopDest from './Mainpage/topdest';
import Last from './Mainpage/last';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


export class App extends Component {
  render() {
    return (
      <Router>
    <div className="App">
<Route exact path = "/">
  <Header/>
</Route>
      <Route exact path = "/about" >
        <FindForm/>
        </Route> 

  
    </div>
    </Router>
  );
}
}

export default App;
