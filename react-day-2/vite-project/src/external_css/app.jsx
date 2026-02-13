import Card from './Card.jsx';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1 className="main-title">📚 My Learning Path</h1>
      
      <div className="cards-container">
        <Card 
          category="Completed"
          title="JavaScript Mastery"
          description="ES6+, DOM manipulation, Async JS, and multiple projects"
        />
        
        <Card 
          category="Learning"
          title="React.js"
          description="Components, Props, State, Hooks, and building real apps"
        />
        
        <Card 
          category="Next"
          title="MERN Stack"
          description="MongoDB, Express, React, Node.js for full-stack development"
        />
      </div>
    </div>
  );
}

export default App;