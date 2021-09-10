const mongoose = require('mongoose');

const projectModel = new mongoose.Schema({
  title: { type: String, required: true },
  userid: { type: String, required: true },
  description: { type: String, required: true }
})

const project = mongoose.model("projects", projectModel);

module.exports = project;
