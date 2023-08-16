import React from 'react';
import Promo from './Promo/Promo';
import Header from '../Header/Header';
import AboutProject from './AboutProject/AboutProject';
import Student from './Student/Student';
import Techs from './Techs/Techs';
import './SectionTitle/SectionTitle.css'

const Main = () => {
  return (
    <main>
      <Header />
      <Promo />
      <AboutProject />
      <Techs />
      <Student />
    </main>
  );
};

export default Main;