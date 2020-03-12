import React, { Component } from 'react';

class PrimaryChars extends Component { 
    
    constructor(){
        super()
        this.state = ({
            minimum: 0,
            maximum: 5,
            default: 1,
            defaultExample:"Current Layout: A"
        })
        this.CheckInput=this.CheckInput.bind(this)
        this.sendData=this.sendData.bind(this)
      }

    

    CheckInput(){
        if (this.inputRef.value<this.state.minimum){
            this.inputRef.value = this.state.minimum
        }
        if (this.inputRef.value>5){
            this.inputRef.value = 5
        }        
        this.sendData()
    }
    sendData = () => {        
        let num = this.inputRef.value;
        let result = "Current Layout: "
        for (var i = this.state.minimum; i < num;i++){
            result = result + "A"            
        }             
        this.props.parentCallback(result)
    }

    componentDidMount(){
        this.props.parentCallback(this.state.defaultExample)
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
export default PrimaryChars