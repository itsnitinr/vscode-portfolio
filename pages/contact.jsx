import { useState } from 'react';
import ContactCode from '../components/ContactCode';
import styles from '../styles/ContactPage.module.css';

const ContactPage = () => {

  return (
    <div className={ styles.container }>
      <div>
        <h3 className={ styles.heading }>Me encontre nas redes sociais</h3>
        <ContactCode />
      </div>
      <div>
        <h3 className={ styles.heading }>Ou se preferir me envie um e-mail</h3>
        <form className={ styles.form }
          action="https://formsquash.io/f/tdoUhsw05p5DZQxr9syO" 
          method="POST">
          <div className={ styles.flex }>
            <div>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                name="name"
                id="name"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="name">Assunto</label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
            />
          </div>
          <div>
            <label htmlFor="message">Mensagem</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
            ></textarea>
          </div>
          
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export async function getStaticProps () {
  return {
    props: { title: 'Contact' },
  };
}

export default ContactPage;
