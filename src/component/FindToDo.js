import React, { useRef } from "react";

import "../style/App.css";

const FindToDo = ({ onSubmit }) => {
  const findToDo = useRef();

  const HandleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      find_todo: findToDo.current.value,
    });
  };

  return (
    <div className="find_todo">
      <form className="find_form" onSubmit={HandleSubmit}>
        <input
          ref={findToDo}
          className="title_todo"
          type="text"
          name="find_todo"
          placeholder="find to do"
        />
        <button className="find_button">find</button>
      </form>
    </div>
  );
};

export default FindToDo;
