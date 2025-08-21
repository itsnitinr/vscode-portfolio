import { useState } from 'react';
import { GetStaticProps } from 'next';
import { VscChevronDown, VscChevronRight, VscFilePdf, VscPlay, VscCode } from 'react-icons/vsc';
import { Publication } from '@/types/publications';
import styles from '@/styles/PublicationsPage.module.css';

interface PublicationsPageProps {
  publications: Publication[];
}

const PublicationsPage = ({ publications }: PublicationsPageProps) => {
  const [expandedAbstracts, setExpandedAbstracts] = useState<Set<string>>(new Set());

  const toggleAbstract = (slug: string) => {
    const newExpanded = new Set(expandedAbstracts);
    if (newExpanded.has(slug)) {
      newExpanded.delete(slug);
    } else {
      newExpanded.add(slug);
    }
    setExpandedAbstracts(newExpanded);
  };

  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Publications</h1>
      <p className={styles.pageSubtitle}>
        Research publications and academic work in privacy-preserving machine learning, 
        differential privacy, and adversarial machine learning.
      </p>

      <div className={styles.container}>
        {publications.length === 0 ? (
          <div className={styles.emptyState}>
            <p>Publications are being loaded. Check back soon!</p>
          </div>
        ) : (
          publications.map((publication) => (
            <div key={publication.slug} className={`${styles.publication} ${publication.featured ? styles.featured : ''}`}>
              <div className={styles.publicationHeader}>
                <h3 className={styles.title}>
                  {publication.link ? (
                    <a href={publication.link} target="_blank" rel="noopener noreferrer" className={styles.titleLink}>
                      {publication.title}
                    </a>
                  ) : (
                    publication.title
                  )}
                  {publication.featured && <span className={styles.featuredBadge}>Featured</span>}
                </h3>
                
                <div className={styles.metadata}>
                  <span className={styles.authors}>{publication.authors}</span>
                  {publication.venue && (
                    <>
                      <span className={styles.separator}>•</span>
                      <span className={styles.venue}>{publication.venue}</span>
                    </>
                  )}
                  <span className={styles.separator}>•</span>
                  <span className={styles.year}>{publication.year}</span>
                </div>

                {(publication.pdf_url || publication.video_url || publication.code_url) && (
                  <div className={styles.links}>
                    {publication.pdf_url && (
                      <a href={publication.pdf_url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                        <VscFilePdf /> PDF
                      </a>
                    )}
                    {publication.video_url && (
                      <a href={publication.video_url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                        <VscPlay /> Video
                      </a>
                    )}
                    {publication.code_url && (
                      <a href={publication.code_url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                        <VscCode /> Code
                      </a>
                    )}
                  </div>
                )}
              </div>

              {publication.abstract && (
                <div className={styles.abstractContainer}>
                  <button
                    onClick={() => toggleAbstract(publication.slug)}
                    className={styles.abstractToggle}
                  >
                    {expandedAbstracts.has(publication.slug) ? (
                      <>
                        <VscChevronDown /> Hide Abstract
                      </>
                    ) : (
                      <>
                        <VscChevronRight /> Show Abstract
                      </>
                    )}
                  </button>
                  
                  {expandedAbstracts.has(publication.slug) && (
                    <div className={styles.abstract} dangerouslySetInnerHTML={{ __html: publication.abstract }} />
                  )}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const publications = await import('@/data/publications.json').then(mod => mod.default);
    
    return {
      props: { 
        title: 'Publications',
        publications
      },
    };
  } catch (error) {
    console.error('Error loading publications:', error);
    return {
      props: { 
        title: 'Publications',
        publications: []
      },
    };
  }
};

export default PublicationsPage;