import { Metadata } from 'next';

import ArticleCard from '@/components/ArticleCard';

import { Article } from '@/types';

import styles from '@/styles/ArticlesPage.module.css';

export const metadata: Metadata = {
  title: 'Articles',
};

export const revalidate = 60;

async function getArticles(): Promise<Article[]> {
  const res = await fetch(
    'https://dev.to/api/articles/me/published?per_page=6',
    {
      headers: {
        'api-key': process.env.DEV_TO_API_KEY!,
      },
    }
  );

  if (!res.ok) {
    console.error(`Failed to fetch articles: ${res.status} ${res.statusText}`);
    return [];
  }

  return res.json();
}

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>My Articles</h1>
      <p className={styles.pageSubtitle}>
        Recent posts from{' '}
        <a
          href="https://dev.to/itsnitinr"
          target="_blank"
          rel="noopener"
          className={styles.underline}
        >
          dev.to
        </a>{' '}
        where I share insights and tutorials about web development.
      </p>
      <div className={styles.container}>
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
