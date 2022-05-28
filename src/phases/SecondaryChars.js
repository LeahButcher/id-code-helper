import React, { Component } from 'react';

const minimum = 0;
const maximum = 4;
const defaultNumber = 0;
const defaultExample = "";

class SecondaryChars extends Component { 
    
    constructor(){
        super()
        this.state = ({
                    
        })
        this.CheckInput=this.CheckInput.bind(this)
        this.sendData=this.sendData.bind(this)
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
            result = result + "B"            
        }             
        this.props.SCCallback(result)
    }

    componentDidMount(){
        this.props.SCCallback(defaultExample)
    }

    render() {
        return (
            <div className="App-content-table">
                You can add secondary characters or numbers for uses such as subcategories or adding the year to the ID.
            <br /><br />
                How many secondary characters would you like your ID convention to use? <br />
                (Choose a number between 0 and 4)
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
export default SecondaryChars