import React, { Component } from 'react';
import ReactDOM from "react-dom"
import './App.css';
import Home from './phases/Home'
import PrimaryChars from './phases/PrimaryChars'
import SecondaryChars from './phases/SecondaryChars';
import Digits from './phases/Digits';
import ExtraChars from './phases/ExtraChars';


class App extends Component { 

  constructor(){
    super()
    this.state = ({
      output: (<Home />),
      phase: "Home",           
    })
    this.ProceedButtonClick=this.ProceedButtonClick.bind(this)
  }

  ProceedButtonClick() {
    console.log("Proceed button clicked!")
    switch (this.state.phase) {
      case "Home":
        this.setState({ output: <PrimaryChars /> })
        // this.buttonRef.hidden=true
        this.buttonRef.textContent="Next"
        this.setState({ phase: "PrimaryChars" })
        break;
      case "PrimaryChars":
        this.setState({ output: <SecondaryChars /> })
        this.buttonRef.textContent="Next"
        this.setState({ phase: "SecondaryChars" })
        break;
      case "SecondaryChars":
        this.setState({ output: <Digits /> })
        this.buttonRef.textContent="Next"
        this.setState({ phase: "Digits" })
        break;
      case "Digits":
        this.setState({ output: <ExtraChars /> })
        this.buttonRef.textContent="Next"
        this.setState({ phase: "ExtraChars" })
        break;
      default:
        break
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
            Noah Butcher | <a
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
