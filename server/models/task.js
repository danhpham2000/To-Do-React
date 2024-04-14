const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  task: {
    type: String,
    require: true,
  },
  priority: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("TaskList", taskSchema);
