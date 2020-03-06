import React from "react"

function Home(){  
    var output;  
    
    output = (
        <div className="App-content-table">
            This helper will walk you through creating an ID number system for inventory numbers, control numbers, serial numbers, and more.
            <br /><br />
            After configuring the layout, it'll provide a JavaScript function that you can use in your web app or Google Sheets scripts for automatically generating new codes.
            <br /><br />
        </div> 
    )
    return(
        output
    )
}

export default Home