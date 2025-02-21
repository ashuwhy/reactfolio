import React from 'react';
// import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="notes-footer">
      <span>© {currentYear} </span>
      <a 
        href="/edit" 
        target="_blank"   
        rel="noopener noreferrer"
        className="author-link"
      >
        Ashutosh.
      </a>
      <span> All rights reserved.</span>
    </div>
  );
}

export default Footer; 