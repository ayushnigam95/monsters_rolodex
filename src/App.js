import React, { Component }from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{

  constructor(){
    super();

    // this.state comes from Component class
    this.state = {
      string: "Ayush"
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {/* this {} is allowed by JSX
            it means that any thing between curly braces is javascript */}
            Class Component { this.state.string }
          </p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {/* this.setState() comes from Component Class */}
          <button onClick={() => this.setState({string: "Hello Ayush"})}>
            My button
          </button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
