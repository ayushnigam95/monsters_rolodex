import React, { Component } from "react";
import logo from "./logo.svg";
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

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => (
          <h1 key= {monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
