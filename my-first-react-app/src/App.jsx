// JSX Topic:
/*
function App() {
  const myName = "MD kk";
  const learningTopic = "React.js";
  const currentYear = new Date().getUTCFullYear()
  const isFrontendev = false;

  return (
    <div>
      <h1>Hello, I am {myName}</h1>
      <p>Currently learning: {learningTopic}</p>
      <p>Year: {currentYear}</p>
      <p>status: {isFrontendev ? "frontend Developer" : "Learning "}</p>
      <p>Fun Math: 10 + 45 = {10 + 45}</p>
    </div>
  )
}

export default App;

*/

// Components:

/*

// This is a component
function Welcome() {
  return <h2>👋 Welcome to my React journey!</h2>;
}

// This is another component
function LearningGoal() {
  return <p>🎯 Goal: Become a MERN Stack Developer</p>
}

// Main App component
function App() {
  return (
    <div>
      <h1>🚀 MD Kamrujjaman</h1>
      <Welcome/>
      <LearningGoal/>
      <LearningGoal/>
    </div>
  );
}

export default App;
*/


//  Let's Create a Separate Component File and import it
/*
import Header from "./header";
function App() {
  return(
    <Header/>
  )
}



export default App;

*/


// Props (Passing Data Between Components)
// Child component (receives props)
function Greeting(props) {
  return <h2>Hello, {props.name}!</h2>;
}

// Parent component (sends props)
function App() {
  return (
    <div>
      <Greeting name="Kamrujjaman" />
      <Greeting name="React Developer" />
      <Greeting name="MERN Stack Learner" />
    </div>
  );
}

export default App;