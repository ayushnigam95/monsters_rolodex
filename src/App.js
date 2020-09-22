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
      searchField: null
    };
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters: users})) 
  }

  filterMonstersByCharacter() {
    const {monsters, searchField} = this.state
    var filtered_monsters = []
    if(searchField!=null){
      filtered_monsters = monsters.filter(o => o.name.toLowerCase().includes( searchField.toLowerCase()))
    }else{
      return monsters
    }
    console.log("filtered monsters", filtered_monsters)
    return filtered_monsters
  }
  render() {
    // const {monsters, searchField} = this.state
    // const filtered_monsters = monsters.filter(o => o.name.toLowerCase().includes( searchField.toLowerCase()))

    return (
      <div className="App">
        <input type="search" 
          placeholder="Search"
          // e is synthetic event here
          onChange= {e => {
            // console.log(">> SYNTHETIC EVENT", e, "<<")
            // console.log(e.target.value)
            this.setState({searchField: e.target.value}, () =>{ // this.setState is async call
              console.log(this.state) // calling console log in call back
            })
            console.log(this.state) // calling console log not in call back
          }
          } 
        />
        {/* props are whatever being passed on to components */}
        <CardList monsters={this.filterMonstersByCharacter()} />
        {/* props childern is whatever being passed inside components */}
        {/* Ayush */}        
      </div>
    );
  }
}

export default App;
