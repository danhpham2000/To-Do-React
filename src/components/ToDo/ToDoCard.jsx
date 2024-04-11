import TodoList from "./TodoList";
import "./Todo.css";
import { useState } from "react";

const TodoCard = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");
  const [tasks, setTasks] = useState([
    { title: "Complete Homework", priority: "High", id: 1 },
    { title: "Complete Workout", priority: "Medium", id: 2 },
    { title: "Complete Exam", priority: "Low", id: 3 },
    { title: "Complete Homework", priority: "High", id: 12 },
    { title: "Complete Workout", priority: "Medium", id: 22 },
    { title: "Complete Workout", priority: "Medium", id: 23 },
  ]);

  return (
    <div className="container">
      <div className="card">
        <form className="form-todo">
          <input
            className="input"
            type="text"
            name="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="New task..."
            required
          />
          <input
            className="input"
            type="text"
            name="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            placeholder="Priority"
            required
          />
          <button className="btn" type="submit">
            Add
          </button>
        </form>
        {<TodoList tasks={tasks} />}
      </div>
    </div>
  );
};

export default TodoCard;
