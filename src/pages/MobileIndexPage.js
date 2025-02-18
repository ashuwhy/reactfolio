import React from 'react';
import Sidebar from '../components/Sidebar';

function MobileIndexPage() {
  return (
    <div className="mobile-index-container">
      {/* This shows the notes sidebar as the first page on mobile */}
      <Sidebar />
      {/* Add any additional layout/content you want on your mobile index page */}
    </div>
  );
}

export default MobileIndexPage; 