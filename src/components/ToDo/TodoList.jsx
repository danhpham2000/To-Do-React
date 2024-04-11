import "./Todo.css";

const TodoList = ({ tasks }) => {
  const handleComplete = () => {
    const title = document.getElementById("taskName");
    const priority = document.getElementById("taskPrior");
    const checkButton = document.getElementById("check");

    checkButton.addEventListener("click", () => {
      alert("You clicked");
    });
  };
  return (
    <div className="todo-list">
      <div className="title">
        <h4>Task</h4>
        <h4>Priority</h4>
        <h4>Action</h4>
      </div>
      {tasks.map((task) => (
        <div className="todo" key={task.id}>
          <p id="taskName">{task.title}</p>
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
          <div className="action">
            <form>
              <button id="check" onClick={handleComplete}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                </svg>
              </button>
            </form>
            <form>
              <button>
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
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
