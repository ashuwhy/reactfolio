import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/MobileSiderbar.css';  // Mobile-specific styles

function Sidebar({ closeSidebar }) {
  const { pathname } = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // If on mobile and a link is clicked, hide the sidebar.
  const handleLinkClick = () => {
    if (isMobile && closeSidebar) {
      closeSidebar();
    }
  };

  return (
    <nav className="sidebar">
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
            <Link to="/about" onClick={handleLinkClick}>
              <span className="emoji">👋</span>
              <div className="note-content">
                <div style={{'font-size': '14px'}}>about me</div>
                <div className="preview">
                  <div className="date">03/01/2025</div>
                  <span className="preview-text">hey there! i'm a computer science student at IIT Kharagpur</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="today">today</div>
        <div className="note-items">
          <div className={`note-item ${pathname === '/links' ? 'active' : ''}`}>
            <Link to="/links" onClick={handleLinkClick}>
              <span className="emoji">🔗</span>
              <div className="note-content">
                <div style={{'font-size': '14px'}}>links</div>
                <div className="preview">
                  <div className="date">05/01/2025</div>
                  <span className="preview-text">not super active on social media, but you can find me on these platforms</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="older">older</div>
        <div className="note-items">
          <div className={`note-item ${pathname === '/reading' ? 'active' : ''}`}>
            <Link to="/reading" onClick={handleLinkClick}>
              <span className="emoji">📚</span>
              <div className="note-content">
                <div style={{'font-size': '14px'}}>reading</div>
                <div className="preview">
                  <div className="date">02/12/2024</div>
                  <span className="preview-text">books i'm currently reading and some of my favorites.</span>
                </div>
              </div>
            </Link>
          </div>
          <div className={`note-item tech-stack ${pathname === '/tech-stack' ? 'active' : ''}`}>
            <Link to="/tech-stack" onClick={handleLinkClick}>
              <span className="emoji">💻</span>
              <div className="note-content">
                <div style={{'font-size': '14px'}}>tech stack</div>
                <div className="preview">
                  <div className="date">12/12/2024</div>
                  <span className="preview-text">a detailed look at the tech stack i use.</span>
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