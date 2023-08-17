import React from "react";
import "./AboutMe.css";
import photo from "../../../images/photo.png";
import { Link } from "react-router-dom";
import Portfolio from "../Portfolio/Portfolio";

const AboutMe = () => {
  return (
    <section className="about-me" id="aboutMe">
      <h2 className="main-section__title">Студент</h2>
      <div className="about-me__wrap">
        <div className="about-me__content">
          <h3 className="student__name">Виталий</h3>
          <p className="about-me__job">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__intro">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <Link
            className="about-me__link"
            to={"https://github.com/wellplayed-pro"}
            target="_blank"
            rel="noreferrer"
          >
            Github
          </Link>
        </div>
        <img
          className="about-me__photo"
          src={photo}
          alt="фотография студента"
        />
      </div>
      <Portfolio />
    </section>
  );
};

export default AboutMe;
