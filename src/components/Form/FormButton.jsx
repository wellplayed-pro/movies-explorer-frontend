import React from "react";
import "./FormButton.css";

const FormButton = ({ text, type }) => {
  const btnType = type ?? "submit";

  return (
    <button className="form__button" type={btnType}>
      {text}
    </button>
  );
};

export default FormButton;
