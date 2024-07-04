import Head from 'next/head';
import Header from './components/Header';
import About from './components/About';
import Interests from './components/Interests';
import ContactForm from './components/ContactForm';
import RootLayout from './layout';
import styles from '../app/styles/Home.module.css'; // Asegúrate de crear este archivo

export default function Home() {
  return (
    <RootLayout>
      <Head>
        <title>My Profile</title>
        <meta name="description" content="User profile page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={styles.cardsContainer}>
        <About />
        <Interests />
      </div>
      <ContactForm />
    </RootLayout>
  );
}