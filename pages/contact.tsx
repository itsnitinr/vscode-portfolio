import ContactCode from '@/components/ContactCode';
import styles from '@/styles/ContactPage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contactContainer}>
        <h3 className={styles.heading}>Reach Out Via Socials</h3>
        <ContactCode />
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
