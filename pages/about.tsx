import { useEffect } from 'react';
import { useRouter } from 'next/router';

const AboutPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home page since about content is now at root
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
      Redirecting to about content...
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
