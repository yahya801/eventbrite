import React, { Component } from "react";
import Header from './Mainpage/header';
import Menu from './Mainpage/menu';
import Home from './Mainpage/home';
import FindForm from './Mainpage/findform';


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
