import React from "react";
import { useNavigate } from "react-router-dom";

import "../style/App.css";

const AddTodo = ({ onSubmit }) => {
  const navigate = useNavigate();

  const addTask = (event) => {
    event.preventDefault();
    navigate("/form_todo");
  };

  return (
    <div className="add_todo">
      <button onClick={addTask} className="add_button">
        add
      </button>
    </div>
  );
};

export default AddTodo;
