import { useState } from "react";
import { useTasksContext } from "../../hooks/useTasksContext";

const TaskForm = () => {
  const { dispatch } = useTasksContext();
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");
  const [error, setError] = useState("");

  const handleAddTask = async (event) => {
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
      setTask("");
      setPriority("");
      setError(null);
      dispatch({ type: "CREATE_TASK", payload: json.newTask });
    }
  };
  return (
    <form className="form-task" onSubmit={handleAddTask}>
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
  );
};

export default TaskForm;
