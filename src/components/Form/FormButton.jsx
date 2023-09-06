import React from "react";
import "./FormButton.css";

const FormButton = ({ text, disabled, type = "submit" }) => {
  return (
    <button
      className={`btn form-btn ${disabled ? "form-btn_disabled" : ""}`}
      disabled={disabled}
      type={type}
    >
      {text}
    </button>
  );
};

export default FormButton;
