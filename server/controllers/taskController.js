const Task = require("../models/task");

module.exports.getTasks= async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({
      message: "Tasks fetched!",
      tasks: tasks,
    });
  } catch (err) {
    res.status(404).json({
      message: "Failed to fetch",
    });
  }
};

module.exports.postTask = async (req, res) => {
  try {
    const { task, priority } = req.body;
    const todo = new Task({
      task: task,
      priority: priority,
    });
    await todo.save();
    res.status(201).json({
      message: "Todo created",
      task: task,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

module.exports.deleteTask = async (req, res) => {
  try {
    const taskId = req.params.taskId;
    await Task.findByIdAndDelete(taskId);
    res.status(200).json({
      message: "Todo deleted",
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
