import React from "react";
import "./FormInput.css";

const FormInput = ({
  inputId,
  labelText,
  inputType,
  placeholder,
  errorText,
  ...props
}) => {
  const type = inputType ?? "text";
  const isError = !!errorText;
  return (
    <div className="form-input">
      <label className="form-input__label" htmlFor={inputId}>
        {labelText}
      </label>
      <input
        className={`form-input__input ${
          isError ? "form-input__input_error" : ""
        }  `}
        id={inputId}
        type={type}
        placeholder={placeholder}
        {...props}
      />
      <div className="form-input__divider"></div>
      <span className="form-input__error-span">{errorText}</span>
    </div>
  );
};

export default FormInput;
