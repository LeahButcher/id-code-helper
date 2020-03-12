import React, { Component } from 'react';

const minimum = 0;
const maximum = 5;
const defaultNumber = 1;
const defaultExample = "C";

class ExtraChars extends Component { 
    
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
            result = result + "C"            
        }             
        this.props.ECCallback(result)
    }

    componentDidMount(){
        this.props.ECCallback(defaultExample)
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
export default ExtraChars