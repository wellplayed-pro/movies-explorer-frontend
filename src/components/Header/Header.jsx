import React, { useContext } from "react";
import "./Header.css";
import { useLocation } from "react-router-dom";
import UnauthHeader from "./UnauthHeader/UnauthHeader";
import AuthHeader from "./AuthHeader/AuthHeader";
import { CurrentUserContext } from "../../utils/CurrentUserContext";

const Header = () => {
  const { isAuth } = useContext(CurrentUserContext);

  const location = useLocation();
  const isPromo = location.pathname === "/";

  return (
    <header className={`header ${isPromo ? "header_promo" : ""}`}>
      {isAuth ? <AuthHeader /> : <UnauthHeader />}
    </header>
  );
};

export default Header;
