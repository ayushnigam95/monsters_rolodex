import React, { Component } from "react";
// import logo from "./logo.svg";
import { CardList } from "./components/card-list/card-list.component"
import "./App.css";

class App extends Component {
  constructor() {
    super();

    // this.state comes from Component class
    this.state = {
      monsters: [
        {
          name: "Frankstein",
          id: "1"
        },
        {
          name: "batman",
          id: "2"
        },
        {
          name: "superman",
          id: "3"
        },
      ],
    };
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters: users})) 
  }

  render() {
    return (
      <div className="App">
        {/* props are whatever being passed on to components */}
        <CardList monsters={this.state.monsters} />
        {/* props childern is whatever being passed inside components */}
        {/* Ayush */}        
      </div>
    );
  }
}

export default App;
