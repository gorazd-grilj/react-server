import React from "react";
import { useNavigate } from "react-router-dom";

import "../style/App.css";

const DeleteTodo = () => {
  const navigate = useNavigate();

  const goHome = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <div className="list_todo">
      <div className="delete_todo">Naloga je zbrisana.</div>
      <button onClick={goHome}>home</button>
    </div>
  );
};

export default DeleteTodo;