import styles from './ContactCode.module.css'

const contactItems = [
  {
    social: 'email',
    link: 'gabrielrblgbi@gmail.com',
    href: 'mailto:gabrielrblgbi@gmail.com'
  },
  {
    social: 'github',
    link: 'gabrielrbl',
    href: 'https://github.com/gabrielrbl'
  },
  {
    social: 'linkedin',
    link: 'gabrielrbl',
    href: 'https://www.linkedin.com/in/gabrielrbl/'
  },
  {
    social: 'instagram',
    link: 'gabrielrbl',
    href: 'https://www.instagram.com/gabrielrbl'
  }
]

function ContactCode() {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target='_blank' rel='noopener'>
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target='_blank' rel='noopener'>
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  )
}

export default ContactCode
