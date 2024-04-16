import TaskDetails from "./TaskDetail";
import "./Task.css";
import { useEffect } from "react";
import { useTasksContext } from "../../hooks/useTasksContext";
import TaskForm from "./TaskForm";

const TaskCard = () => {
  const { tasks, dispatch } = useTasksContext();

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch("http://localhost:3001/tasks");
      const json = await res.json();

      if (res.ok) {
        dispatch({ type: "SET_TASKS", payload: json.tasks });
      }
    };
    fetchTasks();
  }, [dispatch]);

  return (
    <div className="container">
      <div className="card">
        <TaskForm />
        <div className="title">
          {tasks &&
            tasks.map((task) => <TaskDetails task={task} key={task._id} />)}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
