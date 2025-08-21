import { useEffect } from 'react';

const LinkedinPage = () => {
  useEffect(() => {
    // Redirect to GitHub profile since this is an external link
    window.location.href = 'https://www.linkedin.com/in/johnabascal/';
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
      Redirecting to LinkedIn profile...
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'LinkedIn' },
  };
}

export default LinkedinPage;
