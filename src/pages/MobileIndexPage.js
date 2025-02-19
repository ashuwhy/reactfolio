import React, { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

function MobileIndexPage() {
  useEffect(() => {
    document.body.classList.add('is-mobile-index');
    return () => {
      document.body.classList.remove('is-mobile-index');
    };
  }, []);

  return (
    <div className="mobile-index-container">
      <div className="mobile-index-content">
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default MobileIndexPage; 