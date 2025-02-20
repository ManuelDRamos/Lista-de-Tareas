const { Router } = require("express");
const { getAllTasks, createTask, updateTask, deleteTask } = require("../controllers/taskController");
const { testMiddleware, bodyValidation } = require("../middlewares");

const tasksRouter = Router();

tasksRouter.get("/", testMiddleware, getAllTasks);
tasksRouter.post("/", bodyValidation, createTask);
tasksRouter.put("/:id", bodyValidation, updateTask);
tasksRouter.delete("/:id", deleteTask);

module.exports = { 
    tasksRouter 
};
