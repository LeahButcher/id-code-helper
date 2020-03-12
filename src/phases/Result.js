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
    let codeOutput = (
        <div className="App-code-output">
            {"function GenerateID("}      
        </div>
        )

        return (
            <div className="App-content-table">
                Here's your JavaScript function:
                <br /><br />
                {codeOutput}
                <br /><br />
                {/* Add copy button */}
            </div>
        );
}
export default Result
