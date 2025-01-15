import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'AkashThakur.me',
    href: 'https://AkashThakur.me',
  },
  {
    social: 'email',
    link: 'AkashThakur@gmail.com',
    href: 'mailto:AkashThakur@gmail.com',
  },
  {
    social: 'github',
    link: 'itsnitinr',
    href: 'https://github.com/itsnitinr',
  },
  {
    social: 'linkedin',
    link: 'AkashThakur',
    href: 'https://www.linkedin.com/in/AkashThakur/',
  },
  {
    social: 'twitter',
    link: 'IamAkashThakur',
    href: 'https://www.twitter.com/IamAkashThakur',
  },
  {
    social: 'instagram',
    link: 'IamAkashThakur',
    href: 'https://www.instagram.com/IamAkashThakur',
  },
  {
    social: 'polywork',
    link: 'AkashThakur',
    href: 'https://www.polywork.com/AkashThakur',
  },
  {
    social: 'telegram',
    link: 'IamAkashThakur',
    href: 'https://t.me/IamAkashThakur',
  },
  {
    social: 'codepen',
    link: 'AkashThakur',
    href: 'https://codepen.io/itsnitinr',
  },
  {
    social: 'codesandbox',
    link: 'itsnitinr',
    href: 'https://codesandbox.io/u/itsnitinr',
  },
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
