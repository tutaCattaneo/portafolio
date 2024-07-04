'use client'

import { useState } from 'react';
import styles from '../styles/About.module.css';
import cardStyles from '../styles/Home.module.css';

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className={`${cardStyles.card}`}>
      <h2 onClick={toggleAccordion} className={styles.header}>
        Sobre mi
      </h2>
      <div className={`${styles.content} ${isOpen ? styles.open : ''}`}>
        <p>¡Hola! Soy Matias Cattaneo, un desarrollador de software con pasión por aprender y crear. Disfruto trabajando en proyectos innovadores y me esfuerzo constantemente por mejorar mis habilidades. En mi tiempo libre me gusta leer blogs de tecnología y experimentar con nuevas tecnologías..</p>
      </div>
    </section>
  );
};

export default About;
