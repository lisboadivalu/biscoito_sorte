import React, { Component } from "react";
//import biscoito from "./assets/biscoito.png";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }
  
  render(){
    return(
      <div>
        <img src={ require('./assets/biscoito.png').default } alt="Biscoito"/>
      </div>
    );
  }
}

export default App;