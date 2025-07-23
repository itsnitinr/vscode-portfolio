import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'github',
    link: 'DanielSCustodio',
    href: 'https://github.com/DanielSCustodio',
  },
  {
    social: 'linkedin',
    link: 'danielscustodio',
    href: 'https://www.linkedin.com/in/danielscustodio/',
  },

  {
    social: 'instagram',
    link: 'danielscustodio',
    href: 'https://www.instagram.com/danielscustodio/',
  },

  {
    social: 'telegram',
    link: 'Dscust',
    href: 'https://t.me/dscust',
  },
  {
    social: 'wakatime',
    link: '@Custodio',
    href: 'https://wakatime.com/@Custodio',
  },

  {
    social: 'email',
    link: 'danielcustodio.dev@gmail.com',
    href: 'mailto:danielcustodio.dev@gmail.com',
  }
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
