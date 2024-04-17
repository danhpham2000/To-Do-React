import { useTasksContext } from "../../hooks/useTasksContext";
import "./Task.css";

const TaskDetails = ({ task }) => {
  const { dispatch } = useTasksContext();
  const handleDelete = async () => {
    const res = await fetch("http://localhost:3001/tasks/" + task._id, {
      method: "DELETE",
    });
    const json = await res.json();
    if (!res.ok) {
      console.log(json.message);
    }
    if (res.ok) {
      console.log(json.message);
      dispatch({ type: "DELETE_TASK", payload: json.task });
    }
  };
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
      <button onClick={handleDelete}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
          id="delete"
        >
          <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
        </svg>
      </button>
    </div>
  );
};

export default TaskDetails;
