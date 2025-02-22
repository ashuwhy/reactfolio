/**
 * Apple Notes Portfolio
 * Original Author: Ashutosh Sharma (@ashuwhy)
 * GitHub: https://github.com/ashuwhy/reactfolio
 *
 * While this template is available for use, proper attribution
 * to the original author is required.
 */

import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import '../styles/MobileSiderbar.css'; // Mobile-specific sidebar overrides (see next section)

function Layout({ children, isMobile }) {
  const [showSidebar, setShowSidebar] = useState(false);
  // const location = useLocation();

  // Remove the mobile detection logic from Layout and use the prop instead
  useEffect(() => {
    if (!isMobile) {
      setShowSidebar(true);
    }
  }, [isMobile]);

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