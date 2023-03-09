import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const ManyToDo = ({ data, onSubmit }) => {
  const navigate = useNavigate();
  const listToDo = useRef();
  const [list, setList] = useState([]);

  if (list.length === 0) {
    setList(data);
  }

  const HandleSubmit = (event) => {
    event.preventDefault();
  };

  const rowClick = (event) => {
    event.preventDefault();
    onSubmit({
      list_todo: event.target.value,
    });
  };

  const formatDate = (date) => {
    if (date) {
      let temp = date.split("T");
      temp = temp[0].split("-");
      temp = temp[2] + "." + temp[1] + "." + temp[0];
      return temp;
    }
  };

  const handleHome = (event) => {
    event.preventDefault();
    navigate("/redirect");
  };

  return (
    <div className="list_todo">
      {list.map((row, n) => (
        <form className="list_form" key={n} onSubmit={HandleSubmit}>
          <button
            ref={listToDo}
            className="table_col"
            key={row._id}
            value={row._id}
            onClick={rowClick}
          >
            {n + 1}
          </button>
          <div className="table_col">{row.name}</div>
          <div className="table_col">{row.task_name}</div>
          <div className="table_col">{row.description}</div>
          <div className="table_col table_right">
            {formatDate(row.date_from)}
          </div>
          <div className="table_col table_right">{formatDate(row.date_to)}</div>
        </form>
      ))}
      <div className="button_row">
        <button onClick={handleHome}>home</button>
      </div>
    </div>
  );
};

export default ManyToDo;
