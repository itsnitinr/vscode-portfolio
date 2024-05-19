import Link from 'next/link'
import { usePathname } from 'next/navigation'
import FilesIcon from '@/ui/icons/FilesIcon'
import GithubIcon from '@/ui/icons/GithubIcon'
// import CodeIcon from './icons/CodeIcon';
import MailIcon from '@/ui/icons/MailIcon'
import AccountIcon from '@/ui/icons/AccountIcon'
import SettingsIcon from '@/ui/icons/SettingsIcon'
import styles from '@/styles/Sidebar.module.css'

const sidebarTopItems = [
  {
    Icon: FilesIcon,
    path: '/'
  },
  {
    Icon: GithubIcon,
    path: '/github'
  },
  // {
  //   Icon: CodeIcon,
  //   path: '/projects',
  // },
  {
    Icon: MailIcon,
    path: '/contact'
  }
]

const sidebarBottomItems = [
  {
    Icon: AccountIcon,
    path: '/about'
  },
  {
    Icon: SettingsIcon,
    path: '/settings'
  }
]

function SideBar() {
  const pathname = usePathname()

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            <div
              className={`${styles.iconContainer} ${
                pathname === path && styles.active
              }`}
            >
              <Icon
                fill={
                  pathname === path
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
              />
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.sidebarBottom}>
        {sidebarBottomItems.map(({ Icon, path }) => (
          <div className={styles.iconContainer} key={path}>
            <Link href={path}>
              <Icon
                fill={
                  pathname === path
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
              />
            </Link>
          </div>
        ))}
      </div>
    </aside>
  )
}

export default SideBar
