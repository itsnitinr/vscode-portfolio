import ContactCode from '@/ui/ContactCode'
import styles from './ContactPage.module.css'
import Form from './Form'
import type { Metadata } from 'next'

function Page() {
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.heading}>Reach Out Via Socials</h3>
        <ContactCode />
      </div>
      <div>
        <h3 className={styles.heading}>Or Fill Out This Form</h3>
        <Form />
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Contact'
}

export default Page
