import { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';

import ContactCode from '../components/ContactCode';
import styles from '../styles/ContactPage.module.css';

const ContactPage = () => {
  const { t } = useTranslation('contact');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const submitForm = async (e) => {
    e.preventDefault();

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
      method: 'POST',
      body: JSON.stringify({ name, email, subject, message }),
    });

    if (res.ok) {
      alert(t('submitted'));
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } else {
      alert(t('submitted-error'));
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <h1>{t('title')}</h1>
        <ContactCode />
      </div>
      <div>
        <h1>{t('form')}</h1>
        <form className={styles.form} onSubmit={submitForm}>
          <div className={styles.flex}>
            <div>
              <label htmlFor="name">{t('name')}</label>
              <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="email">{t('email')}</label>
              <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
          </div>
          <div>
            <label htmlFor="name">{t('subject')}</label>
            <input type="text" name="subject" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="message">{t('message')}</label>
            <textarea name="message" id="message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
          </div>
          <button type="submit">{t('submit')}</button>
        </form>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default ContactPage;
