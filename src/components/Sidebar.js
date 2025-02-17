import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const { pathname } = useLocation();

  return (
    <nav className="sidebar">
      <div className="notes">
        <div className="notes-header">
          <h2>Notes</h2>
        </div>

        <div className="pinned">
          <i className="fas fa-thumbtack"></i>
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