import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { UserProvider } from "../../utils/CurrentUserContext";
import NotFound from "../NotFound/NotFound";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Header from "../Header/Header";
import { Helmet } from "react-helmet";
import ProtectedRoute from "../ProtectedRoute";
import OnlyForUnauthRoute from "../UnauthRoute";

function App() {
  const { pathname } = useLocation();

  <Helmet htmlAttributes={{ lang: "ru" }} />;

  const isMain = pathname === "/";
  const isMovies = pathname === "/movies";
  const isSavedMovies = pathname === "/saved-movies";
  const isHeaderHidden =
    pathname === "/signin" || pathname === "/signup" || pathname === "/404";

  const footerSection = isMain || isMovies || isSavedMovies;
  return (
    <UserProvider>
      {!isHeaderHidden && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/signup"
            element={<OnlyForUnauthRoute element={<Register />} />}
          />
          <Route
            path="/signin"
            element={<OnlyForUnauthRoute element={<Login />} />}
          />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/movies"
            element={<ProtectedRoute element={<Movies />} />}
          />
          <Route
            path="/saved-movies"
            element={<ProtectedRoute element={<SavedMovies />} />}
          />
          <Route
            path="/profile"
            element={<ProtectedRoute element={<Profile />} />}
          />
        </Routes>
      </main>
      {footerSection && <Footer />}
    </UserProvider>
  );
}

export default App;
