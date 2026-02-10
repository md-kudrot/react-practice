import Cart from "./cart.jsx";
import './App.css'
import './cart.css'

function App() {
  const userName = "kudrot";

  return (
    <div className="app-container">
      <h1 className="title">🚀 My Learning Journey</h1>
      <Cart
        emoji="✅"
        title="JavaScript Mastered"
        description="Completed ES6, DOM, Async JS, and built projects"
      />

      <Cart
        emoji="🔥"
        title="Learning React"
        description="Understanding components, JSX, props, and state"
      />

      <Cart
        emoji="🎯"
        title="Next Goal: MERN Stack"
        description="Master React, then move to Node.js, Express, MongoDB"
      />
    </div>
  )
}

export default App