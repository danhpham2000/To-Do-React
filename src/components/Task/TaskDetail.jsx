import "./Task.css";

const TaskDetails = ({ task }) => {
  return (
    <div className="task-details">
      <p className="taskName">{task.task}</p>
      <p
        className={`${
          task.priority === "High"
            ? "prior"
            : task.priority === "Medium"
            ? "medium"
            : task.priority === "Low"
            ? "low"
            : ""
        }`}
        id="taskPrior"
      >
        {task.priority}
      </p>
    </div>
  );
};

export default TaskDetails;
