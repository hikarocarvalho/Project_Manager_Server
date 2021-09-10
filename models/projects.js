const mongoose = require('mongoose');

const projectModel = new mongoose.Schema({
  title: { type: String, required: true },
  userid: { type: String, required: true },
  description: { type: String, required: true }
})

const Projects = mongoose.model("projects", projectModel);

module.exports = Projects;
