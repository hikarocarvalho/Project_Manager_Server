const mongoose = require('mongoose');

const tasksModel = new mongoose.Schema({
    task_name: { type: String, required: true },
    task_priority_id: { type: Number, required: true },
    project_id: { type: Number, required: true },
    state_name: {type:String,required:true}
})

const Tasks = mongoose.model("tasks", tasksModel);

module.exports = Tasks;
