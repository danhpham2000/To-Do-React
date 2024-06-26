const Task = require("../models/task");

module.exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
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
    const newTask = new Task({
      task: task,
      priority: priority,
    });
    await newTask.save();
    res.status(201).json({
      message: "Todo created",
      newTask: newTask,
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
    const task = await Task.findByIdAndDelete(taskId);
    res.status(200).json({
      message: "Todo deleted",
      task: task,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
