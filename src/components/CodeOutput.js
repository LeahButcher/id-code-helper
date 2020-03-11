import React, { Component } from 'react';
import PrimaryChars from "../phases/PrimaryChars"

class CodeOutput extends Component { 
    
    constructor(){
        super()
        this.state = ({
                    
        })        
      }    

    render() {
        return (
            <div className="App-content-table">
                Your code so far:
            <br /><br />
                <PrimaryChars  />
            <br /><br />                
            </div>
        );
    }
}
export default CodeOutput