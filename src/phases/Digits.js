import React, { Component } from 'react';

class Digits extends Component { 
    
    constructor(){
        super()
        this.state = ({
                    
        })
        this.CheckInput=this.CheckInput.bind(this)
      }

    CheckInput(){
        if (this.inputRef.value<2){
            this.inputRef.value = 2
        }
        if (this.inputRef.value>12){
            this.inputRef.value = 12
        }
    }

    render() {
        return (
            <div className="App-content-table">
                Now you'll need to consider the largest amount of items in a given category and/or subcategory you'll have.
            <br /><br />
                How many digits do you need your ID convention to hold? Unused digit places will be zeroes. <br />
                (Choose a number between 2 and 12)
            <br /><br />
                <input
                    className="Input-qty"
                    type="Number"
                    id="charQty"
                    name="charQty"
                    defaultValue="5"
                    ref={(ele) => this.inputRef = ele}
                    onInput={this.CheckInput}
                    min="2"
                    max="12">
                </input>
                <br /><br />
            </div>
        );
    }
}
export default Digits