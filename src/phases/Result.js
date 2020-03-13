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
    
    console.log(props.pri.length)
    console.log(props.sec.length)
    console.log(props.dig.length)
    console.log(props.ext.length)
    var primary = props.pri.length ? "primary" : ""
    var ps = primary ? ", " : ""
    var secondary = props.sec.length ? "secondary" : ""
    var sd = secondary ? ", " : ""
    var digits = props.dig.length ? "digits" : ""
    var extra = props.ext.length ? ", extra" : ""

    var codeOutput = (
        <pre className="App-code-output">
            {"function GenerateID("+primary+ps+secondary+sd+digits+extra+"){"}<br/>            
            {'  '}
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
