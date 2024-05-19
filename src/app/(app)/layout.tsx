'use client'
import { useEffect } from 'react'
import Head from 'next/head'
import TitleBar from '../../ui/TitleBar'
import SideBar from '../../ui/SideBar'
import Explorer from '../../ui/Explorer'
import BottomBar from '../../ui/BottomBar'
import TabsBar from '../../ui/TabsBar'
import styles from './Layout.module.css'

import '@/public/globals.css'
import '@/public/themes.css'

type LayoutProps = {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  useEffect(() => {
    let theme = localStorage.getItem('theme')

    if (theme) {
      document.documentElement.setAttribute('data-theme', theme)
    }
  }, [])

  return (
    <html lang='pt-br'>
      <Head>
        <title>Gabriel Lobo</title>
        <meta
          name='description'
          content="Gabriel Lobo is an avid full stack web developer building websites and applications you'd love to use"
        />
        <meta
          name='keywords'
          content='gabriel lobo, gabriel, lobo, web developer portfolio, gabriel web developer, gabriel developer, python, django, react, typescript, gabriel lobo portfolio, vscode-portfolio'
        />
        <meta property='og:title' content="Gabriel Lobo's Portfolio" />
        <meta
          property='og:description'
          content="A full-stack developer building websites that you'd like to use."
        />
        <meta
          property='og:url'
          content='https://gabrielrbl-portfolio.vercel.app'
        />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <body>
        <TitleBar />
        <div className={styles.main}>
          <SideBar />
          <Explorer />
          <div style={{ width: '100%' }}>
            <TabsBar />
            <main className={styles.content}>{children}</main>
          </div>
        </div>
        <BottomBar />
      </body>
    </html>
  )
}

export default Layout

// import { useEffect } from 'react'
// import Layout from '../components/Layout'
// import Head from '../components/Head'

// import '../styles/globals.css'
// import '../styles/themes.css'

// function MyApp({ Component, pageProps }) {
//   useEffect(() => {
//     if (localStorage.getItem('theme')) {
//       document.documentElement.setAttribute(
//         'data-theme',
//         localStorage.getItem('theme')
//       )
//     }
//   }, [])

//   return (
//     <Layout>
//       <Head title={`Gabriel Lobo | ${pageProps.title}`} />
//       <Component {...pageProps} />
//     </Layout>
//   )
// }

// export default MyApp
