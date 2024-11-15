import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Handle for Add
  const handleAddTodo = () => {
    if (inputValue) {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue(""); // Clear input field after adding
    }
  };

  // // Handle for Complete
  // const handleComplete = (index) => {
  //   const updatedTodos = todos.map((todo, i) =>
  //     i === index ? { ...todo, completed: !todo.completed } : todo
  //   );
  //   setTodos(updatedTodos);
  // };

  // Handle for Delete
  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index)
    setTodos(updatedTodos);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>To-Do List</h1>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTodo}>Add</button>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
            <button
              onClick={() => handleDelete(index)}
              style={{ marginLeft: "5px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
