import React from 'react';

// class Result extends Component { 
    
//     constructor(props){
//         super(props)
//         this.state = ({
                    
//         })        
//       }    

    

//     render(props) {  
//         console.log(props.layout)    
//         return (
//             <div className="App-content-table">
//                 Here's your JavaScript function:
//                 <br /><br />
                
//                 <br /><br />
                
//             </div>
//         );
//     }
// }

function Result(props){
    
    /* Calculate possible number of unique IDs*/
    var uniqueIDs = Math.pow(26,props.pri.length)*
        Math.pow(36,props.sec.length)*
        Math.pow(10,props.dig.length) -1;
    /* Calculate number of IDs per category and subcategory */
    /* Calculate number of extra numbers */
    var extraIDs = props.ext.length ? " (Up to " + Math.pow(36,props.ext.length)*uniqueIDs+" with optional characters)" : "";

    // Determine the parameters of the function
    var primary = props.pri.length ? "primary" : ""
    var ps = primary ? ", " : ""
    var secondary = props.sec.length ? "secondary" : ""
    var sd = secondary ? ", " : ""
    var digits = props.dig.length ? "previousNumber" : ""
    var extra = props.ext.length ? ", optional" : ""
    
    /* Determine the content of the function */
    // Create primary variable if needed
    var primaryJS = primary ? 
        (<div>
            {'    '+
            "var pri = primary.toString().toUpperCase().substring(0,"+
            props.pri.length+");"}<br/> 
            </div>) 
        : ""
    
    // Create secondary variable if needed
    var secondaryJS = secondary ? 
        (<div>
            {'    '+
            "var sec = secondary.toString().toUpperCase().substring(0,"+
            props.sec.length+");"}<br/> 
            </div>) 
        : ""

     // Create digits variable
    var digitZeroes = "";
    for (var i = 0; i < props.dig.length; i++){
        digitZeroes = digitZeroes+"0";
    } 
    var digitsJS = digits ? 
    (<div>
        {'    '+
        "var num = '"+digitZeroes+"' + (previousNumber + 1);"}<br/> 
        {'    '+
        "num = num.substr(num.length-"+props.dig.length+");"}<br/> 
        </div>) 
    : ""

    // Create optional variable if needed
    var optionalJS = extra ? 
        (<div>
            {'    '+
            'if (optional != null){'}<br/> 
            {'        '+
            "var opt = optional.toString().toUpperCase().substring(0,"+
            props.ext.length+");"}<br/>
            {'    }'}<br/>
            </div>) 
        : ""


    var codeOutput = (
        <pre className="App-code-output">
            {"/* Creates an ID based strings and previous numbers fed to the function */"}<br/> 
            {"function GenerateID("+primary+ps+secondary+sd+digits+extra+"){"}<br/>            
            {primaryJS}
            {secondaryJS}
            {digitsJS}
            {optionalJS}
            {"}"}
        </pre>
        )

        return (
            <div className="App-content-table">
                Number of unique IDs possible:*
                <br />
                <div className="App-unique-IDs">
                <b>{uniqueIDs}</b>{extraIDs}
                </div>
                <div className="App-explanation">
                    *based on 26 primary characters ({props.pri.length}), 36 secondary characters ({props.sec.length}), 10 digits ({props.dig.length}), and 36 optional characters ({props.ext.length})
                </div>
                <br />
                Here's your JavaScript function:
                <br /><br />
                {codeOutput}
                <br />
                {/* Add copy button */}
                <br />
            </div>
        );
}
export default Result
