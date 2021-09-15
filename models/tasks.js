const mongoose = require('mongoose');

const tasksModel = new mongoose.Schema({
    task_name: { type: String, required: true },
    task_priority: { type: String, default:"Low",required:true},
    task_final_date: {type: Date, required:true},
    project_id: { type: String, required: true },
    state_name: {type:String,required:true},
    task_date: { type: Date, default: Date.now() }
})

const Tasks = mongoose.model("tasks", tasksModel);

module.exports = Tasks;
