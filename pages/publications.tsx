import { useEffect } from 'react';
import { useRouter } from 'next/router';

const PublicationsPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Permanent redirect to /papers
    router.replace('/papers');
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
      Redirecting to Papers...
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Publications' },
  };
}

export default PublicationsPage;