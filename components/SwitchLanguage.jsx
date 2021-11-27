import React from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import i18nConfig from '../i18n.json';
import styles from '../styles/SwitchLanguage.module.css';

const { locales } = i18nConfig;

export default function ChangeLanguage() {
  const { t, lang } = useTranslation();

  return (
    <div className={styles.container}>
      {locales.map((lng) => {
        return (
          <Link href="/" locale={lng} key={lng}>
            <a href="/" rel="noopener" className={styles.underline}>
              {t(`common:language-name-${lng}`)}
            </a>
          </Link>
        );
      })}
    </div>
  );
}
