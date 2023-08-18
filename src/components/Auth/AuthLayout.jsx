import React from "react";
import "./AuthLayout.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

const AuthLayout = ({ children, title }) => {
  return (
    <section className="auth-layout">
      <Link className="auth-layout__link" to={"/"}>
        <img className="auth-layout__logo" src={logo} alt="Логотип" />
      </Link>
      <h1 className="auth-layout__title">{title}</h1>
      {children}
    </section>
  );
};

export default AuthLayout;
