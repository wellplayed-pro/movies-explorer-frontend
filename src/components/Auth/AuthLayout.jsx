import React from "react";
import "./AuthLayout.css";
import Logo from "../Logo/Logo";

const AuthLayout = ({ children, title }) => {
  return (
    <section className="auth-layout">
      <div className="auth-layout__header">
        <Logo />
        <h1 className="auth-layout__title">{title}</h1>
      </div>
      {children}
    </section>
  );
};

export default AuthLayout;
