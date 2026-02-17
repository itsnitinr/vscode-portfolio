import Image from 'next/image';
import { VscEye, VscHeart, VscComment } from 'react-icons/vsc';

import { Article } from '@/types';

import styles from '@/styles/ArticleCard.module.css';

interface ArticleCardProps {
  article: Article;
  index: number;
}

const ArticleCard = ({ article, index }: ArticleCardProps) => {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      <div className={styles.number}>{String(index).padStart(2, '0')}</div>
      
      <div className={styles.imageWrapper}>
        <Image
          src={article.cover_image}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, 200px"
          className={styles.image}
        />
      </div>
      
      <div className={styles.content}>
        <div className={styles.main}>
          <h3 className={styles.title}>{article.title}</h3>
          <p className={styles.description}>{article.description}</p>
        </div>
        
        <div className={styles.footer}>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <VscEye size={13} />
              <span>{article.page_views_count.toLocaleString()}</span>
            </div>
            
            <div className={styles.stat}>
              <VscHeart size={13} />
              <span>{article.public_reactions_count}</span>
            </div>
            
            <div className={styles.stat}>
              <VscComment size={13} />
              <span>{article.comments_count}</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ArticleCard;
