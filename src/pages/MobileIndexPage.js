import React from 'react';
import Sidebar from '../components/Sidebar';

function IndexPage() {
  return (
    <div className="container is-index">
      {/* This shows the notes sidebar as the first page on mobile */}
      <Sidebar />
      {/* Add any additional layout/content you want on your mobile index page */}
    </div>
  );
}

export default IndexPage; 