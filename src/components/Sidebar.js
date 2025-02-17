import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import '../styles/Sidebar.css';        // Desktop and common styles
import '../styles/MobileSiderbar.css';  // Mobile-specific styles

function Sidebar() {
  const { pathname } = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Combine the base "sidebar" class with the "sidebar-mobile" class on mobile.
  const sidebarClass = isMobile ? 'sidebar sidebar-mobile' : 'sidebar';

  return (
    <nav className={sidebarClass}>
      <div className="notes">
        <div className="notes-header">
          <h2>Notes</h2>
        </div>

        <div className="pinned">
          <span className="fas fa-thumbtack"></span>
          pinned
        </div>

        <div className="note-items">
          <div className={`note-item ${pathname === '/about' ? 'active' : ''}`}>
            <Link to="/about">
              <span className="emoji">👋</span>
              <div className="note-content">
                <div>about me</div>
                <div className="preview">
                  <div className="date">03/01/2025</div>
                  hey there! i'm...
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="today">today</div>
        <div className="note-items">
          <div className={`note-item ${pathname === '/links' ? 'active' : ''}`}>
            <Link to="/links">
              <span className="emoji">🔗</span>
              <div className="note-content">
                <div>links</div>
                <div className="preview">
                  <div className="date">05/01/2025</div>
                  not super acti...
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="older">older</div>
        <div className="note-items">
          <div className={`note-item ${pathname === '/reading' ? 'active' : ''}`}>
            <Link to="/reading">
              <span className="emoji">📚</span>
              <div className="note-content">
                <div>reading</div>
                <div className="preview">
                  <div className="date">02/12/2024</div>
                  books i'm curr...
                </div>
              </div>
            </Link>
          </div>
          <div className={`note-item ${pathname === '/tech-stack' ? 'active' : ''}`}>
            <Link to="/tech-stack">
              <span className="emoji">💻</span>
              <div className="note-content">
                <div>tech stack</div>
                <div className="preview">
                  <div className="date">12/12/2024</div>
                  a detailed look...
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar; 