const { Router } = require("express");
const { tasksRouter } = require("./taskRouter");

const router = Router();

router.get("/", (req, res) => {
    res.status(200).send("API de Lista de Tareas funcionando correctamente");
});

router.use("/tasks", tasksRouter); 

module.exports = {
    router
};
