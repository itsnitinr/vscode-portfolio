import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'jeffk.dev',
    href: 'https://jeffk.dev',
  },
  {
    social: 'email',
    link: 'jeffkazzee@gmail.com',
    href: 'mailto:jeffkazzee@gmail.com',
  },
  {
    social: 'github',
    link: 'Jeff-Kazzee',
    href: 'https://github.com/Jeff-Kazzee',
  },
  {
    social: 'linkedin',
    link: 'jeffkazzee',
    href: 'https://www.linkedin.com/in/jeffkazzee/',
  },
  {
    social: 'twitter',
    link: 'jeffkazzee',
    href: 'https://www.twitter.com/jeffkazzee',
  },
  {
    social: 'dev.to',
    link: 'jeffkazzee',
    href: 'https://dev.to/jeffkazzee',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
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
