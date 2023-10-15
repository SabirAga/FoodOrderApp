import React from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} ref={ref}/>
    </div>
  );
});
export default Input;