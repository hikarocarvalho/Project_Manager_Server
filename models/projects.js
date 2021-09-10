const mongoose = require('mongoose');

const projectModel = new mongoose.Schema({
  title: { type: String, required: true },
  user_id: { type: Number, required: true },
  description: { type: String, required: true }
})

const Projects = mongoose.model("projects", projectModel);

module.exports = Projects;
