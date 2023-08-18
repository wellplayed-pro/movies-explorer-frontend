import React from "react";
import "./Form.css";

const Form = ({ children, spanText, spanPatch, spanLink }) => {
  return <form className="form">{children}</form>;
};

export default Form;
