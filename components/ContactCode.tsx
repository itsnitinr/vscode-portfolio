import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    platform: 'email',
    link: 'abascal.j@northeastern.edu',
    href: 'mailto:abascal.j@northeastern.edu',
  },
  {
    platform: 'linkedin',
    link: 'johnabascal',
    href: 'https://www.linkedin.com/in/johnabascal/',
  },
  {
    platform: 'github',
    link: 'johnmath',
    href: 'https://github.com/johnmath',
  },
  {
    platform: 'scholar',
    link: '3jYQ3FsAAAAJ&hl',
    href: 'https://scholar.google.com/citations?user=3jYQ3FsAAAAJ&hl',
  },
  // {
  //   platform: 'website',
  //   link: 'johnmath.github.io',
  //   href: 'https://johnmath.github.io',
  // },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.contact</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.platform}:{' '}
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
