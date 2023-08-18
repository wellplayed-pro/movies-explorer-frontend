import React from "react";
import "./FormButton.css";

const FormButton = ({ text, type = "submit" }) => {
  return (
    <button className="form__button" type={type}>
      {text}
    </button>
  );
};

export default FormButton;
