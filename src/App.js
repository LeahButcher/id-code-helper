import React from 'react';
import './App.css';

function App() {  
  return (
    <div className="App">
      <table className="App-main">
        <header className="App-header">        
          <p>
            ID Code Helper
          </p>
          
        </header>
        <body className="App-body">  
          <table className="App-content-table">
            This helper will walk you through creating an ID number system for inventory numbers, control numbers, serial numbers, and more.
            <br /><br />
            After configuring the layout, it'll provide a JavaScript function that you can use in your web app or Google Sheets scripts for automatically generating new codes.
            <br /><br />
            <button className="App-proceed-button">Start</button>
          </table>
        </body> 
        <footer className="App-footer">
          Noah Butcher | <a 
          href= "https://github.com/NoahButcher/id-code-helper"
          className="App-link">          
            https://github.com/NoahButcher/id-code-helper
            </a>
        </footer>   
      </table>   
    </div>
  );
}



export default App;
