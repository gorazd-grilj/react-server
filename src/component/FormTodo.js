import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import FormInput from "./FormInput.js";

import "../style/App.css";

import { User, Inputs, Narejeno } from "../data/data.js";

const user = User;
const inputs = Inputs;
const narejeno = Narejeno;

const FormTodo = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    user: "Airton",
    task_name: "",
    description: "",
    date_from: "",
    date_to: "",
    done: "false",
  });

  const HandleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/add", {
      method: "POST",
      headers: { "Content-Type": "application/JSON" },
      body: JSON.stringify(value),
    });

    await response.json();
    navigate("/");
  };

  const onChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handleHome = (event) => {
    event.preventDefault();
    navigate("/redirect");
  };

  return (
    <div className="form_input">
      <form className="form_todo" onSubmit={HandleSubmit}>
        <div className="form_header">vpiši novo nalogo</div>
        <label>izvajalec</label>
        <select name="user" title="izberi" key="user" onChange={onChange}>
          {user.map((u) => (
            <option value={u.value} key={u.key} title={u.key}>
              {u.value}
            </option>
          ))}
        </select>

        {inputs.map((input) => (
          <FormInput
            {...input}
            value={value[input.name]}
            title={input.title}
            key={`${input.key}`}
            onChange={onChange}
          />
        ))}

        <label>narejeno</label>
        <select name="done" title="izberi" key="done" onChange={onChange}>
          {narejeno.map((n) => (
            <option value={n.value} key={n.key} title={n.key}>
              {n.value}
            </option>
          ))}
        </select>

        <div className="button_row">
          <button>save to do</button>
          <button onClick={handleHome}>home</button>
        </div>
      </form>
    </div>
  );
};

export default FormTodo;
