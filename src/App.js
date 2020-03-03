import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <p>
          ID Code Helper
        </p>
        
      </header>
      <body className="App-body">  
        This helper will walk you through creating an ID number system for like inventory numbers, control numbers, serial numbers, and more.<br /><br />
        After configuring the layout, it'll return a JavaScript funtion that you can put in your web app or Google Sheets scripts.
      <button className="App-proceed-button">Start</button>
      </body>       
    </div>
  );
}

export default App;
