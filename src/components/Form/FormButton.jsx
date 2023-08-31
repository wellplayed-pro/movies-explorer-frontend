import React from "react";
import "./FormButton.css";

const FormButton = ({ text, type = "submit" }) => {
  return (
    <button className="btn form-btn" type={type}>
      {text}
    </button>
  );
};

export default FormButton;
