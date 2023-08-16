import React from "react";
import { useState } from "react";
import './NavigationProfile.css'
import { Link, NavLink } from "react-router-dom";
import Burger from "./Burger/Burger";
import icon from "../../../images/header_icon-main.svg"

const NavigationProfile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleBurger() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      {!isMenuOpen ? (
        <button className='button__burger' tabIndex={1} onClick={toggleBurger} />
      ) : (
        <button className='button__burger-closse' tabIndex={1} onClick={toggleBurger} />
      )}
      <Burger isMenuOpen={isMenuOpen} />
      <div className='menu__profile'>
        <div className="menu__profile-links">
          
            <NavLink
              className={({ isActive }) => `menu__profile-link ${isActive ? 'active' : ''}`}
              to='/movies'
              tabIndex={1}
            >
              Фильмы
            </NavLink>
         
            <NavLink
              className={({ isActive }) => `menu__profile-link ${isActive ? 'active' : ''}`}
              to='/saved-movies'
              tabIndex={1}
            >
              Сохраненные фильмы
            </NavLink>
         
        </div>
        <Link 
        className='menu__profile-account'
        to='/profile'
        tabIndex={1}
        >
        <div className='menu__profile-box'>
          <img className='menu__profile-icon' src={icon} alt="Изображение иконки профиля" />
        </div>
        Аккаунт
        </Link>
      </div>
    </>
  )
}

export default NavigationProfile;