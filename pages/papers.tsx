import papers, { Paper } from '@/data/papers';
import styles from '@/styles/PapersPage.module.css';

const PapersPage = () => {
  const getLinkIcon = (linkType: string) => {
    switch (linkType) {
      case 'pdf':
        return '📄';
      case 'doi':
        return '🔗';
      case 'code':
        return '💻';
      case 'slides':
        return '📊';
      case 'poster':
        return '🖼️';
      default:
        return '🔗';
    }
  };

  const getLinkLabel = (linkType: string) => {
    switch (linkType) {
      case 'pdf':
        return 'PDF';
      case 'doi':
        return 'DOI';
      case 'code':
        return 'Code';
      case 'slides':
        return 'Slides';
      case 'poster':
        return 'Poster';
      default:
        return linkType.toUpperCase();
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Papers</h1>
        <p className={styles.subtitle}>
          Research publications in privacy-preserving machine learning, differential privacy, and adversarial machine learning.
        </p>
      </header>

      <section className={styles.papersSection}>
        <ul className={styles.papersList}>
          {papers.map((paper: Paper) => (
            <li key={paper.id} className={styles.paperItem}>
              <article className={styles.paper}>
                <header className={styles.paperHeader}>
                  <h2 className={styles.paperTitle}>{paper.title}</h2>
                  <div className={styles.paperMeta}>
                    <span className={styles.authors}>{paper.authors}</span>
                    <span className={styles.separator}>•</span>
                    <span className={styles.venue}>{paper.venue}</span>
                    <span className={styles.separator}>•</span>
                    <span className={styles.year}>{paper.year}</span>
                  </div>
                </header>

                <div className={styles.badgesContainer}>
                  <span className={`badge ${styles.typeBadge}`}>
                    {paper.type}
                  </span>
                  
                  {paper.keywords && paper.keywords.map((keyword, index) => (
                    <span key={index} className={`badge ${styles.keywordBadge}`}>
                      {keyword}
                    </span>
                  ))}
                  
                  {paper.links && Object.entries(paper.links).map(([linkType, url]) => (
                    url && (
                      <a
                        key={linkType}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`badge ${styles.linkBadge}`}
                        aria-label={`${getLinkLabel(linkType)} for ${paper.title}`}
                      >
                        {getLinkIcon(linkType)} {getLinkLabel(linkType)}
                      </a>
                    )
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Papers' },
  };
}

export default PapersPage;