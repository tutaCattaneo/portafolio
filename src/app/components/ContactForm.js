'use client';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from '../styles/ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      message,
      to_name: 'Matias',  // O el nombre que quieras usar como destinatario
      reply_to: email,
    };

    emailjs.send('service_tzr80y6', 'template_eunmwuo', templateParams, 'GzOEbGN69xUyPtZOk')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccess(true);
        setShowSuccess(true);
        // Resetea los campos del formulario
        setName('');
        setEmail('');
        setMessage('');

        // Ocultar el mensaje después de 3 segundos
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
      }, (error) => {
        console.error('FAILED...', error);
      });
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <section className={styles.contactForm}>
      <h2 onClick={toggleVisibility}>
        Contact Me {isVisible ? '-' : '+'}
      </h2>
      {isVisible && (
        <div className={styles['contactForm-content']}>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              Message:
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
          {success && (
            <p className={`${styles.successMessage} ${!showSuccess ? styles.fadeOut : ''}`}>
              Your message has been sent!
            </p>
          )}
        </div>
      )}
    </section>
  );
};

export default ContactForm;
