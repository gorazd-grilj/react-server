import React from "react";
import { useNavigate } from "react-router-dom";

import "../style/App.css";

const UpdateTodo = () => {
  const navigate = useNavigate();

  const goHome = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <div className="list_todo">
      <div className="update_todo">Naloga je vpisana.</div>
      <button onClick={goHome}>home</button>
    </div>
  );
};

export default UpdateTodo;
