import { Montserrat } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Header.module.css';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/img/matias.jpg" alt="Profile Image" className={styles.profileImage} />
      <h1 className={`${styles.title} ${montserrat.className}`}>Matias Cattaneo</h1>
      <div className={styles.contactInfo}>
        <p>
          <FontAwesomeIcon icon={faPhone} className={styles.icon} /> +543385590390
        </p>
        <p>
          <a href="mailto:matiascattaneo500@gmail.com" className={styles.link}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} /> matiascattaneo500@gmail.com
          </a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/matias-cattaneo-51571b174" target="_blank" rel="noopener noreferrer" className={styles.link}>
            <FontAwesomeIcon icon={faLinkedin} className={styles.icon} /> LinkedIn
          </a>
        </p>
      </div>
    </header>
  );
};

export default Header;
