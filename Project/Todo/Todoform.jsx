import { useState } from "react";

export const Todoform = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(), // unique ID
      content: inputValue,
      checked: false,
    };
    onAddTask(newTask);
    setInputValue("");
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your task..."
          autoComplete="off"
        />
        <button className="todo-button" type="submit">
          Add
        </button>
      </form>
    </section>
  );
};
