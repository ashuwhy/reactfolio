import React from 'react';
import Sidebar from './Sidebar';

function Layout({ children }) {
  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        {children}
      </div>
    </div>
  );
}

export default Layout; 