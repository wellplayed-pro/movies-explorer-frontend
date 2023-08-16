import React from 'react';
import Promo from './Promo/Promo';
import Header from '../Header/Header';
import AboutMe from './AboutMe/AboutMe';
import Student from '../Student/Student';
import Techs from './Techs/Techs';

const Main = () => {
  return (
    <main>
      <Header />
      <Promo />
      <AboutMe />
      <Techs />
      <Student />
    </main>
  );
};

export default Main;