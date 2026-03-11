// practice1

import Joke from "./joke.jsx"
import jokeData from "./jokedata.js"


function App() {

  const jokeElement = jokeData.map(joke => {
    return (
      <Joke
        key={joke.id}
        setup={joke.setup}
        punchline={joke.punchline}
      />
    )
  })

  return (
    <div>
      {jokeElement}

    </div>
  )
}

export default App;

// practice 2
// import jokedata from "./jokedata"
// import Joke from "./joke.jsx"

// function App() {
//   const allItem = jokedata.map(item => {
//     return (
//       <Joke
//         key={item.id}
//         setup={item.setup}
//         punchline={item.punchline}
//       />
//     )
//   })
//   return (
//     <div>
//       {allItem}
//     </div>
//   )
// }
// export default App;

// practice3
// import React from "react"

// export default function App() {
//   const [messages, setMessages] = React.useState(["a", "b"])
//   /**
//    * Challenge:
//    * - If there are no unread messages, display "You're all caught up!"
//    * - If there's exactly 1 unread message, it should read "You have 
//    *   1 unread message" (singular)
//    * - If there are > 1 unread messages, display "You have <n> unread
//    *   messages" (plural)
//    */
//   return (
//     <div>
//       <h1>{messages.length === 0 ? "You're all caught up!" : `You have ${messages.length} unread ${messages.length === 1 ? "message":"messages"}`}</h1>
//     </div>
//   )
// }
