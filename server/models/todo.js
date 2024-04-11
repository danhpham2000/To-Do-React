const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  priority: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Task", taskSchema);
