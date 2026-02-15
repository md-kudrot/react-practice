import './TaskCard.css';

function TaskCard({ title, isCompleted }) {
  return (
    <div className="task-card">
      <h3 className={isCompleted ? "task-title-completed" : "task-title"}>
        {title}
      </h3>
      <span className={isCompleted ? "status-done" : "status-pending"}>
        {isCompleted ? "✅ Done" : "🔄 Pending"}
      </span>
    </div>
  );
}

export default TaskCard;