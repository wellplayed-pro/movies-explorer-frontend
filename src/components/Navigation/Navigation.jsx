import "./Navigation.css";
import { NavLink } from "react-router-dom";
import NavDrawer from "./navDrawer/navDrawer";

const NavigationProfile = () => {
  return (
    <div className="nav">
      <NavDrawer className="nav__drawer header-icon" />
      <nav className="nav__links">
        <NavLink
          className={({ isActive }) =>
            `link nav__link ${isActive ? "link nav__link-active" : ""}`
          }
          to="/movies"
        >
          Фильмы
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `link nav__link ${isActive ? "link nav__link-active" : ""}`
          }
          to="/saved-movies"
        >
          Сохраненные фильмы
        </NavLink>
      </nav>
    </div>
  );
};

export default NavigationProfile;
