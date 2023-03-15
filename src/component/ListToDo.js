import React, { useRef, useState } from "react";

import "../style/App.css";

const ListToDo = ({ onSubmit }) => {
  const listToDo = useRef();
  const [list, setList] = useState([]);
  const [page, setPage] = useState({
    skip: 0,
    limit: 10,
  });

  const HandleSubmit = (event) => {
    event.preventDefault();
  };

  const getList = async () => {
    const response = await fetch("http://localhost:5000/list", {
      method: "POST",
      headers: { "Content-Type": "application/JSON" },
      body: JSON.stringify(page),
    });

    const result = await response.json();

    if (result.length > 0) {
      await setList(result);
      setPage({ ...page, skip: page.skip + page.limit });
    } else {
      setPage({ ...page, skip: 0 });
    }
  };

  if (list.length === 0) {
    getList();
  }

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
          <div className="table_col">
            {row.done ? <strike>{row.user}</strike> : row.user}
          </div>
          <div className="table_col">
            {row.done ? <strike>{row.task_name}</strike> : row.task_name}
          </div>
          <div className="table_col">
            {row.done ? <strike>{row.description}</strike> : row.description}
          </div>
          <div className="table_col table_right">
            {row.done ? (
              <strike>{formatDate(row.date_from)}</strike>
            ) : (
              formatDate(row.date_from)
            )}
          </div>
          <div className="table_col table_right">
            {row.done ? (
              <strike>{formatDate(row.date_to)}</strike>
            ) : (
              formatDate(row.date_to)
            )}
          </div>
        </form>
      ))}
      <hr />
      <div className="button_row">
        <button onClick={getList}>next</button>
      </div>
    </div>
  );
};

export default ListToDo;
