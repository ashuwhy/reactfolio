import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Hide the back button on the primary page (/about)
  if (pathname === '/') return null;

  return (
    <button 
      className="back-button" 
      onClick={() => navigate('/')}
      aria-label="Back to notes"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="m15 18-6-6 6-6"></path>
      </svg>
      <span>Notes</span>
    </button>
  );
}

export default BackButton; 