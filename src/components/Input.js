import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} id={props.input.id} {...props.input} />
      {/* ensures that all the key value pairs that we receive on props input are added as props to input */}
    </div>
  );
});

export default Input;
