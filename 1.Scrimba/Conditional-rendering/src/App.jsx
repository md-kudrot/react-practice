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