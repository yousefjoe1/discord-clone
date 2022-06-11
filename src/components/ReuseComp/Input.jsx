import React from "react";

const Input = ({ type, label }) => {
  return (
    <>
      {label && <label htmlFor={label}>{label}</label>}
      <input type={type} id={label} />
    </>
  );
};

export default Input;
