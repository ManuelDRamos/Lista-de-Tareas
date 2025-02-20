const mongoose = require("mongoose");
const Task = require("../models/task");

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las tareas", error });
    }
};

const createTask = async (req, res) => {
    try {
        console.log("Datos recibidos:", req.body);
        const { title, description } = req.body;
        const newTask = new Task({ title, description });
        await newTask.save();
        console.log("Tarea creada:", newTask);
        res.status(201).json(newTask);
    } catch (error) {
        console.error("Error al crear la tarea:", error);
        res.status(400).json({ message: "Error al crear la tarea", error });
    }
};

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("ID recibido para actualizar:", id);

        // Verificar si el ID es válido
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "ID inválido" });
        }

        // Buscar y actualizar la tarea
        const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedTask) {
            return res.status(404).json({ message: "Tarea no encontrada" });
        }

        res.json(updatedTask);

    } catch (error) {
        console.error("Error al actualizar la tarea:", error);
        res.status(500).json({ message: "Error al actualizar la tarea", error: error.message });
    }
};

// 🗑️ ELIMINAR TAREA (DELETE)
const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("ID recibido para eliminar:", id);

        // Verificar si el ID es válido
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "ID inválido" });
        }

        // Buscar y eliminar la tarea
        const deletedTask = await Task.findByIdAndDelete(id);
        
        if (!deletedTask) {
            return res.status(404).json({ message: "Tarea no encontrada" });
        }

        res.json({ message: "Tarea eliminada correctamente" });

    } catch (error) {
        console.error("Error al eliminar la tarea:", error);
        res.status(500).json({ message: "Error al eliminar la tarea", error: error.message });
    }
};

module.exports = { getAllTasks, createTask, updateTask, deleteTask };
