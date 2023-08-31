import React from "react";
import "./AboutProject.css";

const AboutProject = () => {
  return (
    <section className="about-project" id="about-project">
      <h2 className="main-section-title">О проекте</h2>
      <ul className="about-project__info">
        <li className="about-project__info-element">
          <h3 className="about-project__info-subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__info-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="about-project__info-element">
          <h3 className="about-project__info-subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__info-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="about-project__stage">
        <h4 className="about-project__stage-progress about-project__stage-progress_active">
          1 неделя
        </h4>
        <h4 className="about-project__stage-progress ">4 недели</h4>
        <p className=" about-project__stage-desc">Back-end</p>
        <p className="about-project__stage-desc">Front-end</p>
      </div>
    </section>
  );
};

export default AboutProject;
