const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, default: "" }
}, { versionKey: false }); 

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
