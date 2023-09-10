import { Link } from "react-router-dom";
import "./UnauthHeader.css";
import Logo from "../../Logo/Logo";

const UnauthHeader = () => {
  return (
    <div className="header-content unauth-header">
      <Logo />
      <div className="unauth-header__links">
        <Link
          className="unauth-header__link unauth-header__link-reg"
          to="/signup"
          tabIndex={1}
        >
          Регистрация
        </Link>
        <Link
          className="unauth-header__link unauth-header__link-enter header-btn"
          to="/signin"
          tabIndex={1}
        >
          Войти
        </Link>
      </div>
    </div>
  );
};

export default UnauthHeader;
