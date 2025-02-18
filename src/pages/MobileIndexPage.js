import React, { useEffect } from 'react';
import Sidebar from '../components/Sidebar';

function MobileIndexPage() {
  useEffect(() => {
    // Add class to body for mobile-specific styles
    document.body.classList.add('is-mobile-index');
    
    return () => {
      document.body.classList.remove('is-mobile-index');
    };
  }, []);

  return (
    <div className="mobile-index-container">
      {/* This shows the notes sidebar as the first page on mobile */}
      <Sidebar />
      {/* Add any additional layout/content you want on your mobile index page */}
    </div>
  );
}

export default MobileIndexPage; 