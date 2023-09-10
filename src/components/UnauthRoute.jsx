import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { CurrentUserContext } from "../utils/CurrentUserContext";

const OnlyForUnauthRoute = ({ element }) => {
  const { isAuth } = useContext(CurrentUserContext);
  if (isAuth) {
    return <Navigate to="/" />;
  }

  return element;
};

export default OnlyForUnauthRoute;
