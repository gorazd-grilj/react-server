import React from "react";
import { Routes, Route } from "react-router-dom";

import "./style/App.css";

import Home from "./page/Home.js";
import FormTodo from "./page/FormTodo.js";
import DeleteTodo from "./page/DeleteTodo.js";
import UpdateTodo from "./page/UpdateTodo.js";
import Redirect from "./page/Redirect.js";

function App() {
  return (
    <div className="App">
      <header className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/form_todo" element={<FormTodo />} />
          <Route exact path="/delete" element={<DeleteTodo />} />
          <Route exact path="/update" element={<UpdateTodo />} />
          <Route exact path="/redirect" element={<Redirect />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
