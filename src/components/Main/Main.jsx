import React from 'react';
import AboutProject from '../AboutProject/AboutProject';
import Header from '../Header/Header';
import AboutMe from '../AboutMe/AboutMe';
import Student from '../Student/Student';
import Techs from '../Techs/Techs';

const Main = () => {
  return (
    <main>
      <Header />
      <AboutProject />
      <AboutMe />
      <Techs />
      <Student />
    </main>
  );
};

export default Main;