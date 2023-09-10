import React, { useState } from "react";
import "./SearchForm.css";
import CheckBox from "../CheckBox/CheckBox";

const SearchForm = ({
  searchFn,
  keywords,
  isShortFilm,
  canBeEmpty = false,
}) => {
  const [keywordStr, setKeywordStr] = useState(keywords.join(" "));
  const [isError, setError] = useState(false);
  const [isShortFilms, setShortFilms] = useState(isShortFilm);

  const strToWords = (str) => {
    const keywords = str.toLowerCase().split(/\s+/);
    if (keywords.length === 1 && keywords[0] === "") return [];
    return keywords;
  };

  const onSubmit = async (
    isShortFilmsFilter = isShortFilms,
    inputkeywordStr = keywordStr
  ) => {
    if (!searchFn) return;

    const keywords = strToWords(inputkeywordStr);
    if (!canBeEmpty && keywords.length === 0) return setError(true);
    setError(false);

    await searchFn({ keywords, isShortFilmFilter: isShortFilmsFilter });
  };

  const onChangeShortFilmsFilter = async (newValue) => {
    setShortFilms(newValue);
    await onSubmit(newValue);
  };

  return (
    <section className="search-form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div
          className={`search-form__form ${
            isError && "search-form__form_errored"
          }`}
        >
          <input
            className="search-form__input"
            name="search"
            maxLength="40"
            type="text"
            value={keywordStr}
            onChange={(e) => setKeywordStr(e.target.value)}
            placeholder="Фильм"
          />
          <button className="btn search-form__btn" type="submit">
            Найти
          </button>
        </div>
        <div className="search-form__error">
          {isError ? "Нужно ввести ключевое слово" : ""}
        </div>
      </form>
      <div className="search-form__subaction">
        <CheckBox
          checked={isShortFilms}
          onChange={(evt) => onChangeShortFilmsFilter(evt.target.checked)}
          className="search-form__checkbox"
        />
      </div>
    </section>
  );
};

export default SearchForm;
