import React, { Component } from "react";
import Header from './Mainpage/header';
import Menu from './Mainpage/menu';
import Home from './Mainpage/home';
import FindForm from './Mainpage/findform';


export class App extends Component {
  render() {
    return (
    <div className="App">
      <Header/>
      <Menu/>
      <Home/>
      <FindForm/>
  
    </div>
  );
}
}

export default App;
