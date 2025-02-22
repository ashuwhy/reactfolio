/**
 * Apple Notes Portfolio
 * Original Author: Ashutosh Sharma (@ashuwhy)
 * GitHub: https://github.com/ashuwhy/reactfolio
 *
 * While this template is available for use, proper attribution
 * to the original author is required.
 */

import React, { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

function MobileIndexPage() {
  useEffect(() => {
    document.body.classList.add('is-mobile-index');
    return () => {
      document.body.classList.remove('is-mobile-index');
    };
  }, []);

  return (
    <div className="mobile-index-container">
      <div className="mobile-index-content">
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default MobileIndexPage; 