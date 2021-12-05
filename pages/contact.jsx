import { useState } from 'react';
import ContactCode from '../components/ContactCode';
import styles from '../styles/ContactPage.module.css';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(process.env.NEXT_PUBLIC_API_URL);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
      method: 'POST',
      body: JSON.stringify({ name, email, subject, message }),
    });
    if (res.ok) {
      alert('Your response has been received!');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } else {
      alert('There was an error. Please try again in a while.');
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.heading}>Reach Out Via Socials</h3>
        <ContactCode />
      </div>
      <div>
        <h3 className={styles.heading}>Or Fill Out This Form</h3>
        <form className={styles.form} onSubmit={submitForm}>
          <div className={styles.flex}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="name">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
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
