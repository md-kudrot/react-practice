import ReactDOM from 'react-dom/client';

function singUp(formData) {
  const email = formData.get("email")
  const password = formData.get("password")
  const employmentStatus = formData.get("employmentStatus")

  const dietaryRestrictions = formData.getAll("dietaryRestriction")
  console.log(dietaryRestrictions)

  console.log(email)
  console.log(password)
  console.log(employmentStatus)
}


function App() {
  return (
    <section id='main-section'>
      <h1>Signup form</h1>
      <form action={singUp}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
        <br />

        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />

        <label htmlFor="description">Description:</label>
        <textarea name="description" id="description" defaultValue="This is a description"></textarea>

        <fieldset>
          <legend>Employment Status:</legend>
          <label>
            <input type="radio" name="employmentStatus" value="unemployed" />
            Unemployed
          </label>
          <label>
            <input type="radio" name="employmentStatus" value="part-time" />
            Part-time
          </label>
          <label>
            <input type="radio" name="employmentStatus" defaultChecked={true} value="full-time" />
            Full-time
          </label>
        </fieldset>

        <fieldset>
          <legend>Dietary restrictions:</legend>
          <label>
            <input type="checkbox" name="dietaryRestriction" value="Kosher" />
            Kosher
          </label>
          <label>
            <input type="checkbox" name="dietaryRestriction" value="Vegan" />
            Vegan
          </label>
          <label>
            <input type="checkbox" name="dietaryRestriction" defaultChecked={true} value="gluten-free" />
            gluten-free
          </label>
        </fieldset>

        <button>Submit</button>

      </form>
    </section>
  )
}






/*
**********************************
|        long way to do that      |
**********************************


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

*/

export default App
