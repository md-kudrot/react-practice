import ReactDOM from 'react-dom/client';

function handleSubmit(even) {
  even.preventDefault()
  // console.log(even)
  const formEl = even.currentTarget
  // console.log(formEl)
  const formData = new FormData(formEl)
  // console.log(formData)
  const email = formData.get("email")
  console.log(email)

  // input field empty
  formEl.reset()
}


function App() {
  return (
    <section id='main-section'>
      <h1>Signup form</h1>
      <form onSubmit={handleSubmit} method="post">
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
export default App