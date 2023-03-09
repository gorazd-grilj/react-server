import React, { useState } from "react";

import FindToDo from "../component/FindToDo";
import AddTodo from "../component/AddToDo";
import ListToDo from "../component/ListToDo";
import SingleToDo from "../component/SingleToDo";
import ManyToDo from "../component/ManyToDo";

const Home = () => {
  const [list, setList] = useState([]);

  const handleFindSubmit = async (formData) => {
    if (formData.find_todo.length > 2) {
      const response = await fetch("http://localhost:5000/find", {
        method: "POST",
        headers: { "Content-Type": "application/JSON" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setList(result);
    } else {
      setList([]);
    }
  };

  const handleListSubmit = async (formData) => {
    const response = await fetch("http://localhost:5000/id", {
      method: "POST",
      headers: { "Content-Type": "application/JSON" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    setList(result);
  };

  const handleSingleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container">
      <div className="home_todo">
        <FindToDo onSubmit={handleFindSubmit} />
        <AddTodo />
      </div>
      <div className="list_todo">
        <ListToDo onSubmit={handleListSubmit} />
        {list.length > 0 && (
          <ManyToDo data={list} onSubmit={handleListSubmit} />
        )}
      </div>
      <div className="single_todo">
        {list.length === undefined && Object.entries(list).length > 0 && (
          <SingleToDo data={list} onSubmit={handleSingleSubmit} />
        )}
      </div>
    </div>
  );
};

export default Home;
