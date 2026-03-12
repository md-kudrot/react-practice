import React from "react"
import Count from "./componants/count"

export default function App() {

  const [count, setCount] = React.useState(0)

  // way = 1
  // function add() {
  //   console.log("add")
  //   setCount(count + 1)
  // }
  
  // ***********************************
  // || we can use that in this way   ||
  // ***********************************
  // way = 2
  function add() {
    setCount(preCount => preCount + 1)
  }
  
  
  
  // way 1
  // function minus() {
  //   console.log("add")
  //   setCount(count - 1)
  // }

  // way 2
  function minus() {
    setCount(preCount => preCount - 1)
  }

  /**
   * Challenge: 
   * Create state to track our count value (initial value is 0)
   * Don't forget to replace the hard-coded "0" with your new state
   */
  return (
    <main className="container">
      <h1>How many times will Bob say "state" in this section?</h1>
      <div className="counter">
        <button onClick={minus} className="minus" aria-label="Decrease count">–</button>
        {/* <h2 className="count">{count}</h2> */}
        <Count
          number = {count}
        />
        <button onClick={add} className="plus" aria-label="Increase count">+</button>
      </div>
    </main>
  )
}
