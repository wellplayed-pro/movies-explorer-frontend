import React from "react";
import "./CheckBox.css";

const CheckBox = ({ className, ...props }) => {
  return (
    <section className={`checkbox ${className}`}>
      <input
        type="checkbox"
        id="checkbox"
        className="checkbox__input"
        {...props}
      />
      <label htmlFor="checkbox" className="checkbox__toggle">
        Короткометражки
      </label>
    </section>
  );
};

export default CheckBox;
