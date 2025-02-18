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
      aria-label="Back to main page"
    >
      <img src="/sidebar.leading.svg" alt="Back" />
    </button>
  );
}

export default BackButton; 