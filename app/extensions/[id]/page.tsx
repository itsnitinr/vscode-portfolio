import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { VscVerifiedFilled } from 'react-icons/vsc';

import ExtensionIcon from '@/components/ExtensionIcon';
import { extensions, getExtension } from '@/portfolio.config';

import styles from '@/styles/ExtensionPage.module.css';

interface ExtensionPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return extensions.map(({ id }) => ({ id }));
}

export async function generateMetadata({
  params,
}: ExtensionPageProps): Promise<Metadata> {
  const { id } = await params;
  const extension = getExtension(id);
  return { title: extension ? `Extension: ${extension.name}` : 'Extension' };
}

export default async function ExtensionPage({ params }: ExtensionPageProps) {
  const { id } = await params;
  const extension = getExtension(id);

  if (!extension) {
    notFound();
  }

  const related = extensions.filter(
    other => other.category === extension.category && other.id !== extension.id
  );

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <ExtensionIcon extension={extension} size={112} />
        <div className={styles.headerInfo}>
          <h1 className={styles.name}>{extension.name}</h1>
          <p className={styles.meta}>
            <span className={styles.publisher}>
              <VscVerifiedFilled className={styles.verified} aria-hidden />
              {extension.publisher}
            </span>
            <span className={styles.separator}>|</span>
            <span>{extension.category}</span>
            {extension.experience && (
              <>
                <span className={styles.separator}>|</span>
                <span>{extension.experience} of experience</span>
              </>
            )}
          </p>
          <p className={styles.description}>{extension.description}</p>
          <div className={styles.actions}>
            <span className={styles.installed}>Installed</span>
            <button
              type="button"
              className={styles.uninstall}
              disabled
              title="This one's here to stay"
            >
              Uninstall
            </button>
          </div>
        </div>
      </header>

      <nav className={styles.tabs} aria-label="Extension sections">
        <span className={styles.activeTab}>Details</span>
      </nav>

      <div className={styles.body}>
        <p className={styles.details}>
          {extension.details ?? extension.description}
        </p>

        {related.length > 0 && (
          <section>
            <h2 className={styles.relatedTitle}>
              More in {extension.category}
            </h2>
            <ul className={styles.related}>
              {related.map(other => (
                <li key={other.id}>
                  <Link
                    href={`/extensions/${other.id}`}
                    className={styles.relatedItem}
                  >
                    <ExtensionIcon extension={other} size={28} />
                    <span>{other.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
