import React from "react";
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import AboutMe from "./AboutMe/AboutMe";
import Techs from "./Techs/Techs";
import "./SectionTitle/SectionTitle.css";
import Page from "../Page/Page";

const Main = () => {
  return (
    <>
      <Promo />
      <Page>
        <AboutProject />
        <Techs />
        <AboutMe />
      </Page>
    </>
  );
};

export default Main;
