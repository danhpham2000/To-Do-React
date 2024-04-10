const TodoList = ({ tasks }) => {
  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <div className="todo" key={task.id}>
          <p>{task.title}</p>
          <p>{task.priority}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
