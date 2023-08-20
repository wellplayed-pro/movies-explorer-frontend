import React from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <Link
            className="portfolio__link"
            to={"https://github.com/wellplayed-pro/how-to-learn"}
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__name">Статичный сайт</p>
            <span className="portfolio__icon"></span>
          </Link>
        </li>
        <li className="portfolio__item">
          <Link
            className="portfolio__link"
            to={"https://wellplayed-pro.github.io/russian-travel/index.html"}
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__name">Адаптивный сайт</p>
            <span className="portfolio__icon"></span>
          </Link>
        </li>
        <li className="portfolio__item">
          <Link
            className="portfolio__link"
            to={"https://ambernet15pr.nomoredomains.xyz/"}
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__name">Одностраничное приложение</p>
            <span className="portfolio__icon"></span>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
