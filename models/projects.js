const mongoose = require('mongoose');

const projectModel = new mongoose.Schema({
  project_title: { type: String, required: true },
  user_id: { type: String, required: true },
  project_description: { type: String, required: true },
  project_final_date: {type: Date, required:true},
  project_date: { type: Date, default: Date.now() },
  project_priority: { type: String, default:"Low",required:true}
})

const Projects = mongoose.model("projects", projectModel);

module.exports = Projects;
