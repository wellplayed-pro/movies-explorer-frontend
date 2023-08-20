import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { CurrentUserContext } from '../../utils/CurrentUserContext';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Header from "../Header/Header";


function App() {
  const { pathname } = useLocation();

  const footerSection =
    pathname === '/' || pathname === '/movies' || pathname === '/saved-movies';

  return (
    <CurrentUserContext.Provider value={{}}>
      <div className="page">
      <Header/>
        <main>
          <Routes>
            <Route
              path='/'
              element={<Main />}
            />
            <Route
              path='/movies'
            element={<Movies />}
            />
            <Route
              path='/saved-movies'
            element={<SavedMovies />}
            />
            <Route
              path='/profile'
            element={<Profile />}
            />
            <Route
              path='/signup'
            element={<Register />}
            />
            <Route
              path='/signin'
            element={<Login />}
            />
            <Route
              path='*'
              element={<NotFound />}
            />
          </Routes>
        </main>
        {footerSection && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;