// Todo.jsx
import "./Todo.css";
import { useState } from "react";
import { Todoform } from "./Todoform";
import { TaskList } from "./TaskList";
import { DateTime } from "./Date-Time";
import { useEffect } from "react";

export const Todo = () => {
  const [tasks, setTasks] = useState([]);

  // ✅ Add new task
  const addTask = (newTask) => {
    const { content } = newTask;
    if (content.trim() === "") {
      alert("Please enter a task");
      return;
    }
    // Prevent duplicates
    if (tasks.some((t) => t.content === content)) {
      alert("Task already exists!");
      return;
    }

    setTasks((prev) => [...prev, newTask]);
  };

  // ✅ Delete task
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  // ✅ Toggle checked / unchecked
  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, checked: !t.checked } : t
      )
    );
  };
// ✅️ Load tasks from local storage
  useEffect(()=>{
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
   },[])
  // ✅️ Save tasks to local storage
  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
  },[tasks])
  // ✅ Clear all
  const clearAll = () => setTasks([]);

  return (
    <section className="todo-container">
      <header className="header">
        <h1>Todo List</h1>
        <DateTime />
      </header>

      <Todoform onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onToggleTask={toggleTask}
      />

      <button className="clear-btn" onClick={clearAll}>
        Clear All
      </button>
    </section>
  );
};
