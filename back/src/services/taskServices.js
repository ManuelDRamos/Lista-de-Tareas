// const Task = require('../models/Task');

const getAllTasks = async () => {
    return await Task.find();
};

const createTask = async ({ title, description }) => {
    const task = new Task({ title, description });
    return await task.save();
};

const updateTask = async (id, taskData) => {
    return await Task.findOneAndUpdate({ id }, taskData, { new: true });
};

const deleteTask = async (id) => {
    const result = await Task.findOneAndDelete({ id });
    return result !== null;
};

module.exports = { getAllTasks, createTask, updateTask, deleteTask };
