import { useEffect } from 'react';

const GithubPage = () => {
  useEffect(() => {
    // Redirect to GitHub profile since this is an external link
    window.location.href = 'https://github.com/johnmath';
  }, []);

  // Show loading state while redirecting
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      color: 'rgba(255, 255, 255, 0.7)' 
    }}>
      Redirecting to GitHub profile...
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'GitHub' },
  };
}

export default GithubPage;