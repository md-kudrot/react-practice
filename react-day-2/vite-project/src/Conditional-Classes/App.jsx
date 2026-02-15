import TaskCard from "./componant/TaskCard.jsx"
import './componant/TaskCard.css';

function App() {
  return (
    <div style={{ padding: '40px', background: '#f5f5f5', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>📝 My Tasks</h1>
      
      <TaskCard title="Learn React Props" isCompleted={true} />
      <TaskCard title="Build Todo App" isCompleted={false} />
      <TaskCard title="Study CSS in React" isCompleted={false} />
      <TaskCard title="Complete JavaScript" isCompleted={true} />
      <TaskCard title="Complete JavaScript" isCompleted={false} />
    </div>
  );
}

export default App;