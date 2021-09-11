const mongoose = require('mongoose');

const priorityModel = new mongoose.Schema({
    task_priority_color:{ type: String, required: true },
    task_priority_description: { type: String, required: true }
})

const TaskPriority = mongoose.model("tasks_priority", priorityModel);

module.exports = TaskPriority;