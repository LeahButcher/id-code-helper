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
    
    // Determine the parameters of the function
    var primary = props.pri.length ? "primary" : ""
    var ps = primary ? ", " : ""
    var secondary = props.sec.length ? "secondary" : ""
    var sd = secondary ? ", " : ""
    var digits = props.dig.length ? "digits" : ""
    var extra = props.ext.length ? ", extra" : ""
    
    /* Determine the content of the function */
    // Create primary variable if needed
    var primaryJS = primary ? 
        (<div>
            {'    '+
            "var pri = primary.toString().substring(0,"+
            props.pri.length+");"}<br/> 
            </div>) 
        : ""
    console.log("primary js = "+primary)
    // Create secondary variable if needed
    var secondaryJS = secondary ? 
        (<div>
            {'    '+
            "var sec = secondary.toString().substring(0,"+
            props.sec.length+");"}<br/> 
            </div>) 
        : ""
    console.log("primary js = "+primary)

    var codeOutput = (
        <pre className="App-code-output">
            {"function GenerateID("+primary+ps+secondary+sd+digits+extra+"){"}<br/>            
            {primaryJS}
            {secondaryJS}
            {"}"}
        </pre>
        )

        return (
            <div className="App-content-table">
                Here's your JavaScript function:
                <br /><br />
                {codeOutput}
                <br />
                {/* Add copy button */}
                <br /><br />
            </div>
        );
}
export default Result
