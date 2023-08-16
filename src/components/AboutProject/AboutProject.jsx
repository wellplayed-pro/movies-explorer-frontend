import React from 'react';
import './AboutProject.css';
import { Link } from 'react-scroll';
import GlobeWeb from '../../images/landing-logo.svg';

const Hero = () => {
  return (
    <section className='about-project'>
      <div className='about-project__container'>
        <div className='about-project__container-intro'>
          <h1 className='about-project__title'>
            Учебный проект студента факультета Веб&#8209;разработки.
          </h1>
          <p className='about-project__subtitle'>
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <Link className='about-project__link'
            to='about'
            smooth={true}
            duration={300}
          >
            Узнать больше
          </Link>
        </div>
        <img
        className='about-project__globe'
        src={GlobeWeb}
        alt='Изображениеглобуса'
      />
      </div>
    </section>
  );
};

export default Hero;