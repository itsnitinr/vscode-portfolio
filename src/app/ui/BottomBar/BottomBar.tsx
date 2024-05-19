import ErrorIcon from '@/ui/icons/ErrorIcon'
import WarningIcon from '@/ui/icons/WarningIcon'
import BellIcon from '@/ui/icons/BellIcon'
import CheckIcon from '@/ui/icons/CheckIcon'
import NextjsIcon from '@/ui/icons/NextjsIcon'
import SourceControlIcon from '@/ui/icons/SourceControlIcon'
import styles from './Bottombar.module.css'

function BottomBar() {
  return (
    <footer className={styles.bottomBar}>
      <div className={styles.container}>
        <a
          href='https://github.com/gabrielrbl/vscode-portfolio'
          target='_blank'
          rel='noreferrer noopener'
          className={styles.section}
        >
          <SourceControlIcon className={styles.icon} />
          <p>main</p>
        </a>
        <div className={styles.section}>
          <ErrorIcon className={styles.icon} />
          <p className={styles.errorText}>0</p>&nbsp;&nbsp;
          <WarningIcon className={styles.icon} />
          <p>0</p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.section}>
          <NextjsIcon className={styles.icon} />
          <p>Powered by Next.js</p>
        </div>
        <div className={styles.section}>
          <CheckIcon className={styles.icon} />
          <p>Prettier</p>
        </div>
        <div className={styles.section}>
          <BellIcon />
        </div>
      </div>
    </footer>
  )
}

export default BottomBar
