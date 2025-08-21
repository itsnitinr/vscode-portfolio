import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ProjectsPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to publications page
    router.replace('/publications');
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
      Redirecting to Publications...
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Projects' },
  };
}

export default ProjectsPage;
