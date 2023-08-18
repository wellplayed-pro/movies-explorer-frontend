import React from "react";
import "./FormInput.css";

const FormInput = ({
  inputId,
  labelText,
  inputType,
  placeholder,
  errorText,
}) => {
  const type = inputType ?? "text";
  const isError = !!errorText;
  return (
    <div className="form-input">
      <label className="form-input_label" htmlFor={inputId}>
        {labelText}
      </label>
      <div className="form-input__input-wrap">
        <input
          className={`form-input__input ${
            isError ? "form-input__input_error" : ""
          }  `}
          id={inputId}
          type={type}
          placeholder={placeholder}
        />
      </div>
      <div className="form-input__divider"></div>
      <span className="form-input__error-span">{errorText}</span>
    </div>
  );
};

export default FormInput;
