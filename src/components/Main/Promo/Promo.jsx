import React from "react";
import "./Promo.css";
import { Link } from "react-scroll";
import GlobeWeb from "../../../images/landing-logo.svg";

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__container-intro">
          <h1 className="promo__title">
            Учебный проект студента факультета Веб&#8209;разработки.
          </h1>
          <p className="promo__subtitle">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <Link
            className="link promo__link"
            to="about-project"
            smooth={true}
            duration={300}
          >
            Узнать больше
          </Link>
        </div>
        <img
          className="promo__globe"
          src={GlobeWeb}
          alt="Изображение глобуса"
        />
      </div>
    </section>
  );
};

export default Promo;
