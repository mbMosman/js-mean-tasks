const mongoose = require('../modules/db-config');

const TaskSchema = new mongoose.Schema(
  {
    name: String,
    completed: { type: Boolean, default: false },
  }
);

const Task = mongoose.model('Task', TaskSchema, 'tasks');

module.exports = Task;