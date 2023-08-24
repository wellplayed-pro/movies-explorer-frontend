import React from "react";
import "./AuthLayout.css";
import Logo from "../Logo/Logo";

const AuthLayout = ({ title, content, bottom }) => {
  return (
    <section className="auth-layout">
      <div className="auth-layout__header">
        <Logo />
        <h1 className="auth-layout__title">{title}</h1>
      </div>
      <div className="auth-layout__content">{content}</div>
      <div className="auth-layout__spacer"></div>
      <div className="auth-layout__bottom">{bottom}</div>
    </section>
  );
};

export default AuthLayout;
