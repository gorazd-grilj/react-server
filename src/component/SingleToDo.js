import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Narejeno } from "../data/data.js";

const user = User;
const narejeno = Narejeno;

const SingleToDo = ({ data, onSubmit }) => {
  const navigate = useNavigate();

  const [value, setValue] = useState({
    _id: data._id,
    user: data.user,
    task_name: data.task_name,
    description: data.description,
    date_from: data.date_from,
    date_to: data.date_to,
    done: data.done,
  });

  const [inpSel, setInpSel] = useState(false);
  const [dateFrom, setDateFrom] = useState("text");
  const [dateTo, setDateTo] = useState("text");
  const [inpDone, setInpDone] = useState(false);

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
    inpSel && setInpSel(!inpSel);
    inpDone && setInpDone(!inpDone);
    console.log(`onChange value: ${JSON.stringify(value, null, 2)}`);
  };

  const handleUpdate = async (event) => {
    event.preventDefault();

    console.log(`handleUpdate value: ${JSON.stringify(value, null, 2)}`);

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

  const onFocus = (event) => {
    event.preventDefault();
    switch (event.target.name) {
      case "user":
        setInpSel(true);
        break;
      case "date_from":
        setDateFrom("date");
        break;
      case "date_to":
        setDateTo("date");
        break;
      case "done":
        setInpDone(true);
        break;

      default:
        break;
    }
  };

  const InputUser = () => {
    return (
      <div className="single_row">
        <label className="single_label">izvajalec</label>
        <input
          type="text"
          name="user"
          placeholder={value.user}
          onChange={onChange}
          onFocus={onFocus}
        />
      </div>
    );
  };

  const SelectUser = () => {
    return (
      <div className="single_row">
        <label>izvajalec</label>
        <select
          name="user"
          title="izberi"
          key="user"
          onChange={onChange}
          onFocus={onFocus}
        >
          {user.map((u) => (
            <option value={u.value} key={u.key} title={u.key}>
              {u.value}
            </option>
          ))}
        </select>
      </div>
    );
  };

  const InputDone = () => {
    return (
      <div className="single_row">
        <label className="single_label">narejeno</label>
        <input
          type="boolean"
          name="done"
          placeholder={value.done.toString()}
          onChange={onChange}
          onFocus={onFocus}
        />
      </div>
    );
  };

  const SelectDone = () => {
    return (
      <div className="single_row">
        <label>narejeno</label>
        <select
          name="done"
          title="izberi"
          key="done"
          onChange={onChange}
          onFocus={onFocus}
        >
          {narejeno.map((n) => (
            <option value={n.value} key={n.key} title={n.key}>
              {n.value}
            </option>
          ))}
        </select>
      </div>
    );
  };

  return (
    <div className="single_todo">
      <form className="single_form" onSubmit={HandleSubmit}>
        {!inpSel ? <InputUser /> : <SelectUser />}

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
            type={dateFrom}
            name="date_from"
            placeholder={formatDate(data.date_from)}
            onChange={onChange}
            onFocus={onFocus}
          />
        </div>

        <div className="single_row">
          <label className="single_label">datum to</label>
          <input
            type={dateTo}
            name="date_to"
            placeholder={formatDate(data.date_to)}
            onChange={onChange}
            onFocus={onFocus}
          />
        </div>

        {!inpDone ? <InputDone /> : <SelectDone />}
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
