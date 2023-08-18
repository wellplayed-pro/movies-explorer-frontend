import React from "react";
import "./AuthSubAction.css";
import { Link } from "react-router-dom";

const AuthSubAction = ({ spanText, spanPatch, spanLink }) => {
  return (
    <div className="auth-sub-action">
      <span className="auth-sub-action__span">
        {spanText}
        <Link className="auth-sub-action__link" to={spanPatch}>
          {spanLink}
        </Link>
      </span>
    </div>
  );
};

export default AuthSubAction;
