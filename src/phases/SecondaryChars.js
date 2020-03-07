import React, { Component } from 'react';

class SecondaryChars extends Component { 
    
    constructor(){
        super()
        this.state = ({
                    
        })
        this.CheckInput=this.CheckInput.bind(this)
      }

    CheckInput(){
        if (this.inputRef.value<0){
            this.inputRef.value = 0
        }
        if (this.inputRef.value>3){
            this.inputRef.value = 3
        }
    }

    render() {
        return (
            <div className="App-content-table">
                You can add secondary characters or numbers for uses such as subcategories or adding the year to the ID.
            <br /><br />
                How many secondary characters would you like your ID convention to use? <br />
                (Choose a number between 0 and 3)
            <br /><br />
                <input
                    className="Input-qty"
                    type="Number"
                    id="charQty"
                    name="charQty"
                    defaultValue="0"
                    ref={(ele) => this.inputRef = ele}
                    onInput={this.CheckInput}
                    min="0"
                    max="3">
                </input>
                <br /><br />
            </div>
        );
    }
}
export default SecondaryChars