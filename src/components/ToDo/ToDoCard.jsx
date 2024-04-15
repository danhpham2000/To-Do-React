import TodoList from "./TodoList";
import "./Todo.css";
import { useState, useEffect } from "react";
import { useTodosContext } from "../../hooks/useTodosContext";

const TodoCard = () => {
  const { tasks, dispatch } = useTodosContext();
  const [error, setError] = useState("");
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await fetch("http://localhost:3001/tasks");
      const json = await res.json();

      if (!res.ok) {
        throw Error(json.message);
      }
      if (res.ok) {
        dispatch({ type: "SET_TASKS", payload: json.tasks });
      }
    };
    fetchTasks();
  }, [dispatch]);

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
      dispatch({ type: "CREATE_TASK", payload: json.task });
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
        {tasks && <TodoList tasks={tasks} />}
      </div>
    </div>
  );
};

export default TodoCard;
