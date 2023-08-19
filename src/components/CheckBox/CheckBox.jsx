import React from "react";
import { useState } from "react";
import "./CheckBox.css";

const CheckBox = ({ className }) => {
  const [shorts, setShorts] = useState(true);
  return (
    <section className={`checkbox ${className}`}>
      <input
        type="checkbox"
        id="checkbox"
        className="checkbox__input"
        checked={shorts}
        onChange={() => {
          setShorts(!shorts);
        }}
      />
      <label htmlFor="checkbox" className="checkbox__toggle">
        Короткометражки
      </label>
    </section>
  );
};

export default CheckBox;
