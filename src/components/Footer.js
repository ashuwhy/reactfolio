import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="notes-footer">
      <span style={{ fontWeight: '500' }}>© {currentYear} Ashutosh. All rights reserved.</span>
    </div>
  );
}

export default Footer; 