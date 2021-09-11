const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    user_name:{ type: String, required: true },
    user_pass: { type: String, required: true },
    user_email: { type: String, required: true }
})

const Users = mongoose.model("users", userModel);

module.exports = Users;