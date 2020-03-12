import React, { Component } from 'react';
import ReactDOM from "react-dom"
import './App.css';
import Home from './phases/Home'
import PrimaryChars from './phases/PrimaryChars'
import SecondaryChars from './phases/SecondaryChars';
import Digits from './phases/Digits';
import ExtraChars from './phases/ExtraChars';
import Result from './phases/Result';

class App extends Component { 

  constructor(){
    super()
    this.state = ({
      output: (<Home />),
      phase: "Home",   
      priChars: "",
      secChars: "",
      digs:"",
      exChars:""
    })
    this.ProceedButtonClick=this.ProceedButtonClick.bind(this)
  }

  ProceedButtonClick() {
    console.log("Proceed button clicked!")
    switch (this.state.phase) {
      case "Home":
        this.setState({ output: <PrimaryChars PCCallback ={this.priCharsCallback} /> })
        // this.buttonRef.hidden=true
        this.buttonRef.textContent="Next"
        this.headerRef.textContent="How will your ID convention start?"
        this.setState({ phase: "PrimaryChars" })
        break;
      case "PrimaryChars":
        this.setState({ output: <SecondaryChars SCCallback ={this.secCharsCallback} /> })
        this.buttonRef.textContent="Next"
        this.headerRef.textContent="Will you have subcategories?"
        this.setState({ phase: "SecondaryChars" })
        break;
      case "SecondaryChars":
        this.setState({ output: <Digits DCallback ={this.dCallback} /> })
        this.buttonRef.textContent="Next"
        this.headerRef.textContent="How many numbers will you need?"
        this.setState({ phase: "Digits" })
        break;
      case "Digits":
        this.setState({ output: <ExtraChars ECCallback ={this.exCharsCallback} /> })
        this.buttonRef.textContent="Next"
        this.headerRef.textContent="Will you need additional characters?"
        this.setState({ phase: "ExtraChars" })
        break;
      case "ExtraChars":
        this.setState({ output: <Result /> })
        this.buttonRef.textContent="Restart"
        this.headerRef.textContent="All done!"
        this.setState({ phase: "Result" })
        break;
      case "Result":
        this.setState({ output: <Home /> })
        this.buttonRef.textContent = "Start"
        this.headerRef.textContent="ID Code Helper"
        this.setState({ phase: "Home" })
        this.setState({priChars:"",secChars:"",digs:"",exChars:""})
        break;
      default:
        break
    }
  }

  priCharsCallback = (data) => {    
    this.setState({priChars: data})
  }
  secCharsCallback = (data) => {    
    this.setState({secChars: data})
  }
  dCallback = (data) => {    
    this.setState({digs: data})
  }
  exCharsCallback = (data) => {    
    this.setState({exChars: data})
  }

  render() {
    return (
      <div className="App">
        <div className="App-main">
          <header className="App-header"
                  ref={(ele) => this.headerRef = ele}> 
            ID Code Helper          
          </header>

          <div className="App-body">
            {this.state.output} 
            <div className="App-example">                  
                {this.state.priChars+this.state.secChars+this.state.digs+this.state.exChars}                  
            </div>           
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
