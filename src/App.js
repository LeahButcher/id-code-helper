import React from 'react';
import './App.css';
import Home from "./phases/Home.js"

function App() {  
  
  return (
    <div className="App">
      <div className="App-main">
        <header className="App-header">        
          <p>
            ID Code Helper
          </p>
          
        </header>
        <div className="App-body">  
          <Home />
          {/* <div className="App-content-table">
            This helper will walk you through creating an ID number system for inventory numbers, control numbers, serial numbers, and more.
            <br /><br />
            After configuring the layout, it'll provide a JavaScript function that you can use in your web app or Google Sheets scripts for automatically generating new codes.
            <br /><br />
            <button 
            className="App-proceed-button"
            onClick={testFunc}>Start</button>
          </div> */}
        </div> 
        <footer className="App-footer">
          Noah Butcher | <a 
          href= "https://github.com/NoahButcher/id-code-helper"
          className="App-link">          
            https://github.com/NoahButcher/id-code-helper
          </a>
        </footer>   
      </div>   
    </div>
  );
}



export default App;
