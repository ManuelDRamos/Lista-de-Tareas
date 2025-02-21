import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000/tasks";


import './App.css'

function App() {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [todos, setTodos] = useState([])

  const fetchTodos = async () => {
    try {
      const response = await axios.get(API_URL);
      setTodos(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
   }
 };

 const addTodo = async () => {
  if (!title.trim()) return;
  try {
    const response = await axios.post(API_URL, { title, description });
    setTodos([...todos, response.data]); // Update UI dynamically
    setTitle("");
    setDescription("");
  } catch (error) {
    console.error("Error adding task:", error);
 }
};

const removeTodo = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    setTodos(todos.filter((todo) => todo._id !== id)); // Update UI dynamically
  } catch (error) {
    console.error("Error deleting task:", error);
 }
};

useEffect(() => {
  fetchTodos();
},[]);

  return (
    <div className="todo-main">
      <h1>Lista de Tareas</h1>
      <div className="todo-form"> 
        <input  
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={addTodo}>
          Add To-Do
      </button>
      </div>
      <ul className="todos-list">
        {todos.map((todo) => (
          <li key={todo._id} >
            <div>
              <h3>{todo.title}</h3>
              <p>{todo.description}</p>
            </div>
            <button onClick={() => removeTodo(todo._id)}>
              ❌
            </button>
          </li>
       ))}
      </ul>
    </div>
  )
}

export default App
