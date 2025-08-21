import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ArticlesPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page since articles section has been removed
    router.replace('/');
  }, [router]);

  // Show loading state while redirecting
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      color: 'rgba(255, 255, 255, 0.7)' 
    }}>
      Redirecting...
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Articles' },
  };
}

export default ArticlesPage;
