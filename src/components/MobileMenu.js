/**
 * Apple Notes Portfolio
 * Original Author: Ashutosh Sharma (@ashuwhy)
 * GitHub: https://github.com/ashuwhy/reactfolio
 *
 * While this template is available for use, proper attribution
 * to the original author is required.
 */

import React from 'react';
import { Link } from 'react-router-dom';

function MobileMenu() {
  return (
    <nav className="mobile-menu">
      <div className="notes">
        <div className="notes-header">
          <h2>Notes</h2>
        </div>

        <div className="pinned">
          <span className="fas fa-thumbtack"></span>
          pinned
        </div>

        <div className="note-items">
          <div className="note-item">
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
          <div className="note-item">
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
          <div className="note-item">
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
          <div className="note-item">
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

export default MobileMenu; 