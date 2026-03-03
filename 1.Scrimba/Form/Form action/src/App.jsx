import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  
  function singUp(event) {
    const email = event.get("email")
    // Submit the info to a backend

    console.log(email)
  }
  
  return (
    <section>
      <h1>Signup form</h1>
      <form action={singUp}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
        <br />
        
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />
        
        <button>Submit</button>
        
      </form>
    </section>
  )
}


// ReactDOM.createRoot(document.getElementById('root')).render(<App />);
export default App;