// export default function Pad(props) {

//     return (
//         <button 
//             style={{backgroundColor: props.color}}
//             className={props.on ? "on" : ""}
//         ></button>
//     )
// }



// part3
// import React from "react"
// export default function Pad(props) {
//     console.log(props.on)
//     const [isTrue, setTrue] = React.useState(props.on)

//     function flip() {
//         setTrue(pre => !pre)
//     }

//     return (
//         <button
//             style={{ backgroundColor: props.color }}
//             className={isTrue ? "on" : ""}
//             onClick={flip}
//         ></button>
//     )
// }


// part 4
// long way to that

import React from "react"

export default function Pad(props) {
    
    
    return (
        <button 
            style={{backgroundColor: props.color}}
            className={props.on ? "on" : undefined}
            onClick={() => props.toggle(props.id)}  
        ></button>
    )
}