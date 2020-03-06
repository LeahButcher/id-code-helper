import React, { Component } from 'react';
import ReactDOM from "react-dom"
import './App.css';

import PrimaryChars from './phases/PrimaryChars'


class App extends Component { 

  constructor(){
    super()
    this.state = ({
      output: (
        <div className="App-content-table">
          This helper will walk you through creating an ID number system for inventory numbers, control numbers, serial numbers, and more.
          <br /><br />
          After configuring the layout, it'll provide a JavaScript function that you can use in your web app or Google Sheets scripts for automatically generating new codes.
          <br /><br />
        </div>),
      phase: "Home",           
    })
    this.ProceedButtonClick=this.ProceedButtonClick.bind(this)
  }

  ProceedButtonClick() {
    console.log("Proceed button clicked!")
    switch (this.state.phase) {
      case "Home":
        this.setState({ output: <PrimaryChars /> })
        this.buttonRef.hidden=true
        this.buttonRef.textContent="Proceed"
        break;
      case "PrimaryChars":
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-main">
          <header className="App-header">
            <p>
              ID Code Helper
           </p>
          </header>

          <div className="App-body">
            {this.state.output}            
            <button
              ref={(ele) => this.buttonRef = ele}
              className="App-proceed-button"
              onClick={this.ProceedButtonClick}>
              Start
            </button>
          </div>
          
          <footer className="App-footer">
            Noah Butcher |
            <a
              href="https://github.com/NoahButcher/id-code-helper"
              className="App-link">
              https://github.com/NoahButcher/id-code-helper
            </a>
          </footer>
        </div>
      </div>
    )
  };
}



export default App;
