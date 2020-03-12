import React, { Component } from 'react';

const minimum = 0;
const maximum = 5;
const defaultNumber = 1;
const defaultExample = "A";

class PrimaryChars extends Component { 
    
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
            result = result + "A"            
        }             
        this.props.PCCallback(result)
    }

    componentDidMount(){
        this.props.PCCallback(defaultExample)
    }

    render() {        
        return (
            
            <div className="App-content-table">
                An ID number usually should start with letters rather than numbers.
            <br /><br />
                How many letters would you like your ID convention to use? <br />
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
export default PrimaryChars