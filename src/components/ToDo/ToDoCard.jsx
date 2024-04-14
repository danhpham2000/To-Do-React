import TodoList from "./TodoList";
import "./Todo.css";
import { useState, useEffect } from "react";

const TodoCard = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");
  const [error, setError] = useState("");
  const [tasks, setTasks] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/tasks")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        console.log("Res ok");
        return res.json();
      })
      .then((data) => {
        setTasks(data);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  }, []);

  const handleAddTodo = async (event) => {
    event.preventDefault();
    const res = await fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task, priority }),
    });
    const json = await res.json();
    if (!res.ok) {
      setError(json.message);
      console.log(error);
    }
    if (res.ok) {
      console.log(json.message);
      setError(null);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <form className="form-todo" onSubmit={handleAddTodo}>
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
        {error && <div>{error}</div>}
        {tasks && <TodoList tasks={tasks.tasks} />}
      </div>
    </div>
  );
};

export default TodoCard;
