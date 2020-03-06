import React from 'react';

function PrimaryChars() {

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
                min="0"
                max="5">                    
            </input>
            <br /><br />
        </div>
    );
}
export default PrimaryChars