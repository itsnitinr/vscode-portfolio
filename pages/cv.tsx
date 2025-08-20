import { cvData, CVEntry } from '@/data/cv';
import styles from '@/styles/CVPage.module.css';

interface DescriptionItem {
  title?: string;
  contents?: string[];
}

interface TimeTableEntry {
  title: string;
  institution?: string;
  year: string;
  description?: (string | DescriptionItem)[];
}

interface MapEntry {
  name: string;
  value: string;
}

const CVPage = () => {
  const renderTimeTable = (contents: TimeTableEntry[]) => {
    return (
      <div className={styles.timeTable}>
        {contents.map((entry, index) => (
          <div key={index} className={styles.timeTableEntry}>
            <div className={styles.timeTableYear}>
              {entry.year}
            </div>
            <div className={styles.timeTableContent}>
              <h4 
                className={styles.timeTableTitle}
                dangerouslySetInnerHTML={{ __html: entry.title }}
              />
              {entry.institution && (
                <p 
                  className={styles.timeTableInstitution}
                  dangerouslySetInnerHTML={{ __html: entry.institution }}
                />
              )}
              {entry.description && (
                <div className={styles.timeTableDescription}>
                  {entry.description.map((desc, descIndex) => {
                    if (typeof desc === 'string') {
                      return (
                        <p 
                          key={descIndex} 
                          className={styles.descriptionItem}
                          dangerouslySetInnerHTML={{ __html: desc }}
                        />
                      );
                    } else if (desc.title && desc.contents) {
                      return (
                        <div key={descIndex} className={styles.nestedDescription}>
                          <strong>{desc.title}:</strong>
                          <ul className={styles.descriptionList}>
                            {desc.contents.map((content: string, contentIndex: number) => (
                              <li 
                                key={contentIndex}
                                dangerouslySetInnerHTML={{ __html: content }}
                              />
                            ))}
                          </ul>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderMap = (contents: MapEntry[]) => {
    return (
      <div className={styles.map}>
        {contents.map((entry, index) => (
          <div key={index} className={styles.mapEntry}>
            <strong className={styles.mapName}>{entry.name}:</strong>
            <span 
              className={styles.mapValue}
              dangerouslySetInnerHTML={{ __html: entry.value }}
            />
          </div>
        ))}
      </div>
    );
  };

  const renderList = (contents: string[]) => {
    return (
      <ul className={styles.list}>
        {contents.map((item, index) => (
          <li 
            key={index}
            dangerouslySetInnerHTML={{ __html: item }}
          />
        ))}
      </ul>
    );
  };

  const renderContent = (entry: CVEntry) => {
    switch (entry.type) {
      case 'time_table':
        return renderTimeTable(entry.contents as TimeTableEntry[]);
      case 'map':
        return renderMap(entry.contents as MapEntry[]);
      case 'list':
        return renderList(entry.contents as string[]);
      default:
        return <div>{JSON.stringify(entry.contents)}</div>;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.pageTitle}>Curriculum Vitae</h1>
        <p className={styles.pageSubtitle}>
          Academic and professional background
        </p>
      </div>

      <div className={styles.cvContent}>
        {cvData.map((entry, index) => (
          <div key={index} className={styles.cvSection}>
            <h3 className={styles.sectionTitle}>{entry.title}</h3>
            <div className={styles.sectionContent}>
              {renderContent(entry)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'CV' },
  };
}

export default CVPage;