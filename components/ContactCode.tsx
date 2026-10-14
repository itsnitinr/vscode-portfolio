import { socials } from '@/portfolio.config';

import styles from '@/styles/ContactCode.module.css';

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {socials.map((item) => (
        <p className={styles.line} key={item.id}>
          &nbsp;&nbsp;&nbsp;{item.id}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.handle}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
