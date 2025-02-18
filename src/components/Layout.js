import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import '../styles/MobileSiderbar.css'; // Mobile-specific sidebar overrides (see next section)

function Layout({ children }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  // For mobile pages (non-index) the sidebar is hidden by default.
  const [showSidebar, setShowSidebar] = useState(false);
  // const location = useLocation();

  useEffect(() => {
    // Update mobile status on resize.
    function handleResize() {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      // Always show sidebar on desktop.
      if (!mobile) {
        setShowSidebar(true);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // A simple toggle for mobile users.
  function toggleSidebar() {
    setShowSidebar((prev) => !prev);
  }

  return (
    <div className="layout-container">
      {isMobile && (
        <button className="mobile-menu-button" onClick={toggleSidebar}>
          {/* Replace with your hamburger icon */}
          <img src="/menu-icon.png" alt="Toggle Menu" />
        </button>
      )}

      {/* On desktop show sidebar always. On mobile, show only if toggled open.
          Note that if you're on the index page, you might want the sidebar to always show.
          You can adjust this logic as needed. */}
      {(!isMobile || showSidebar) && (
        <Sidebar closeSidebar={() => setShowSidebar(false)} />
      )}
      
      {/* When the user clicks the main content on mobile, close the sidebar */}
      <div
        className="main-content"
        onClick={() => {
          if (isMobile) setShowSidebar(false);
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Layout; 