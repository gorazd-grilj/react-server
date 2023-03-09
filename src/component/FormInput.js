import React, { useState } from "react";

const FormInput = (props) => {
  const [focus, setFocus] = useState(false);
  const { label, onChange, errorMessage, id, ...inputProps } = props;
  const handleFocus = (event) => {
    setFocus(true);
  };

  if (props.type === "textarea") {
    return (
      <div>
        <label>{props.label}</label>
        <textarea
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          focused={focus.toString()}
        />
        <span> {errorMessage}</span>
      </div>
    );
  } else {
    return (
      <div>
        <label>{props.label}</label>
        <input
          className="inputs"
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          focused={focus.toString()}
        />
        <span> {errorMessage}</span>
      </div>
    );
  }
};

export default FormInput;
