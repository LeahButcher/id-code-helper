import React, { Component } from 'react';

class ExtraChars extends Component { 
    
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
        if (this.inputRef.value>5){
            this.inputRef.value = 5
        }
    }

    render() {
        return (
            <div className="App-content-table">
                You can extend your IDs with optional extra characters if you want to differentiate an item by a certain property.
            <br /><br />
                How many extra characters would you like to append to your ID convention when needed? <br />
                (Choose a number between 0 and 5)
            <br /><br />
                <input
                    className="Input-qty"
                    type="Number"
                    id="charQty"
                    name="charQty"
                    defaultValue="1"
                    ref={(ele) => this.inputRef = ele}
                    onInput={this.CheckInput}
                    min="0"
                    max="5">
                </input>
                <br /><br />
            </div>
        );
    }
}
export default ExtraChars