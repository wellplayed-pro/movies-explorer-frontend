import { useState } from "react";
import closeIcon from "../../../images/close.svg";
import { NavLink } from "react-router-dom";
import "./navDrawer.css";
import ProfileBtn from "../../Profile/ProfileBtn/ProfileBtn";

const NavDrawer = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  function toggle() {
    setIsOpen(!isOpen);
  }
  return (
    <div
      className={`nav-drawer ${isOpen ? "nav-drawer--open" : ""} ${className}`}
    >
      <button className="nav-drawer__btn" onClick={toggle}>
        <svg
          className="nav-drawer__icon"
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="inherit"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M36 14L8 14V11L36 11V14Z" fill="inherit" />
          <path d="M36 24L8 24V21L36 21V24Z" fill="inherit" />
          <path d="M36 34L8 34V31L36 31V34Z" fill="inherit" />
        </svg>
      </button>
      <div className="nav-drawer__overlay" onClick={toggle}></div>
      <div className="nav-drawer__content">
        <button
          className="nav-drawer__btn nav-drawer__close-btn"
          onClick={toggle}
        >
          <img
            className="nav-drawer__icon nav-drawer__close-icon"
            src={closeIcon}
            alt="close"
          ></img>
        </button>
        <ul className="nav-drawer__list">
          <li className="nav-drawer__item">
            <NavLink
              className={({ isActive }) =>
                `nav-drawer__link ${isActive ? "nav-drawer__link_active" : ""}`
              }
              to="/"
            >
              Главная
            </NavLink>
          </li>
          <li className="nav-drawer__item">
            <NavLink
              className={({ isActive }) =>
                `nav-drawer__link ${isActive ? "nav-drawer__link_active" : ""}`
              }
              to="/movies"
            >
              Фильмы
            </NavLink>
          </li>
          <li className="nav-drawer__item">
            <NavLink
              className={({ isActive }) =>
                `nav-drawer__link ${isActive ? "nav-drawer__link_active" : ""}`
              }
              to="/saved-movies"
            >
              Сохраненные фильмы
            </NavLink>
          </li>
        </ul>
        <ProfileBtn className="nav-drawer__profile-btn" />
      </div>
    </div>
  );
};

export default NavDrawer;
