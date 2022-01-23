import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  const addClassName = props.inputIsValid === false ? classes.invalid : "";

  return (
    <div className={`${classes.control} ${addClassName}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type || "text"}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default Input;
