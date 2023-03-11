import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SingleToDo = ({ data, onSubmit }) => {
  const navigate = useNavigate();

  const [value, setValue] = useState({
    _id: data._id,
    name: data.name,
    task_name: data.task_name,
    description: data.description,
    date_from: data.date_from,
    date_to: data.date_to,
  });

  const HandleSubmit = (event) => {
    event.preventDefault();
  };

  const formatDate = (date) => {
    if (date) {
      let temp = date.split("T");
      temp = temp[0].split("-");
      temp = temp[2] + "." + temp[1] + "." + temp[0];
      return temp;
    }
  };

  const onChange = (event) => {
    event.preventDefault();
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handleUpdate = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:5000/update", {
      method: "PUT",
      headers: { "Content-Type": "application/JSON" },
      body: JSON.stringify(value),
    });

    await response.json();
    navigate("/update");
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/JSON" },
      body: JSON.stringify({ _id: value._id }),
    });

    await response.json();
    navigate("/delete");
  };

  const handleHome = (event) => {
    event.preventDefault();
    navigate("/redirect");
  };

  return (
    <div className="single_todo">
      <form className="single_form" onSubmit={HandleSubmit}>
        <div className="single_row">
          <label className="single_label">name</label>
          <input
            type="text"
            name="name"
            placeholder={data.name}
            onChange={onChange}
          />
        </div>

        <div className="single_row">
          <label className="single_label">task name</label>
          <input
            type="text"
            name="task_name"
            placeholder={data.task_name}
            onChange={onChange}
          />
        </div>

        <div className="single_row">
          <label className="single_label">description</label>
          <textarea
            name="description"
            placeholder={data.description}
            onChange={onChange}
          />
        </div>

        <div className="single_row">
          <label className="single_label">datum from</label>
          <input
            type="text"
            name="date_from"
            placeholder={formatDate(data.date_from)}
            onChange={onChange}
          />
        </div>

        <div className="single_row">
          <label className="single_label">datum to</label>
          <input
            type="text"
            name="date_to"
            placeholder={formatDate(data.date_to)}
            onChange={onChange}
          />
        </div>
        <hr />
        <div className="button_row">
          <button onClick={handleUpdate}>update</button>
          <button onClick={handleDelete}>delete</button>
          <button onClick={handleHome}>home</button>
        </div>
      </form>
    </div>
  );
};

export default SingleToDo;
