import React, { Component } from 'react';

const minimum = 2;
const maximum = 12;
const defaultNumber = 5;
const defaultExample = "#####";

class Digits extends Component { 
    
    constructor(){
        super()
        this.state = ({
                    
        })
        this.CheckInput=this.CheckInput.bind(this)
      }

    CheckInput(){
        if (this.inputRef.value < minimum){
            this.inputRef.value = minimum
        }
        if (this.inputRef.value > maximum){
            this.inputRef.value = maximum
        }
        this.sendData()
    }
    sendData = () => {        
        let num = this.inputRef.value;
        let result = ""
        for (var i = minimum; i < num;i++){
            result = result + "#"            
        }             
        this.props.DCallback(result)
    }

    componentDidMount(){
        this.props.DCallback(defaultExample)
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
                    defaultValue={defaultNumber}
                    ref={(ele) => this.inputRef = ele}
                    onInput={this.CheckInput}
                    min={minimum}
                    max={maximum}>
                </input>
                <br /><br />
            </div>
        );
    }
}
export default Digits