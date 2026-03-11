// import React from "react"
// function Joke(props) {
//     const [isShown, setIsShown] = React.useState(false)

//     function toggleShown() {
//         setIsShown(prevShown => !prevShown)
//     }
//     return(
//         <div>
//             {props.setup && <h3>{props.setup}</h3>}
//             {isShown && <p>{props.punchline}</p>}
//             <hr />
//             <button onClick={toggleShown}>click to show punchline</button>
//         </div>
//     )
// }

// export default Joke;



import React from "react"

function Joke(props) {
    const [istrue , istrueFunc] = React.useState(false)

    function toggoleFun() {
     istrueFunc(pre => !pre)
    }

    return(
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {istrue && <p>{props.punchline}</p>}
            <hr />
            <button onClick={toggoleFun}>{istrue ? "hide":"show"} punchline</button>
           
       
        </div>
    )
}

export default Joke







