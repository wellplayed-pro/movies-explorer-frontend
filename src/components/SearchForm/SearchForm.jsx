import React from "react";
import "./SearchForm.css";
import CheckBox from "../CheckBox/CheckBox";

const SearchForm = () => {
  return (
    <section className="search-form">
      <form className="search-form__form">
        <input
          className="search-form__input"
          name="search"
          minLength="2"
          maxLength="40"
          type="text"
          placeholder="Фильм"
        />
        <button className="search-form__btn" type="button">
          Найти
        </button>
      </form>
      <div className="search-form__subaction">
        <CheckBox className="search-form__checkbox" />
      </div>
    </section>
  );
};

export default SearchForm;
