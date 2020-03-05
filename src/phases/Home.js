import React from "react"
import PrimaryChars from "./PrimaryChars"

function Home(){  
    var output;  
    function ToPrimaryChars(){
        output = <PrimaryChars />
        return output
    }
    output = (
        <div className="App-content-table">
            This helper will walk you through creating an ID number system for inventory numbers, control numbers, serial numbers, and more.
        <br /><br />
            After configuring the layout, it'll provide a JavaScript function that you can use in your web app or Google Sheets scripts for automatically generating new codes.
        <br /><br />
            <button
                className="App-proceed-button"
                onClick={ToPrimaryChars}>
                Start
        </button>
        </div> 
    )
    return(
        output
    )
}

export default Home